import { Button, DatePicker, Form, Input, Modal, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { Navbar } from '../../layout/header/navbar';
import { addOrder, getCart } from '../../api/detail_product';
import { formatCurrency } from '../../helper'
import { getinfoUser } from '../../api/home';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from 'react-router-dom';
import dayjs from "dayjs";
import moment from "moment";
import { getVouchersByPrice, validVoucher } from "../../api/voucher.js";

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

export function OrderInfo() {
    let navigate = useNavigate();
    const [form] = Form.useForm();
    const [disablePaypal, setDisablePaypal] = useState(true)
    const token = localStorage.getItem('token')
    const [cart, setCard] = useState([])
    const [user, setUser] = useState([])
    const [sum, setSum] = useState(0)
    const [discount, setDiscount] = useState(0);
    const [infoReceive, setInfoReceive] = useState()
    const [vouchers, setVouchers] = useState([]);

    let currentCode = null;

    let dataSave = {}
    const { TextArea } = Input;

    const onSave = () => {
        success()

        // navigate("/")
    }

    const success = async () => {
        Modal.success({
            content: 'Bạn đã đặt thành công. Chúng tôi sẽ liên lạc với bạn sớm nhất có thể để xác nhận thông tin này.',
        });

    };

    const onFinish = async (e) => {
        setDisablePaypal(false)
        setInfoReceive(e)
        await addOrder({ "receive_address": infoReceive.address }, token)
        dataSave = e
    }

    const handleChangeVoucher = async (code) => {
        if (code === undefined) {
            currentCode = null;
            setDiscount(0);
            return;
        }
        try {
            const { data: { sale_price } } = await validVoucher(code, sum)
            if (sale_price === 0) {
                currentCode = null;
                Modal.error({
                    content: 'Bạn không đủ điều kiện để sử dụng voucher này',
                });
                return;
            }
            currentCode = code;
            setDiscount(sale_price);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        async function fetch() {
            setCard((await getCart(token)).data.shopping_carts)
            setUser(await getinfoUser(token))
        }

        fetch()
    }, [])

    useEffect(() => {
        const getVouchers = async () => {
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


    if (user) {
        form.setFieldsValue(user)
    }

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
                                {/* <Form.Item
                                    style={{ paddingTop: 50 }}
                                    label="Họ và tên:"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập họ tên',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Điện thoại:"
                                    name="phoneNumber"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập số điện thoại',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Email của bạn:"
                                    name="email"
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Giấu tên người gửi?" >
                                    <Checkbox></Checkbox>
                                </Form.Item> */}

                                <h2>Thông tin người nhận</h2>
                                {/* <Form.Item
                                    style={{ paddingTop: 50, marginBottom: 0 }}
                                    label="Tôi là người nhận hoa"
                                    valuePropName="checked"
                                >
                                    <Checkbox></Checkbox>
                                </Form.Item> */}

                                <Form.Item
                                    label="Tên người nhận:"
                                    name="name"
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
                                    name="phone_number"
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
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập địa chỉ',
                                        },
                                    ]}
                                >
                                    <Input/>
                                </Form.Item>

                                {/* <h2>Thời gian giao hàng</h2> */}
                                <Form.Item label="Thời gian giao hàng"
                                           style={{ width: 300 }}>
                                    <DatePicker
                                        defaultValue={dayjs(moment.now(), dateFormatList[0])}
                                        format={dateFormatList}/>
                                </Form.Item>
                                <h2>Lời nhắn</h2>
                                <div>
                                    <Form.Item label="Thiệp gửi tặng cho:"
                                               defaultValue="Thiệp gửi tặng cho"
                                               style={{ paddingTop: 50 }}>
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
                                               defaultValue="Nhân dịp">
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
                                
                                <Form.Item label="Lời nhắn: ">
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
                                                const a = 2
                                                // console.log(a);
                                                return actions.order.create({
                                                    purchase_units: [
                                                        {
                                                            amount: {
                                                                currency_code: "USD",
                                                                value: a
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
                                        <div className="text">
                                            <a href="">{e.name}</a>
                                            <p>
                                                <span>{e.amount} x {formatCurrency(e.original_price)} đ</span>
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
