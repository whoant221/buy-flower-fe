import { Footer } from '../../layout/footer'
import { Navbar } from '../../layout/header/navbar'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { addShopingCart, getDetailFlower, getCart } from '../../api/detail_product'
import { formatCurrency } from '../../helper'
import { useMutation } from 'react-query';
import { Button, notification, Form, Input } from 'antd';
import { getFlower } from '../../api/home'

export function DetailProduct() {
    let navigate = useNavigate();
    const { slug } = useParams()
    const [infoFlower, setInfoFlower] = useState();
    const [sameFlower, setSameFlower] = useState([]);
    const [cart, setCart] = useState([])
    const token = localStorage.getItem('token')

    useEffect(() => {
        async function fetchData() {
            setInfoFlower((await getDetailFlower(slug)))
            setCart((await (await getCart(token)).data.shopping_carts
            ))
        }
        fetchData()
    }, [])

    useEffect(() => {
        async function fetchData() {
            if (infoFlower) {
                const theSameFlower = (await getFlower({ category_id: infoFlower?.category_ids[0] })).flowers
                if (theSameFlower.length > 0) {
                    theSameFlower.length = 10
                }
                setSameFlower(theSameFlower)
            }
        }
        fetchData()
    }, [infoFlower])

    const handleClickAddCart = () => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        } else {


            let productInCart = cart?.filter(e => e.flower_id === infoFlower.id)

            if (cart.length > 0) {
                addShopingCart({ flower_id: infoFlower.id, amount: productInCart[0].amount + 1 }, token)
                    .then(reps => notification.success({ message: "Thêm thành công !" }))
                    .catch(err => notification.error({ message: "Có gì đó đang lỗi !" }))
            }
            else {
                addShopingCart({ flower_id: infoFlower.id, amount: 1 }, token)
                    .then(reps => notification.success({ message: "Thêm thành công !" }))
                    .catch(err => notification.error({ message: "Có gì đó đang lỗi !" }))
            }
        }

    }


    const handleBuyNow = () => {
        if (!localStorage.getItem('token')) {
            navigate('/login')
        } else {
            addShopingCart({ flower_id: infoFlower.id, amount: 1 }, token)
            navigate('/cart')
        }
    }

    return <>
        <div>
            <div className="close-any">
                <div id="content">
                    <Navbar />
                    <div className="wrapper">
                        <div className="item_t margin_top_15">
                            <div className="l_item">
                                <div className="flexslider">
                                    <div className="clearfix" />
                                    <div className="flex-viewport" style={{ overflow: 'hidden', position: 'relative' }}>
                                        <div style={{ width: '292px', marginRight: '0px', float: 'left', display: 'block' }} >
                                            <img src={infoFlower?.images[0]} data-imagezoom="true" className="img-responsive" width={300} height={360} />
                                        </div>
                                    </div>
                                    <ol className="flex-control-nav flex-control-thumbs" />

                                </div>

                                <div className="clearfix" />
                            </div>
                            <div className="r_item">
                                <h2>{infoFlower?.name}</h2>
                                <div className="single-price"><span className="old-price">{formatCurrency(infoFlower?.original_price)} VND</span><span className="price">{formatCurrency(infoFlower?.sale_price)} VND</span></div>
                                <p className="vat">Giá đã bao gồm 8% VAT</p>
                                <div className="pd_summary">{infoFlower?.description}</div>
                                <h4>Sản phẩm bao gồm:</h4>
                                <ul className="material">
                                    {
                                        infoFlower?.buds?.map(e => {
                                            return <li>{e.name} : {e.count}</li>
                                        })
                                    }

                                </ul>
                                <p><i>Sản phẩm thực nhận có thể khác với hình đại diện trên website (đặc điểm thủ công và
                                    tính chất tự nhiên của hàng nông nghiệp)</i></p>

                                <div className="area_order">
                                    <div className="add-cart hplAddCart" onClick={handleClickAddCart}>Thêm vào giỏ</div>
                                    <div className="buy-now hplBuyNow"><div onClick={handleBuyNow} style={{ color: "#FFFFF" }}>Mua ngay</div></div>
                                </div>
                                <div className="offer">
                                    <h4>ƯU ĐÃI ĐẶC BIỆT</h4>
                                    <ul className="benefit">
                                        <li>Tặng banner hoặc thiệp (trị giá 20.000đ - 50.000đ) miễn phí</li>
                                        <li>Giảm tiếp 3% cho đơn hàng Bạn tạo ONLINE lần thứ 2, 5% cho đơn hàng Bạn tạo
                                            ONLINE lần thứ 6 và 10% cho đơn hàng Bạn tạo ONLINE lần thứ 12.</li>
                                        <li>Giao miễn phí trong nội thành 63/63 tỉnh</li>
                                        <li>Giao gấp trong vòng 2 giờ</li>
                                        <li>Cam kết 100% hoàn lại tiền nếu Bạn không hài lòng</li>
                                        <li>Cam kết hoa tươi trên 3 ngày</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix" />
                        <div className="clearfix" />
                        <h2 className=' margin_top_15 ' style={{ textAlign: "left", fontSize: 16, fontWeight: 600, color: "#bd2026", textTransform: "uppercase" }}>Những mẫu hoa tươi cùng loại khác</h2>
                        <div className="data_items the_same_item_flower">
                            {
                                sameFlower.length > 0 ? sameFlower.map(e => {
                                    return <a className="item" href={`/product/${e.id}`}>
                                        <div className="i"><img className="lazy" src={e.images[0]} style={{ display: 'inline' }} /></div>
                                        <div className="t">{e.name}
                                            <span className="vn"><em className="oprice">{formatCurrency(e.original_price)} đ</em><em>{formatCurrency(e.sale_price) || formatCurrency(e.original_price)} đ</em></span></div>
                                    </a>
                                }) : <></>
                            }
                            {/* <div className="item">
                                <div className="i"><a title="Only rose 22" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/12984_only-rose-22"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-khuyen-mai/12984_only-rose-22.jpg" alt="Only rose 22" title="Only rose 22" src="./Khuyến mãi Nồng say cửa hàng hoa tươi_files/12984_only-rose-22.jpg" style={{ display: 'inline' }} /></a></div>
                                <div className="t"><a title="Only rose 22" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/12984_only-rose-22">Only
                                    rose 22</a><span className="vn"><em className="oprice">600.000 đ</em><em>450.000
                                        đ</em></span></div><span className="ibadge isale">Sale</span>
                            </div> */}
                        </div>
                        <div className="clearfix" />
                        <a href={`/product?category=${infoFlower?.category_ids[0]}`} className="viewmore">Xem thêm</a>
                    </div>
                    <Footer />
                </div>

            </div>
        </div>
    </>
}