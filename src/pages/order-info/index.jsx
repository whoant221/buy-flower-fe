import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Navbar } from '../../layout/header/navbar';
import { addOrder, getCart } from '../../api/detail_product';
import { formatCurrency } from '../../helper'
import { getinfoUser } from '../../api/home';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from 'react-router-dom';
import { getVouchersByPrice, validVoucher } from "../../api/voucher.js";
import moment from 'moment';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

export function OrderInfo() {
    const token = localStorage.getItem('token')
    let navigate = useNavigate();
    const [form] = Form.useForm();

    const [disablePaypal, setDisablePaypal] = useState(true)
    const [cart, setCard] = useState([])

    const [sum, setSum] = useState(0)
    const [discount, setDiscount] = useState(0);
    const [infoReceive, setInfoReceive] = useState({
        receive_address: "",
        receiver: "",
        receive_phone: "",
        delivery_time: "",
        gift_cart_for: "",
        reason: "",
        message: "",
        currentCode: ''
    });

    const [vouchers, setVouchers] = useState([]);

    const { TextArea } = Input;

    const onSave = (props) => {
        Modal.success({
            content: 'Bạn đã đặt thành công. Chúng tôi sẽ liên lạc với bạn sớm nhất có thể để xác nhận thông tin này.',
        });
        navigate("/")
    }

    const onFinish = async(e) => {
        setDisablePaypal(false)
        const dataSave = { ...infoReceive, ...e, delivery_time: moment(e.delivery_time).format("YYYY-MM-DD") };
        try {
            await addOrder(dataSave, token)
        } catch (e) {
            e.response.data.forEach(({ message }) => {
                Modal.error({ content: message })
            })

        }

    }


    const handleChangeVoucher = async(code) => {
        if (code === undefined) {
            setInfoReceive(prevState => ({
                ...prevState,
                currentCode: ''
            }));

            setDiscount(0);
            return;
        }
        try {
            const { data: { sale_price } } = await validVoucher(code, sum)
            if (sale_price === 0) {
                setInfoReceive(prevState => ({
                    ...prevState,
                    currentCode: ''
                }));
                Modal.error({
                    content: 'Bạn không đủ điều kiện để sử dụng voucher này',
                });
                return;
            }

            setInfoReceive(prevState => ({
                ...prevState,
                currentCode: code
            }));

            setDiscount(sale_price);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        async function fetch() {
            setCard((await getCart(token)).data.shopping_carts)
            const { data } = await getinfoUser(token)
            form.setFieldsValue({
                receive_address: data.address,
                receiver: data.name,
                receive_phone: data.phone_number
            });
        }

        fetch()
    }, [])

    useEffect(() => {
        const getVouchers = async() => {
            try {
                const { data: { vouchers } } = await getVouchersByPrice(sum);
                setVouchers(vouchers);
            } catch (e) {
                console.error(e)
            }
        }
        getVouchers();
    }, [sum]);

    let total = 0
    if (cart.length > 0) {
        cart.forEach(e => {
            total += Number(e.original_price) * e.amount
        })

    }
    useEffect(() => {
        setSum(total)
    }, [total])

    return (
        <div>
            <div className="close-any">
                <Navbar/>
                <div id="content">
                    <div className="wrapper">
                        <div className="clearfix"/>
                        <div className=" frm-data">
                            {/* <h2>Thông tin người mua</h2> */}
                            <Form
                                form={form}
                                name="detailOr"
                                onFinish={onFinish}
                                style={{ padding: "70px, 0px" }}
                            >
                                <h2>Thông tin người nhận</h2>
                                <Form.Item
                                    label="Tên người nhận:"
                                    name="receiver"
                                    style={{ paddingTop: 90 }}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập tên người nhận',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    label="Điện thoại:"
                                    name="receive_phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập số điện thoại',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    label="Địa chỉ:"
                                    name="receive_address"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập địa chỉ',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>


                                <Form.Item label="Thời gian giao hàng"
                                           name="delivery_time"
                                           style={{ width: 300 }}
                                           rules={[
                                               {
                                                   required: true,
                                                   message: 'Hãy nhập ngày nhận',
                                               },
                                           ]}>
                                    <DatePicker disabledDate={(current) => {
                                        // Can not select days before today and today
                                        return current && current < moment().endOf('day');
                                    }}/>
                                </Form.Item>
                                <h2>Lời nhắn</h2>
                                <div>
                                    <Form.Item label="Thiệp gửi tặng cho:"
                                               defaultValue="Thiệp gửi tặng cho"
                                               name="gift_cart_for"
                                               style={{ paddingTop: 50 }}
                                               rules={[
                                                   {
                                                       required: true,
                                                       message: 'Yêu cầu nhập',
                                                   },
                                               ]}>

                                        <Select>
                                            <Select.Option value="brother">Anh,
                                                chị, em - Brother,
                                                sister</Select.Option>
                                            <Select.Option value="Friends">Bạn
                                                bè - Friends</Select.Option>
                                            <Select.Option value="Parent">Bố Mẹ
                                                - Parent</Select.Option>
                                            <Select.Option value="Husband">Chồng
                                                - Husband</Select.Option>
                                            <Select.Option value="Notme">Đặt
                                                giúp người khác - Not
                                                me</Select.Option>
                                            <Select.Option value="Partners">Đối
                                                tác, khách hàng -
                                                Partners/Customer</Select.Option>
                                            <Select.Option value="Boss">Đồng
                                                nghiệp/Sếp -
                                                Co-worker/Boss</Select.Option>
                                            <Select.Option value="Lover">Người
                                                yêu - Lover</Select.Option>
                                            <Select.Option value="Wife">Vợ
                                                -Wife</Select.Option>
                                            <Select.Option value="Other">Khác -
                                                Other</Select.Option>
                                        </Select>
                                    </Form.Item>

                                </div>
                                <div>

                                    <Form.Item label="Nhân dịp:"
                                               name="reason"
                                               defaultValue="Nhân dịp" rules={[
                                        {
                                            required: true,
                                            message: 'Yêu cầu nhập',
                                        },
                                    ]}>
                                        <Select>
                                            <Select.Option
                                                value="Congratulations">Chúc
                                                mừng -
                                                Congratulations</Select.Option>
                                            <Select.Option value="Grand">Khai
                                                trương - Grand
                                                openings</Select.Option>
                                            <Select.Option value="Birthday">Sinh
                                                nhật - Birthday</Select.Option>
                                            <Select.Option value="Thankyou">Cảm
                                                ơn - Thankyou</Select.Option>
                                            <Select.Option value="Sympathy">Chia
                                                buồn - Sympathy</Select.Option>
                                            <Select.Option value="Love">Làm
                                                quen/Tình yêu -
                                                Dating/Love</Select.Option>
                                            <Select.Option value="Anniversary">Ngày
                                                kỉ niệm -
                                                Anniversary</Select.Option>
                                            <Select.Option value="Occacion">Ngày
                                                lễ - Occacion day (20/10, 8/3,
                                                20/11)</Select.Option>
                                            <Select.Option value="JustLike">Thích
                                                thì tặng - Just
                                                Because</Select.Option>
                                            <Select.Option value="Sorry">Xin lỗi
                                                - Sorry</Select.Option>
                                            <Select.Option value="Others">Khác -
                                                Others</Select.Option>

                                        </Select>
                                    </Form.Item>
                                </div>

                                <Form.Item label="Lời nhắn: " name="message" rules={[
                                    {
                                        required: true,
                                        message: 'Yêu cầu nhập',
                                    },
                                ]}>
                                    <TextArea rows={4}/>
                                </Form.Item>

                                <Form.Item
                                >
                                    <Button type="primary" htmlType="submit"
                                            className="e-buy" style={{
                                        height: 40,
                                        width: "50%"
                                    }}>
                                        Kiểm tra thông tin
                                    </Button>

                                </Form.Item>

                                <div style={{
                                    height: 40,
                                    width: "50%",
                                    marginLeft: "26%"
                                }}>
                                    {/* <Paypal onSave={onSave} disable={disablePaypal} sum={sum} /> */}
                                    <PayPalScriptProvider
                                        options={{ "client-id": "AVqiTjdFARfZglLj1eJD78oZusJafNJTL6fslJrWl3bH87vI-HZM_l9kaaNJ3AJsX8t9KCWrpOoHgVQc" }}>
                                        <PayPalButtons
                                            disabled={disablePaypal}
                                            createOrder={(data, actions) => {
                                                return actions.order.create({
                                                    purchase_units: [
                                                        {
                                                            amount: {
                                                                currency_code: "USD",
                                                                value: (sum / 22000).toFixed(2)

                                                            },
                                                        },

                                                    ],
                                                });
                                            }}
                                            onApprove={(data, actions) => {

                                                return actions.order.capture().then((details) => {
                                                    onSave()
                                                });
                                            }}
                                        />

                                    </PayPalScriptProvider>
                                </div>
                            </Form>
                        </div>
                        <div className="sc-right">
                            <Input.Group compact style={{ textAlign: "left" }}>
                                <Select
                                    style={{
                                        width: '100%',
                                    }}
                                    onChange={handleChangeVoucher}
                                    allowClear
                                    options={vouchers && vouchers.map(voucher => {
                                        return {
                                            label: voucher.condition_str,
                                            value: voucher.code
                                        }
                                    })}
                                />
                            </Input.Group>
                            {
                                cart.length > 0 ? cart.map(e => {
                                    return <div className="cart-item"
                                                data-id={13376}>
                                        <div className="img" style={{
                                            width: 100,
                                            marginBottom: 20
                                        }}>
                                            <img src={e.images[0]}/>
                                        </div>
                                        <div className="text" style={{ paddingTop: 50 }}>
                                            <a href="">{e.name}</a>
                                            <p><span
                                                style={{ color: "#000" }}>{e.amount} x {formatCurrency(e.original_price)} đ</span>
                                            </p>
                                        </div>
                                        <div className="clearfix"/>
                                    </div>
                                }) : <></>
                            }

                            <div className="total">
                                <div className="each-row">
                                    <span>Tạm tính:</span>
                                    <strong
                                        id="subtotal">{formatCurrency(sum) || 0} đ</strong>
                                </div>
                                <div className="each-row">
                                    <span>Phụ phí: </span>
                                    <strong id="sub-fee">0 đ</strong>
                                </div>
                                <div className="each-row">
                                    <span>Giảm giá: </span>
                                    <strong
                                        id="discount"> {formatCurrency(discount) || 0} đ</strong>
                                </div>
                                <div className="each-row">
                                    <span>Hóa đơn VAT: </span>
                                    <strong id="vat"> 0 đ</strong>
                                </div>
                                <div className="row each-row last">
                                    <span>Tổng cộng: </span>
                                    <strong
                                        id="total"> {formatCurrency(sum - discount) || 0} đ</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
