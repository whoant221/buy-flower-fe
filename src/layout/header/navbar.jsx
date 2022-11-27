import '../../pages/home/style.css'
import '../../pages/home/slidebars.css'
import '../../pages/home/crumbs.css'
import logo from '../../assets/logohoa.png'
import './navbar.scss'
import cart from '../../assets/shopping_cart.svg'
import user from '../../assets/user.svg'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCategory, getinfoUser, editDetailCategory, getColor } from '../../api/home';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Form, Input, Tabs } from 'antd';
import { getOrder } from '../../api/detail_product'

export function Navbar() {
    const [form] = Form.useForm();
    let navigate = useNavigate();

    const [listCategories, setlistCategories] = useState([])
    const [search, setSearch] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalTranferOpen, setIsModalTranferOpen] = useState(false);
    const [infoUser, setInfoUser] = useState()
    const [current, setCurrent] = useState('init');
    const [listcolor, setListColor] = useState([])
    const [listOrder, setListOrder] = useState([])
    const userName = localStorage.getItem('userName')
    const token = localStorage.getItem('token')


    useEffect(() => {
        async function fetch() {
            setlistCategories((await getCategory()).categories)
            setInfoUser((await getinfoUser(token)))
            setListColor((await getColor()).colors)
        }
        fetch();
    }, [])

    if (infoUser) {
        form.setFieldsValue(infoUser)
    }

    if (listCategories.length > 10) {
        const data = listCategories
        data.length = 10
        setlistCategories(data)
    }

    const handleSearch = () => {
        navigate(`/product?name=${search}`)
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName')
        navigate(`/`)
    }

    const handleEditProfile = () => {
        setIsModalOpen(true)
    }

    const handleClickCart = () => {
        if (!localStorage.getItem('token')) {
            navigate(`/login`)
        } else {
            navigate(`/cart`)
        }
    }

    const success = () => {
        Modal.success({
            content: 'cập nhật thành công',
        });
    };

    const handleUpdate = async (e) => {
        await editDetailCategory({ ...e, password_confirmation: e.password }, token)
        setIsModalOpen(false)
        success()
    }

    const handleClickTranfer = async () => {
        // setIsModalTranferOpen(true)
        if (token)
            navigate('/transaction')
        else navigate('/login')
    }

    useEffect(() => {
        async function fetch() {
            setListOrder((await getOrder({ state: current }, token)).data.orders)
        }
        fetch()
    }, [current])
    console.log(listOrder)

    if (infoUser) {
        form.setFieldsValue(infoUser)
    }

    return (
        <>
            <Modal title="Chỉnh sửa thông tin cá nhân" open={isModalOpen} footer={null} closable={null}>
                <Form labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={handleUpdate}
                    form={form}
                >
                    <Form.Item name="email" label="email" >
                        <Input disabled={true} />
                    </Form.Item>
                    <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="name" label="Tên" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="phone_number" label="Số điện thoại" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="address" label="Địa chỉ" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item style={{ textAlign: "center", paddingLeft: 100 }}>
                        <Button type="primary" htmlType="submit" >
                            Submit
                        </Button>

                        <Button type="primary" onClick={e => { setIsModalOpen(false) }} style={{ marginLeft: 20 }}>
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <div id="header" className>
                <div className="wrapper header">
                    <div className="logo">
                        <a href="/" title="Shop hoa "><img src={logo} /></a>
                    </div>
                    <div className="search">
                        <input id="txtSearch" type="text" placeholder="Tìm sản phẩm" style={{ height: 39 }} onChange={(e) => setSearch(e.target.value)} />
                        <a onClick={handleSearch} className="btnsearch">Tìm kiếm</a>
                    </div>
                    <div className="cart" onClick={handleClickCart} style={{ cursor: "point" }}>

                        <a>
                            <img src={cart} />
                            <strong>Giỏ hàng</strong>
                        </a>
                    </div>
                    <div className="my-account">
                        <img id="ctl00_ucHeader_imgUser" src={user} style={{ borderWidth: '0px' }} />
                        {!userName ? <><a id="ctl00_ucHeader_hplMyAccount" title="Tài khoản" href="">Tài khoản</a><div id="ctl00_ucHeader_pnlSignin" className="signin-dropdown">

                            <Link to="/login" title="Sign in" className="sign-in">Đăng nhập</Link>
                            <div className="dac">
                                <strong>Bạn chưa chưa có tài khoản?</strong>
                                <Link to="/login" title="Nhấn vào đây" className="register">Đăng ký</Link>
                            </div>
                        </div></> : <><a id="ctl00_ucHeader_hplMyAccount" title="Tài khoản" href="">{userName}</a><div id="ctl00_ucHeader_pnlSignin" className="signin-dropdown">

                            <a onClick={handleClickTranfer} title="Sign in" className="sign-in">Lịch sử giao dịch</a>
                            <a onClick={handleEditProfile} title="Sign in" className="sign-in">Chỉnh sửa thông tin</a>
                            <div className="dac">
                                <a onClick={handleLogout} className="register">Đăng xuất</a>
                            </div>
                        </div></>}

                    </div>
                </div>
            </div>
            <div id="top_menu">
                <div className="wrapper">
                    <ul className="header_nav">
                        <li><strong><a href="/" title="Trang chủ">Trang chủ</a></strong></li>
                        <li className="has_child">
                            <h2><a href="/product" title="Chủ đề">Chủ đề</a></h2>
                            <div>
                                {
                                    listCategories.length > 0 ? listCategories.map(e => {
                                        return <h3><Link to={`/product?category=${e.id}`}>{e.title}</Link></h3>
                                    }) : <></>
                                }
                            </div>
                        </li>
                        <li className="has_child">
                            <h2><a href="/product" title="Hoa tươi">Hoa tươi</a></h2>
                            <div>
                                <h3><Link to={`/product?flower=rose`} title="Only rose">Only
                                    rose</Link></h3>
                                <h3><Link to={`/product?flower=hong`} title="Hoa hồng">Hoa
                                    hồng</Link></h3>
                                <h3><Link to={`/product?flower=huongduong`} title="Hoa Hướng Dương">Hoa Hướng Dương</Link></h3>
                                <h3><Link to={`/product?flower=dongtien`} title="Hoa đồng tiền">Hoa đồng tiền</Link></h3>
                                <h3><Link to={`/product?flower=lanhodiep`} title="Lan hồ điệp">Lan hồ
                                    điệp</Link></h3>
                                <h3><Link to={`/product?flower=camchuong`} title="Cẩm chướng">Cẩm chướng</Link></h3>
                                <h3><Link to={`/product?flower=cattuong`} title="Hoa Cát Tường">Hoa
                                    Cát Tường</Link></h3>
                                <h3><Link to={`/product?flower=hoaly`} title="Hoa ly">Hoa ly</Link>
                                </h3>
                                <h3><Link to={`/product?flower=hoacuc`} title="Hoa cúc">Hoa cúc</Link>
                                </h3>
                            </div>
                        </li>
                        <li className="has_child">
                            <h2><a href="/product" title="Màu sắc">Màu sắc</a></h2>
                            <div>
                                {
                                    listcolor.length > 0 ? listcolor.map(e => {
                                        return <h3><Link to={`/product?color=${e}`} >{e}</Link></h3>
                                    }) : <></>
                                }
                            </div>
                        </li>
                        <li>
                            <h2><Link to={`/product?category=14`} title="Hoa sinh nhật">Hoa Cưới</Link></h2>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}