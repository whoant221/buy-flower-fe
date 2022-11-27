import { Tabs, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Navbar } from '../../layout/header/navbar';
import { getOrder } from '../../api/detail_product'
import { formatCurrency } from '../../helper';
import './index.css'

export default function Transaction() {
    const [current, setCurrent] = useState('init');
    const [listOrder, setListOrder] = useState([])
    const [openModalCancel, setModalCancel] = useState(false);

    const token = localStorage.getItem('token')
    useEffect(() => {
        async function fetch() {
            setListOrder((await getOrder({ state: "init" }, token)).data.orders)
        }
        fetch()
    }, [])

    const handleClickItemTab = (e) => {
        async function fetch() {
            setListOrder((await getOrder({ state: e }, token)).data.orders)
        }
        fetch()
    }

    const handleClickCancel = () => {
        Modal.confirm({
            title: 'Xác nhận',
            icon: <ExclamationCircleOutlined />,
            content: 'Bạn chắc chắn muốn hủy đơn hàng này ?',
            okText: '确认',
            cancelText: '取消',
        });

        setModalCancel(true)
    }

    return (
        <div>
            <Navbar />
            <h2 style={{ textAlign: "left", paddingTop: "150px" }} >Lịch sử giao dịch</h2>
            <div style={{ float: 'left', width: "1200px" }}>
                <Tabs defaultActiveKey="1" tabPosition={"left"} style={{
                    height: 220,
                }}
                    tabBarStyle={{ width: "200px", height: "1000px" }}
                    centered={true}
                    onTabClick={handleClickItemTab}
                >
                    <Tabs.TabPane tab="Trạng thái init" key="init">
                        {
                            listOrder.length > 0 ? listOrder.map(e => {
                                return <div className='item_transaction' >
                                    <img className='img_item_transaction' src={e.order_details?.[0].images?.[0]}></img>
                                    <div className='content_item_transaction'>
                                        <div>Trạng thái: {e.state}</div>
                                        <div>Nơi nhận: {e.receive_address}</div>
                                        <div>Tổng tiền: {formatCurrency(e.sale_price)} VND</div>
                                        <div>Ghi chú: {e.note || "Không"}</div>
                                    </div>
                                    <div className='btn_cancel_transaction' onClick={() => handleClickCancel(e)}>Cancel</div>
                                </div>
                            }) : <>Không Tìm thấy đơn hàng</>
                        }

                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Trạng thái pendding" key="pendding">
                        {
                            listOrder.length > 0 ? listOrder.map(e => {
                                return <div className='item_transaction' >
                                    <img className='img_item_transaction' src={e.order_details?.[0].images?.[0]}></img>
                                    <div className='content_item_transaction'>
                                        <div>Trạng thái: {e.state}</div>
                                        <div>Nơi nhận: {e.receive_address}</div>
                                        <div>Tổng tiền: {formatCurrency(e.sale_price)} VND</div>
                                        <div>Ghi chú: {e.note || "Không"}</div>
                                    </div>
                                </div>
                            }) : <>Không Tìm thấy đơn hàng</>
                        }
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Trạng thái processing" key="processing">
                        {
                            listOrder.length > 0 ? listOrder.map(e => {
                                return <div className='item_transaction' >
                                    <img className='img_item_transaction' src={e.order_details?.[0].images?.[0]}></img>
                                    <div className='content_item_transaction'>
                                        <div>Trạng thái: {e.state}</div>
                                        <div>Nơi nhận: {e.receive_address}</div>
                                        <div>Tổng tiền: {formatCurrency(e.sale_price)} VND</div>
                                        <div>Ghi chú: {e.note || "Không"}</div>
                                    </div>
                                </div>
                            }) : <>Không Tìm thấy đơn hàng</>
                        }
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Trạng thái shipping" key="shipping">
                        {
                            listOrder.length > 0 ? listOrder.map(e => {
                                return <div className='item_transaction' >
                                    <img className='img_item_transaction' src={e.order_details?.[0].images?.[0]}></img>
                                    <div className='content_item_transaction'>
                                        <div>Trạng thái: {e.state}</div>
                                        <div>Nơi nhận: {e.receive_address}</div>
                                        <div>Tổng tiền: {formatCurrency(e.sale_price)} VND</div>
                                        <div>Ghi chú: {e.note || "Không"}</div>
                                    </div>
                                </div>
                            }) : <>Không Tìm thấy đơn hàng</>
                        }
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Trạng thái successful" key="successful">
                        {
                            listOrder.length > 0 ? listOrder.map(e => {
                                return <div className='item_transaction' >
                                    <img className='img_item_transaction' src={e.order_details?.[0].images?.[0]}></img>
                                    <div className='content_item_transaction'>
                                        <div>Trạng thái: {e.state}</div>
                                        <div>Nơi nhận: {e.receive_address}</div>
                                        <div>Tổng tiền: {formatCurrency(e.sale_price)} VND</div>
                                        <div>Ghi chú: {e.note || "Không"}</div>
                                    </div>
                                </div>
                            }) : <>Không Tìm thấy đơn hàng</>
                        }
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Trạng thái cancelled" key="cancelled">
                        {
                            listOrder.length > 0 ? listOrder.map(e => {
                                return <div className='item_transaction' >
                                    <img className='img_item_transaction' src={e.order_details?.[0].images?.[0]}></img>
                                    <div className='content_item_transaction'>
                                        <div>Trạng thái: {e.state}</div>
                                        <div>Nơi nhận: {e.receive_address}</div>
                                        <div>Tổng tiền: {formatCurrency(e.sale_price)} VND</div>
                                        <div>Ghi chú: {e.note || "Không"}</div>
                                    </div>
                                </div>
                            }) : <>Không Tìm thấy đơn hàng</>
                        }
                    </Tabs.TabPane>

                </Tabs>
            </div>
        </div>
    )
}
