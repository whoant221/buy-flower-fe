import '../../pages/home/style.css'
import '../../pages/home/slidebars.css'
import '../../pages/home/crumbs.css'
import logo from '../../assets/logohoa.png'
import './navbar.scss'
import cart from '../../assets/shopping_cart.svg'
import user from '../../assets/user.svg'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCategory, getinfoUser, editDetailCategory, getColor, getBuds } from '../../api/home';
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
    const [listBuds, setListBuds] = useState([])
    const userName = localStorage.getItem('userName')
    const token = localStorage.getItem('token')


    useEffect(() => {
        async function fetch() {
            setlistCategories((await getCategory()).categories)
            // setInfoUser((await getinfoUser(token)))
            setListColor((await getColor()).colors)
            setListBuds((await getBuds()).buds)
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
            content: 'c???p nh???t th??nh c??ng',
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


    if (infoUser) {
        form.setFieldsValue(infoUser)
    }

    return (
        <>
            <Modal title="Ch???nh s???a th??ng tin c?? nh??n" open={isModalOpen} footer={null} closable={null}>
                <Form labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={handleUpdate}
                    form={form}
                >
                    <Form.Item name="email" label="email" >
                        <Input disabled={true} />
                    </Form.Item>
                    <Form.Item name="password" label="M???t kh???u" rules={[{ required: true }]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="name" label="T??n" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="phone_number" label="S??? ??i???n tho???i" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item name="address" label="?????a ch???" rules={[{ required: true }]}>
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
                        <input id="txtSearch" type="text" placeholder="T??m s???n ph???m" style={{ height: 39 }} onChange={(e) => setSearch(e.target.value)} />
                        <a onClick={handleSearch} className="btnsearch">T??m ki???m</a>
                    </div>
                    <div className="cart" onClick={handleClickCart} style={{ cursor: "point" }}>

                        <a>
                            <img src={cart} />
                            <strong>Gi??? h??ng</strong>
                        </a>
                    </div>
                    <div className="my-account">
                        <img id="ctl00_ucHeader_imgUser" src={user} style={{ borderWidth: '0px' }} />
                        {!userName ? <><a id="ctl00_ucHeader_hplMyAccount" title="T??i kho???n" href="">T??i kho???n</a><div id="ctl00_ucHeader_pnlSignin" className="signin-dropdown">

                            <Link to="/login" title="Sign in" className="sign-in">????ng nh???p</Link>
                            <div className="dac">
                                <strong>B???n ch??a ch??a c?? t??i kho???n?</strong>
                                <Link to="/login" title="Nh???n v??o ????y" className="register">????ng k??</Link>
                            </div>
                        </div></> : <><a id="ctl00_ucHeader_hplMyAccount" title="T??i kho???n" href="">{userName}</a><div id="ctl00_ucHeader_pnlSignin" className="signin-dropdown">

                            <a onClick={handleClickTranfer} title="Sign in" className="sign-in">L???ch s??? giao d???ch</a>
                            <a onClick={handleEditProfile} title="Sign in" className="sign-in">Ch???nh s???a th??ng tin</a>
                            <div className="dac">
                                <a onClick={handleLogout} className="register">????ng xu???t</a>
                            </div>
                        </div></>}

                    </div>
                </div>
            </div>
            <div id="top_menu">
                <div className="wrapper">
                    <ul className="header_nav">
                        <li><strong><a href="/" title="Trang ch???">Trang ch???</a></strong></li>
                        <li className="has_child">
                            <h2><a href="/product" title="Ch??? ?????">Ch??? ?????</a></h2>
                            <div>
                                {
                                    listCategories.length > 0 ? listCategories.map(e => {
                                        return <h3><Link to={`/product?category=${e.id}`}>{e.title}</Link></h3>
                                    }) : <></>
                                }
                            </div>
                        </li>
                        <li className="has_child">
                            <h2><a href="/product" title="Hoa t????i">Hoa t????i</a></h2>
                            <div>
                                {
                                    listBuds.length > 0 && listBuds.map(e => {
                                        return <h3><a href={`/product?bud=${e.id}`} title="Only rose">{e.name}</a></h3>
                                    })
                                }
                                {/* <h3><Link to={`/product?flower=rose`} title="Only rose">Only
                                    rose</Link></h3>
                                <h3><Link to={`/product?flower=hong`} title="Hoa h???ng">Hoa
                                    h???ng</Link></h3>
                                <h3><Link to={`/product?flower=huongduong`} title="Hoa H?????ng D????ng">Hoa H?????ng D????ng</Link></h3>
                                <h3><Link to={`/product?flower=dongtien`} title="Hoa ?????ng ti???n">Hoa ?????ng ti???n</Link></h3>
                                <h3><Link to={`/product?flower=lanhodiep`} title="Lan h??? ??i???p">Lan h???
                                    ??i???p</Link></h3>
                                <h3><Link to={`/product?flower=camchuong`} title="C???m ch?????ng">C???m ch?????ng</Link></h3>
                                <h3><Link to={`/product?flower=cattuong`} title="Hoa C??t T?????ng">Hoa
                                    C??t T?????ng</Link></h3>
                                <h3><Link to={`/product?flower=hoaly`} title="Hoa ly">Hoa ly</Link>
                                </h3>
                                <h3><Link to={`/product?flower=hoacuc`} title="Hoa c??c">Hoa c??c</Link>
                                </h3> */}
                            </div>
                        </li>
                        <li className="has_child">
                            <h2><a href="/product" title="M??u s???c">M??u s???c</a></h2>
                            <div>
                                {
                                    listcolor.length > 0 ? listcolor.map(e => {
                                        return <h3><Link to={`/product?color=${e}`} >{e}</Link></h3>
                                    }) : <></>
                                }
                            </div>
                        </li>
                        <li>
                            <h2><Link to={`/voucher`}>Voucher t??ch ??i???m</Link></h2>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}