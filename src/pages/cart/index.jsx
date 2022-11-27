import React from 'react'
import { Navbar } from '../../layout/header/navbar'
import hoahong from '../../assets/hoahong.jpg'
import { InputNumber } from 'antd'
import { Footer } from '../../layout/footer'
import { addShopingCart, deleteCart, getCart } from '../../api/detail_product'
import { useEffect } from 'react'
import { useState } from 'react'
import { formatCurrency } from '../../helper'
import { useNavigate } from 'react-router-dom';

export function Cart() {
    let cartLocal = localStorage.getItem('cart')
    let navigate = useNavigate();
    const token = localStorage.getItem('token')
    const [cart, setCart] = useState([])

    if (!cartLocal) {
        useEffect(() => {
            async function fetch() {
                setCart((await getCart(token)).data.shopping_carts)
            }
            fetch()
        }, [])
    } else {
        useEffect(() => {
            console.log(JSON.parse(cartLocal));
            setCart(JSON.parse(cartLocal))
        }, [])
    }


    let sum = 0
    if (cart?.length > 0) {
        cart.forEach(e => {
            sum += Number(e.original_price) * e.amount
        })
    }

    const handleSl = (sl, e) => {
        const changeItem = { ...e, amount: sl }
        const changeCart = cart.map(item => {
            if (item.flower_id === e.flower_id) {
                return item = changeItem
            }
            return item
        })
        setCart(changeCart)
    }

    const handleBook = () => {
        async function fetch() {
            if (cart.length > 0) {
                await Promise.all(
                    cart.forEach(async e => {
                        await addShopingCart(e, token)
                    })
                )
            }
        }
        fetch()
        navigate('/orderinfo')
    }

    const removeItem = (e) => {
        async function fetch() {
            await deleteCart(e.flower_id, token)
            setCart((await getCart(token)).data.shopping_carts)
        }
        fetch()
    }

    return (
        <div>
            <div >
                <Navbar />
                <div id="content" style={{ paddingBottom: 50 }}>
                    <div className="wrapper">
                        <div className="clearfix" />
                        <div id="sc-item" className="cart-items">
                            {
                                cart.length > 0 ? cart.map(e => {
                                    return <div className="cart-item">
                                        <div className="img">
                                            <img src={e.images[0]} />
                                        </div>
                                        <div className="text">
                                            <div>{e.name}</div>
                                            <p><span>{formatCurrency(e.original_price)}</span></p>
                                            <InputNumber defaultValue={e.amount} min={1} onChange={(sl) => handleSl(sl, e)} />
                                        </div>
                                        <a className="close remove-item" onClick={() => removeItem(e)}>X</a>
                                    </div>
                                }) : <></>
                            }

                        </div>
                        <div className="total">
                            <div className="each-row">
                                <span>Tạm tính:</span>
                                <strong id="subtotal"> {formatCurrency(sum) || 0}đ
                                </strong>
                            </div>
                            <div className="each-row">
                                <span>Phụ phí: </span>
                                <strong id="sub-fee"> -</strong>
                            </div>
                            <div className="each-row">
                                <span>Giảm giá: </span>
                                <strong id="discount"> -</strong>
                            </div>
                            <div className="each-row">
                                <span>Hóa đơn VAT: </span>
                                <strong id="vat"> 0đ</strong>
                            </div>
                            <div className="row each-row last">
                                <span>Tổng cộng: </span>
                                <strong id="total">{formatCurrency(sum) || 0}đ</strong>
                            </div>
                            <div className="row each-row">
                                <a className="e-buy" onClick={handleBook}>Đặt hàng</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
