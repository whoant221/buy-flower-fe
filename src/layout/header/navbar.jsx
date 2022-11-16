import '../../pages/home/style.css'
import '../../pages/home/slidebars.css'
import '../../pages/home/crumbs.css'
import logo from '../../assets/logohoa.png'
import './navbar.scss'
import cart from '../../assets/shopping_cart.svg'
import user from '../../assets/user.svg'
import { Link } from "react-router-dom";
import * as dotenv from 'dotenv' 

export function Navbar() {

    return (
        <>
            <div id="header" className>
                <div className="wrapper header">
                    <div className="logo">
                        <a href="" title="Shop hoa "><img src={logo} /></a>
                    </div>
                    <div className="search">
                        <input id="txtSearch" type="text" placeholder="Tìm sản phẩm" onClick="asd" />
                        <a href="javascript:void(0);" onclick="SearchItem();" className="btnsearch">Tìm kiếm</a>
                    </div>
                    <div className="cart">
                        <Link id="shopping-cart" to="/cart">
                            <img src={cart} />
                            <strong>Giỏ hàng</strong></Link>
                    </div>
                    <div className="my-account">
                        <img id="ctl00_ucHeader_imgUser" src={user} style={{ borderWidth: '0px' }} />
                        <a id="ctl00_ucHeader_hplMyAccount" title="Tài khoản" href="">Tài khoản</a>
                        <div id="ctl00_ucHeader_pnlSignin" className="signin-dropdown">

                            <Link to="/login" title="Sign in" className="sign-in">Đăng nhập</Link>
                            <div className="dac">
                                <strong>Bạn chưa chưa có tài khoản?</strong>
                                <Link to="/login" title="Nhấn vào đây" className="register">Đăng ký</Link>
                            </div>
                        </div>
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
                                <h3><Link to={`/product?category=hoasinhnhat`} title="Hoa sinh nhật">Hoa sinh nhật</Link></h3>
                                <h3><Link to={`/product?category=hoakhaitruong`} title="Hoa khai trương">Hoa khai trương</Link></h3>
                                <h3><Link to={`/product?category=hoachucmung`} title="Hoa chúc mừng">Hoa chúc mừng</Link></h3>
                                <h3><Link to={`/product?category=hoachiabuon`} title="Hoa chia buồn">Hoa chia buồn</Link></h3>
                                <h3><Link to={`/product?category=hoachucsuckhoe`} title="Hoa chúc sức khỏe">Hoa chúc sức khỏe</Link></h3>
                                <h3><Link to={`/product?category=hoatinhyeu`} title="Hoa tình yêu">Hoa tình yêu</Link></h3>
                                <h3><Link to={`/product?category=hoacamon`} title="Hoa cảm ơn">Hoa
                                    cảm ơn</Link></h3>
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
                                <h3><Link to={`/product?color=trang`} title="Màu trắng">Màu trắng</Link></h3>
                                <h3><Link to={`/product?color=do`} title="Màu đỏ">Màu đỏ</Link></h3>
                                <h3><Link to={`/product?color=hong`} title="Màu hồng">Màu hồng</Link></h3>
                                <h3><Link to={`/product?color=cam`} title="Màu cam">Màu cam</Link></h3>
                                <h3><Link to={`/product?color=tim`} title="Màu tím">Màu tím</Link></h3>
                                <h3><Link to={`/product?color=vang`} title="Màu vàng">Màu vàng</Link></h3>
                                <h3><Link to={`/product?color=xanh`} title="Màu xanh (xanh dương, xanh lá)">Màu xanh (xanh dương, xanh lá)</Link></h3>
                            </div>
                        </li>
                        <li>
                            <h2><Link to={`/product?category=hoacuoi`} title="Hoa sinh nhật">Hoa Cưới</Link></h2>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}