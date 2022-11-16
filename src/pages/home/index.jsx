
import './style.css'
import './slidebars.css'
import './crumbs.css'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'

import { Navbar } from '../../layout/header/navbar'

export function Home() {
    return <>
    <div>
        <div off-canvas="sb left reveal" style={{}}>
           
        </div>
        <div canvas="container" className="close-any">
        <Navbar/>
            <div className="icon_flower">
                <div className="wrapper">
                    <h2><span title="Mẫu hoa mới năm 2022">
                        Mẫu hoa mới năm 2022</span></h2>
                    <ul className="items">
                        <li>
                            <a href="/product?category=hoatinhyeu" title="Hoa tình yêu"><img src={icon1} /></a>
                            <a href="/product?category=hoatinhyeu" title="Hoa tình yêu">Hoa tình
                                yêu</a>
                        </li>
                        <li>
                            <a href="/product?category=hoasinhnhat" title="Hoa sinh nhật"><img src={icon2} /></a>
                            <a href="/product?category=hoasinhnhat" title="Hoa sinh nhật">Hoa
                                sinh nhật</a>
                        </li>
                        <li>
                            <a href="/product?category=hoakhaitruong" title="Mẫu hoa mới"><img src={icon3} /></a>
                            <a href="/product?category=hoakhaitruong" title="Mẫu hoa mới">Hoa khai trương</a>
                        </li>
                        <li>
                            <a href="/product?category=cayvanphong" title="Cây văn phòng"><img src={icon4} /></a>
                            <a href="/product?category=cayvanphong" title="Cây văn phòng">Cây văn
                                phòng</a>
                        </li>
                        <li>
                            <a href="/product?category=hoachucmung" title="Hoa chúc mừng"><img src={icon5} /></a>
                            <a href="/product?category=hoachucmung" title="Hoa chúc mừng">Hoa
                                chúc mừng</a>
                        </li>
                        <li>
                            <a href="/product?category=hoachiabuon" title="Hoa chia buồn"><img src={icon6} /></a>
                            <a href="/product?category=hoachiabuon" title="Lẵng hoa chia buồn">Lẵng hoa chia buồn</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="content">
                <div className="wrapper">
                    <div className="data_items promotion">
                        <h2>Khuyến mãi</h2>
                        <div className="item">
                            <div className="i"><a href="">
                            <img className="lazy" src="" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a href="">ten hoa</a><span className="vn"><em className="oprice">gia</em><em>giaduoc giam</em></span></div><span className="ibadge isale">Sale</span>
                        </div>
                    </div>
                    <div className="clearfix" />
                    <a href="/product?sale=true" className="viewmore">Xem thêm</a>
                    <div className="data-top clearfix">
                        <h2 className="top-title"><a href="https://hoayeuthuong.com/giaonhanh.aspx" title="Hoa giao nhanh 60 phút">Hoa giao nhanh 60 phút</a></h2>
                    </div>
                    <div className="data_items express">
                        <div className="item">
                            <div className="i">
                                <a href="">
                                    <img className="lazy" src={""} style={{ display: 'inline' }} />
                                </a>
                            </div>
                            <div className="t">
                                <a href="">ten hoa</a>
                                    <span className="vn">tien</span></div><span className="ibadge inew" />
                        </div>
                    </div>
                    <div className="clearfix" />
                    <a href="https://hoayeuthuong.com/giaonhanh.aspx" className="viewmore">Xem thêm</a>
                    <div className="clearfix" />
                    <div className="clearfix" />
                    <div className="data-top mt-10 clearfix">
                        <div className="data-top clearfix">
                            <h2 className="top-title">Cây tình yêu</h2>
                        </div>
                        <div className="data_items">
                            <div className="item">
                                <div className="i"><a href="">
                                    <img className="lazy" src="" /></a>
                                </div>
                                <div className="t"><a  href="">ten hoa</a><span className="vn">gia đ</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="wrapper mt-40">
                    <h3 className="h3-services">Tại sao bạn nên dùng dịch vụ của Chúng tôi?</h3>
                    <div className="services">
                        <a href="javascript:void(0);">
                            <div className="service-img-outer">
                                <img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-free-ship.png" />
                            </div>
                            <div className="service-text">
                                <div className="service-title">Miễn phí giao hàng 63 tỉnh</div>
                                <div className="service-desc">Free shipping (nội thành)</div>
                            </div>
                        </a>
                    </div>
                    <div className="services">
                        <a href="javascript:void(0);">
                            <div className="service-img-outer">
                                <img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-support-247.png" />
                            </div>
                            <div className="service-text">
                                <div className="service-title">Phục vụ 24/24</div>
                                <div className="service-desc">24-7 service</div>
                            </div>
                        </a>
                    </div>
                    <div className="services">
                        <a href="javascript:void(0);">
                            <div className="service-img-outer">
                                <img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-vat.png" />
                            </div>
                            <div className="service-text">
                                <div className="service-title">Giá đã gồm 10% VAT</div>
                                <div className="service-desc">Price include VAT</div>
                            </div>
                        </a>
                    </div>
                    <div className="services">
                        <a href="javascript:void(0);">
                            <div className="service-img-outer">
                                <img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-quick-delivery.png" />
                            </div>
                            <div className="service-text">
                                <div className="service-title">Giao nhanh trong 60 phút</div>
                                <div className="service-desc">60 minutes quick delivery</div>
                            </div>
                        </a>
                    </div>
                    <div className="services">
                        <a href="javascript:void(0);">
                            <div className="service-img-outer">
                                <img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-guarantee-smile.png" />
                            </div>
                            <div className="service-text">
                                <div className="service-title">Cam kết hài lòng 100%</div>
                                <div className="service-desc">100% guarantee smile</div>
                            </div>
                        </a>
                    </div>
                    <div className="services">
                        <a href="javascript:void(0);">
                            <div className="service-img-outer">
                                <img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-fresh-warranty.png" />
                            </div>
                            <div className="service-text">
                                <div className="service-title">Cam kết hoa tươi 3+ ngày</div>
                                <div className="service-desc">3+ days fresh warranty</div>
                            </div>
                        </a>
                    </div>
                    <div className="services">
                        <a href="javascript:void(0);">
                            <div className="service-img-outer">
                                <img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-postcard.png" />
                            </div>
                            <div className="service-text">
                                <div className="service-title">Tặng thiệp cao cấp</div>
                                <div className="service-desc">Free greeting cards</div>
                            </div>
                        </a>
                    </div>
                    <div className="services">
                        <a href="javascript:void(0);">
                            <div className="service-img-outer">
                                <img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-discount.png" />
                            </div>
                            <div className="service-text">
                                <div className="service-title">Giảm giá đến 10%</div>
                                <div className="service-desc">Receive 3-10% discount</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
           
        </div>
       
        <div id="tracking-order" className="popup-wrap">
            <div className="popup-content">
                <div className="box-content">
                    <h4>
                        Thông báo</h4>
                    <p style={{ color: '#f66875', fontSize: '14px' }}>
                        Xin chào quý Khách hàng, Bạn hãy vui lòng nhập đầy đủ thông tin ở dưới để Hoayeuthuong.com tìm
                        chính xác đơn hàng của bạn.</p>
                    <div className="popup-form">
                        <h4 style={{ fontSize: '15px', marginBottom: '0px', lineHeight: 'normal' }}>Kiểm tra đơn hàng</h4>
                        <p>Vui lòng nhập email, số điện thoại hoặc mã đơn hàng để kiểm tra đơn hàng</p>
                        <input type="text" name="txtEmail" id="txtEmail" defaultValue placeholder="Email / số điện thoại / mã đơn hàng" className="form-control" />
                        <span id="btnTracking" className="popup-btn">Kiểm tra</span>
                    </div>
                    <div id="result" className="result">
                    </div>
                </div>
                <span id="btnClose" className="close-btn" title="Đóng">x</span>
            </div>
        </div>
        <div id="holiday-popup" className="popup-wrap">
            <div className="popup-content">
                <div className="box-content">
                    <h4>
                    </h4>
                    <div className="popup-form" style={{ color: '#f66875', fontSize: '14px', background: 'rgba(255, 255,255 , 0.7)' }}>
                    </div>
                </div>
                <span id="btnHolidayClose" className="close-btn" title="Đóng">x</span>
            </div>
        </div>
        <table className="dxlpLoadingPanel_MetropolisBlue dxlpControl_MetropolisBlue" cellSpacing={0} cellPadding={0} id="ctl00_pnlLoading" border={0} style={{ borderCollapse: 'collapse', position: 'absolute', left: '0px', top: '0px', zIndex: 30000, display: 'none' }}>
            <tbody>
                <tr>
                    <td className="dx" style={{ paddingRight: '0px' }}><img className="dxlp-loadingImage dxlp-imgPosLeft" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/DXR(2).axd" alt="" align="middle" /></td>
                    <td className="dx" style={{ paddingLeft: '0px' }}><span id="ctl00_pnlLoading_TL">Loading…</span></td>
                </tr>
            </tbody>
        </table>
        <div id="ctl00_pnlLoading_LD" className="dxlpLoadingDiv_MetropolisBlue dxlpControl_MetropolisBlue dx-ft" style={{ left: '0px', top: '0px', zIndex: 29999, display: 'none', position: 'absolute' }}>
        </div>
        <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n            .async-hide {\n                opacity: 0 !important;\n            }\n        " }} />
        <noscript>
            &lt;div style="display: inline;"&gt;
            &lt;img height="1" width="1" style="border-style: none;" alt=""
            src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1013069855/?value=0&amp;amp;label=xZ6qCKHI9QQQn_CI4wM&amp;amp;guid=ON&amp;amp;script=0" /&gt;
            &lt;/div&gt;
        </noscript>
        <input type="hidden" name="DXScript" defaultValue="1_10,1_11,1_22,1_63,1_12,1_13,1_14,1_29,1_49,1_7" /><input type="hidden" name="DXCss" defaultValue="0_2447,1_67,1_69,0_2452,/favicon.ico,https://fonts.googleapis.com/css?family=Open+Sans:600,400&subset=vietnamese,/styles/style.css?t=20211231,/styles/slidebars.css,/styles/crumbs.css?t=20211228,/styles/responsive.css?t=20211228,/styles/bxslider.carousel.css,https://hoayeuthuong.com/" />

    </div>

    </>
}