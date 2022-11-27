
import React from 'react'
import icon7 from '../../assets/icon-free-ship.png'
import icon8 from '../../assets/icon-support-247.png'
import icon9 from '../../assets/icon-vat.png'
import icon10 from '../../assets/icon-quick-delivery.png'
import icon11 from '../../assets/icon-guarantee-smile.png'
import icon12 from '../../assets/icon-fresh-warranty.png'
import icon13 from '../../assets/icon-postcard.png'
import icon14 from '../../assets/icon-discount.png'

export function Footer() {
    return (
        <div className="wrapper mt-40 mb-40">
            <h3 className="h3-services">Tại sao bạn nên dùng dịch vụ của Chúng tôi?</h3>
            <div className="services">
                <a href="#">
                    <div className="service-img-outer">
                        <img src={icon7} />
                    </div>
                    <div className="service-text">
                        <div className="service-title">Miễn phí giao hàng 63 tỉnh</div>
                        <div className="service-desc">Free shipping (nội thành)</div>
                    </div>
                </a>
            </div>
            <div className="services">
                <a href="#">
                    <div className="service-img-outer">
                        <img src={icon8} />
                    </div>
                    <div className="service-text">
                        <div className="service-title">Phục vụ 24/24</div>
                        <div className="service-desc">24-7 service</div>
                    </div>
                </a>
            </div>
            <div className="services">
                <a href="#">
                    <div className="service-img-outer">
                        <img src={icon9} />
                    </div>
                    <div className="service-text">
                        <div className="service-title">Giá đã gồm 10% VAT</div>
                        <div className="service-desc">Price include VAT</div>
                    </div>
                </a>
            </div>
            <div className="services">
                <a href="#">
                    <div className="service-img-outer">
                        <img src={icon10} />
                    </div>
                    <div className="service-text">
                        <div className="service-title">Giao nhanh trong 60 phút</div>
                        <div className="service-desc">60 minutes quick delivery</div>
                    </div>
                </a>
            </div>
            <div className="services">
                <a href="#">
                    <div className="service-img-outer">
                        <img src={icon11} />
                    </div>
                    <div className="service-text">
                        <div className="service-title">Cam kết hài lòng 100%</div>
                        <div className="service-desc">100% guarantee smile</div>
                    </div>
                </a>
            </div>
            <div className="services">
                <a href="#">
                    <div className="service-img-outer">
                        <img src={icon12} />
                    </div>
                    <div className="service-text">
                        <div className="service-title">Cam kết hoa tươi 3+ ngày</div>
                        <div className="service-desc">3+ days fresh warranty</div>
                    </div>
                </a>
            </div>
            <div className="services">
                <a href="#">
                    <div className="service-img-outer">
                        <img src={icon13} />
                    </div>
                    <div className="service-text">
                        <div className="service-title">Tặng thiệp cao cấp</div>
                        <div className="service-desc">Free greeting cards</div>
                    </div>
                </a>
            </div>
            <div className="services">
                <a href="#">
                    <div className="service-img-outer">
                        <img src={icon14} />
                    </div>
                    <div className="service-text">
                        <div className="service-title">Giảm giá đến 10%</div>
                        <div className="service-desc">Receive 3-10% discount</div>
                    </div>
                </a>
            </div>
        </div>
    )
}
