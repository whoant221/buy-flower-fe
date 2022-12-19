import { Modal, notification, Tabs, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Navbar } from '../../layout/header/navbar';
import { deleteOrder, getOrder } from '../../api/detail_product'
import { formatCurrency } from '../../helper';
import './index.css'
import { useNavigate } from 'react-router-dom';

export default function Transaction() {
    const navigate = useNavigate()
    const [current, setCurrent] = useState('init');
    const [listOrder, setListOrder] = useState([])
    const [openModalCancel, setModalCancel] = useState(false);
    const [modalItem, setModalItem] = useState(false)
    const [order, setOrder] = useState()

    const token = localStorage.getItem('token')
    useEffect(() => {
        async function fetch() {
            setListOrder((await getOrder({ state: "pending" }, token)).data.orders)
        }


        fetch()
    }, [])

    const handleClickItemTab = (e) => {
        async function fetch() {
            setListOrder((await getOrder({ state: e }, token)).data.orders)
        }

        fetch()
    }

    const handleClickCancel = (e) => {
        Modal.confirm({
            title: 'Xác nhận',
            icon: <ExclamationCircleOutlined />,
            content: 'Bạn chắc chắn muốn hủy đơn hàng này ?',
            okText: 'Xác nhận',
            cancelText: 'Từ chối',
            onOk: async () => {
                deleteOrder(e.order_id, token).then(res => notification.success({ message: "bạn đã hủy thành công." }))
                    .catch(err => notification.error({ message: "không thể hủy đơn hàng !" }))
            }
        });

        setModalCancel(true)
    }

    const handleClickItem = (e) => {
        setOrder(e)
        setModalItem(true)
    }
    const handleClickItemDetail = (e) => {
        navigate(`/product/${e.flower_id}`)
    }

    return (
        <div>
            <Modal title="Chi Tiết Đơn Hàng" closable={null} open={modalItem} onOk={() => {
                setModalItem(false)
            }} onCancel={() => {
                setModalItem(false)
            }}>
                <div style={{ overflow: "auto", height: 300 }}>
                    {
                        order?.order_details?.length > 0 ? order?.order_details?.map(e => {
                            return <div className='item_transaction' onClick={() => handleClickItemDetail(e)}>
                                <img className='img_item_transaction' src={e.images?.[0]}></img>
                                <div className='content_item_transaction'>
                                    <div>Tên hoa: {e.name || "hehe"}</div>
                                    <div>Số lương: {e.amount}</div>
                                    <div>Tổng tiền: {formatCurrency(e.price)} VND</div>
                                </div>
                            </div>
                        }) : <>Không Tìm thấy đơn hàng</>
                    }
                </div>

            </Modal>
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

                    <Tabs.TabPane tab="Đang chờ xác nhận" key="pending">
                        {
                            listOrder.length > 0 ? listOrder.map(e => {
                                return <div className='item_transaction' onClick={() => handleClickItem(e)}>
                                    <img className='img_item_transaction' src={e.order_details?.[0].images?.[0]}></img>
                                    <div className='content_item_transaction'>
                                        <div>Nơi nhận: {e.receive_address}</div>
                                        <div>Tổng tiền: {formatCurrency(e.sale_price)} VND</div>
                                        <div>Ghi chú: {e.note || "Không"}</div>
                                    </div>
                                    <div className='btn_cancel_transaction'
                                        onClick={() => handleClickCancel(e)}><Button type="primary" onClick={() => handleClickComment(e)}>Cancel</Button>
                                    </div>
                                </div>
                            }) : <>Không Tìm thấy đơn hàng</>
                        }
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Đang giao" key="processing">
                        {
                            listOrder.length > 0 ? listOrder.map(e => {
                                return <div className='item_transaction' onClick={() => handleClickItem(e)}>
                                    <img className='img_item_transaction' src={e.order_details?.[0].images?.[0]}></img>
                                    <div className='content_item_transaction'>
                                        <div>Trạng thái: {e.state}</div>
                                        <div>Nơi nhận: {e.receive_address}</div>
                                        <div>Tổng tiền: {formatCurrency(e.sale_price)} VND</div>
                                        <div>Mã vận đơn: <a href={e.shipping_link}>{e.shipping_link}</a>  </div>
                                        <div>Ghi chú: {e.note || "Không"}</div>
                                    </div>
                                    <div className='btn_cancel_transaction'
                                        onClick={() => handleClickCancel(e)}><Button type="primary" onClick={() => handleClickComment(e)}>Cancel</Button>
                                    </div>
                                </div>
                            }) : <>Không Tìm thấy đơn hàng</>
                        }
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Trạng thái shipping" key="shipping">
                        {
                            listOrder.length > 0 ? listOrder.map(e => {
                                return <div className='item_transaction' onClick={() => handleClickItem(e)}>
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
                                return <div className='item_transaction' onClick={() => handleClickItem(e)}>
                                    <img className='img_item_transaction' src={e.order_details?.[0].images?.[0]}></img>
                                    <div className='content_item_transaction' style={{ borderTopRightRadius: 25, borderBottomRightRadius: 25 }}>
                                        <div>Trạng thái: {e.state}</div>
                                        <div>Nơi nhận: {e.receive_address}</div>
                                        <div>Tổng tiền: {formatCurrency(e.sale_price)} VND</div>
                                        <div>Ghi chú: {e.note || "Không"}</div>
                                    </div>
                                    <div className='btn_cancel_transaction' onClick={() => handleClickComment(e)}>Bình Luận</div>
                                </div>
                            }) : <>Không Tìm thấy đơn hàng</>
                        }
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Đơn hàng hủy" key="cancelled">
                        {
                            listOrder.length > 0 ? listOrder.map(e => {
                                return <div className='item_transaction' onClick={() => handleClickItem(e)}>
                                    <div style={{ width: "auto" }}><img className='img_item_transaction' src={e.order_details?.[0].images?.[0]}></img></div>
                                    <div className='content_item_transaction'
                                        style={{ borderTopRightRadius: 25, borderBottomRightRadius: 25 }}>
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
