import { Tabs, Button, notification } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Navbar } from '../../layout/header/navbar';
import '../transaction/index.css'
import { formatCurrency } from '../../helper';

import { useNavigate } from 'react-router-dom';
import { exchangeVoucher, getPointVoucher, getVoucherCanBeExchange, getVouchersByPrice } from '../../api/voucher';
import moment from 'moment';

export default function Voucher() {
    const navigate = useNavigate()
    const [point, setPoint] = useState()
    const [voucherExchange, setVoucherExchange] = useState([])
    const [myVoucher, setMyVoucher] = useState([])
    const token = localStorage.getItem('token')

    const handleClickItemTab = (e) => {
        async function fetch() {
            setListOrder((await getOrder({ state: e }, token)).data.orders)
        }
        fetch()
    }

    useEffect(() => {
        const fetch = async () => {
            const getPoint = await getPointVoucher()
            setPoint(getPoint.data.point)
            const voucherCanBeExchange = await getVoucherCanBeExchange()
            const listMyvoucher = await getVouchersByPrice()
            setVoucherExchange(voucherCanBeExchange.data.vouchers)
            setMyVoucher(listMyvoucher.data.vouchers)
        }
        fetch()
    }, [])

    const handleClickExchangeVoucher = async (e) => {
        await exchangeVoucher({ code: e.code }).then(res => {
            notification.success({ message: "Đổi thành công!" })
        }).catch(err => {
            notification.error({ message: "Có lỗi gì đó!" })
        })
    }

    return (
        <div>
            {/* <Modal title="Chi Tiết Đơn Hàng" closable={null} open={modalItem} onOk={() => { setModalItem(false) }} onCancel={() => { setModalItem(false) }}>
                <div style={{ overflow: "auto", height: 300 }}>
                    <div>Tổng số điểm tích lũy : 2000</div>

                </div>

            </Modal> */}
            <Navbar />
            <h2 style={{ textAlign: "left", paddingTop: "150px" }} >Voucher</h2>
            <div style={{ float: 'left', width: "1200px" }}>
                <Tabs defaultActiveKey="1" tabPosition={"left"} style={{
                    height: 220,
                }}
                    tabBarStyle={{ width: "200px", height: "1000px" }}
                    centered={true}
                    onTabClick={handleClickItemTab}
                >
                    <Tabs.TabPane tab="Voucher của tôi" key="pendding">
                        {myVoucher.length > 0 && myVoucher.map(e => {
                            return <div className='item_transaction' style={{ marginTop: 10 }}>
                                <div className='code_voucher'>{e.code}</div>
                                <div className='content_item_transaction'
                                >
                                    <div>Nội dung: {e.condition_str}</div>
                                    <div>Giảm giá: {e.discount} %</div>
                                    <div>Thời hạn: {moment(e.effective_at).format("DD/MM/YYY")} - {moment(e.expiration_at).format("DD/MM/YYY")} </div>
                                    <div>Ngưỡng tiền được áp dụng: {e.threshold} VND</div>
                                </div>
                            </div>
                        })}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Đổi voucher" key="processing">

                        {voucherExchange.length > 0 && voucherExchange.map(e => {
                            return <div className='item_transaction' style={{ marginTop: 10 }}>
                                <div className='code_voucher'>{e.code}</div>
                                <div className='content_item_transaction'
                                >
                                    <div>Nội dung: {e.condition_str}</div>
                                    <div>Giảm giá: {e.discount} %</div>
                                    <div>Thời hạn: {moment(e.effective_at).format("DD/MM/YYY")} - {moment(e.expiration_at).format("DD/MM/YYY")} </div>
                                    <div>Ngưỡng tiền được áp dụng: {e.threshold} VND</div>
                                    <div>Số điểm cần để quy đổi: {e.point}</div>
                                </div>

                                <div className='btn_cancel_transaction'>
                                    <Button type="primary" onClick={() => handleClickExchangeVoucher(e)}>Đổi Voucher</Button>
                                </div>
                            </div>
                        })}

                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    )
}
