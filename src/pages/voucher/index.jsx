import { Tabs, Modal, notification } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Navbar } from '../../layout/header/navbar';
import { deleteOrder, getOrder } from '../../api/detail_product'
import { formatCurrency } from '../../helper';

import { useNavigate } from 'react-router-dom';

export default function Voucher() {
    const navigate = useNavigate()
    const [current, setCurrent] = useState('init');
    const [listOrder, setListOrder] = useState([])
    const [openModalCancel, setModalCancel] = useState(false);
    const [modalItem, setModalItem] = useState(false)
    const [order, setOrder] = useState()

    const token = localStorage.getItem('token')

    const handleClickItemTab = (e) => {
        async function fetch() {
            setListOrder((await getOrder({ state: e }, token)).data.orders)
        }
        fetch()
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
                    <Tabs.TabPane tab="Điểm tích lũy" key="init">
                        Tổng số điểm tích lũy của bạn: ádasd
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Voucher của tôi" key="pendding">

                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Đổi voucher" key="processing">

                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    )
}
