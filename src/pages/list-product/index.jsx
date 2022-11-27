import React from 'react'
import { Footer } from '../../layout/footer'
import { Navbar } from '../../layout/header/navbar'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { getCategory, getDetailCategory, getFlower } from '../../api/home';
import { useNavigate, Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { formatCurrency } from '../../helper'

export function ListProduct() {
    let navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const paramCategory = searchParams.get('category')
    const paramName = searchParams.get('name')
    const paramColor = searchParams.get('color')
    const [order, setOrder] = useState([
        { id: 1, order_by: "", name: "Mặc định", active: "active" },
        { id: 2, order_by: "price_asc", name: "Giá từ thấp tới cao", active: "none" },
        { id: 3, order_by: "price_desc", name: "Giá từ cao tới thấp", active: "none" },
        { id: 4, order_by: "name_asc", name: "TÊN: A-Z", active: "none" },
        { id: 5, order_by: "name_desc", name: "TÊN: Z-A", active: "none" }
    ])
    const [showListCategory, setShowListCategory] = useState(5)
    const [listFlower, setListFlower] = useState([])
    const [listCategories, setlistCategories] = useState([])
    let [nameCurrentCategory, setNameCurrentCategory] = useState()

    const { mutate: detailCategory } = useMutation('getDetailCategory', getDetailCategory, {
        onSuccess: (data) => {
            setNameCurrentCategory(data)
        },
    });

    useEffect(() => {
        async function fetch() {
            if (paramCategory) {
                setListFlower((await getFlower({ category_id: paramCategory })).flowers)
            }
            else if (paramName) {
                setListFlower((await getFlower({ name: paramName })).flowers)
            } else if (paramColor) {
                setListFlower((await getFlower({ color: paramColor })).flowers)
            }
            else {
                setListFlower((await getFlower()).flowers)
            }

            setlistCategories((await getCategory()).categories)
            detailCategory(paramCategory)
        }
        fetch();
    }, [searchParams])

    const handleClickItem = (e) => {
        navigate(`/product/${e.id}`);
    }

    const handleClickOrder = async (e) => {
        if (paramCategory) {
            setListFlower((await getFlower({ category_id: searchParams.get('category'), order_by: e.order_by })).flowers)
        }
        else if (paramName) {
            setListFlower((await getFlower({ name: paramName, order_by: e.order_by })).flowers)
        } else if (paramColor) {
            setListFlower((await getFlower({ color: paramColor, order_by: e.order_by })).flowers)
        }
        else {
            setListFlower((await getFlower({ order_by: e.order_by })).flowers)
        }

        const newOrder = order.map(item => {
            if (e.id === item.id) {
                return { ...item, active: "active" }
            }
            return { ...item, active: "none" }
        })
        setOrder(newOrder)

    }

    return (
        <div>
            <div className="close-any">
                <Navbar />

                <div id="content">
                    <div className="wrapper">
                        <div className="w-920" onclick="ToggleMenu(this);">Filter</div>
                        <div className="left-menu">
                            <div className="r_nav">
                                <h2>{nameCurrentCategory?.title}</h2>
                                <ul>
                                    {
                                        listCategories.length > 0 ? listCategories.map(e => {
                                            return <li><Link to={`/product?category=${e.id}`}>{e.title}</Link></li>
                                        }) : <></>
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="page-cat">
                            <ul className="df-menu">
                                {
                                    order.map(e => {
                                        return <li><a className={e.active} onClick={() => handleClickOrder(e)}>{e.name}</a></li>
                                    })
                                }

                            </ul>
                            <div id="data_items" className="data_items">
                                {
                                    listFlower.length > 0 ? listFlower.map(e => {
                                        return <div className="item" onClick={() => { handleClickItem(e) }}>
                                            <div className="i">
                                                <img className="lazy" src={e.images[0]} style={{ display: 'inline' }} />
                                            </div>
                                            <div className="t">{e.name}<span className="vn">{formatCurrency(e.sale_price) || formatCurrency(e.original_price)} VND</span></div>
                                            <span className="ibadge inew" />
                                        </div>
                                    }) : <>Không tìm thấy sản phẩm</>
                                }

                                <div className="morelist" style={{ padding: "50px 0px" }}>
                                    {
                                        listFlower.length > 10 ? <a id="morelist" >Xem thêm
                                            <strong className="icondown" /></a> : <></>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>

    )
}
