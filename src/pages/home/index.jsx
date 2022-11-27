import { useNavigate } from 'react-router-dom';
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
import { Footer } from '../../layout/footer'
import { getFlower } from '../../api/home'
import { useState, useEffect } from 'react'
import { formatCurrency } from '../../helper'

export function Home() {
    let navigate = useNavigate();
    const [listFlowerSale, setListFlowerSale] = useState([])
    const [listFlowerLove, setListFlowerLove] = useState([])
    const [listFlowerCongra, setListFlowerCongra] = useState([])

    useEffect(() => {
        async function fetchData() {
            setListFlowerSale((await getFlower({ category_id: 6 })).flowers)
            setListFlowerLove((await getFlower({ category_id: 4 })).flowers)
            setListFlowerCongra((await getFlower({ category_id: 8 })).flowers)
        }
        fetchData()
    }, [])

    const handleOnClickItem = (e) => {
        navigate(`/product/${e.id}`);
    }

    return <>
        <div>
            <div off-canvas="sb left reveal" style={{}}>

            </div>
            <div className="close-any">
                <Navbar />
                <div className="icon_flower">
                    <div className="wrapper">
                        <h2><span title="Mẫu hoa mới năm 2022">
                            Mẫu hoa mới năm 2022</span></h2>
                        <ul className="items">
                            <li>
                                <a href="/product?category=1" title="Hoa tình yêu"><img src={icon1} /></a>
                                <a href="/product?category=1" title="Hoa tình yêu">Hoa tình
                                    yêu</a>
                            </li>
                            <li>
                                <a href="/product?category=2" title="Hoa sinh nhật"><img src={icon2} /></a>
                                <a href="/product?category=2" title="Hoa sinh nhật">Hoa
                                    sinh nhật</a>
                            </li>
                            <li>
                                <a href="/product?category=3" title="Mẫu hoa mới"><img src={icon3} /></a>
                                <a href="/product?category=3" title="Mẫu hoa mới">Hoa khai trương</a>
                            </li>
                            <li>
                                <a href="/product?category=4" title="Cây văn phòng"><img src={icon4} /></a>
                                <a href="/product?category=4" title="Cây văn phòng">Cây văn
                                    phòng</a>
                            </li>
                            <li>
                                <a href="/product?category=5" title="Hoa chúc mừng"><img src={icon5} /></a>
                                <a href="/product?category=5" title="Hoa chúc mừng">Hoa
                                    chúc mừng</a>
                            </li>
                            <li>
                                <a href="/product?category=6" title="Hoa chia buồn"><img src={icon6} /></a>
                                <a href="/product?category=6" title="Lẵng hoa chia buồn">Lẵng hoa chia buồn</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="content">
                    <div className="wrapper">
                        <div className="data_items promotion">
                            <h2>Khuyến mãi</h2>
                            {
                                listFlowerSale.length > 0 ? listFlowerSale.map(e => {
                                    return <div className="item" onClick={() => handleOnClickItem(e)}>
                                        <div className="i">
                                            <img className="lazy" src={e.images[0]} style={{ display: 'inline' }} /></div>
                                        <div className="t">{e.name}
                                            <span className="vn">
                                                <em className="oprice">{Math.floor(e.original_price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} VND</em>
                                                <em>{Math.floor(e.original_price).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")} VND</em>
                                            </span></div><span className="ibadge isale">Sale</span>
                                    </div>
                                }) : <></>
                            }



                        </div>
                        <div className="clearfix" />
                        <a href="/product?category=6" className="viewmore">Xem thêm</a>
                        <div className="data-top clearfix">
                            <h2 className="top-title">Hoa chúc mừng</h2>
                        </div>
                        <div className="data_items express">
                        {
                            listFlowerCongra.length > 0 ? listFlowerCongra.map(e => {
                                return <div className="item">
                                <div className="i">
                                    <a href="">
                                        <img className="lazy" src={e.images[0] || ""} style={{ display: 'inline' }} />
                                    </a>
                                </div>
                                <div className="t">
                                    <a href="">{e.name}</a>
                                    <span className="vn">{formatCurrency(e?.original_price)} VND</span></div><span className="ibadge inew" />
                            </div>
                            }) : <></>
                        }
                            
                        </div>
                        <div className="clearfix" />
                        <a href="/product?category=4" className="viewmore">Xem thêm</a>
                        <div className="clearfix" />
                        <div className="clearfix" />
                        <div className="data-top mt-10 clearfix">
                            <div className="data-top clearfix">
                                <h2 className="top-title">Hoa tình yêu</h2>
                            </div>
                            <div className="data_items">
                            {
                                listFlowerLove.length > 0 ? listFlowerLove.map(e => {
                                    return <div className="item" onClick={() => handleOnClickItem(e)}>
                                    <div className="i" >
                                        <img className="lazy" src={e.images[0]} />
                                    </div>
                                    <div className="t">{e.name}<span className="vn">{formatCurrency(e?.original_price)} VND</span></div>
                                </div>

                                }) : <></>
                            }
                                
                            </div>
                        </div>
                        <div className="clearfix" />
                        <a href="/product?category=8" className="viewmore">Xem thêm</a>
                    </div>

                    <Footer />
                </div>

            </div>
        </div>
        <div className='mt-40' style={{ color: "#fff" }}>aaaaaaaaaaaaaa</div>
    </>
}