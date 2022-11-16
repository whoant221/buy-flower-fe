import React from 'react'
import { Navbar } from '../../layout/header/navbar'

export function Cart() {
    return (
        <div>
            <div>
                <Navbar />
                <div id="content">
                    <div className="wrapper">
                        <div className="clearfix" />
                        <div id="sc-item" className="cart-items">
                            <div className="cart-item" data-id={13376}>
                                <div className="img">
                                    <img src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/13376_chuyen-yeu.jpg" />
                                </div>
                                <div className="text">
                                    <a href="https://hoayeuthuong.com/shop-hoa/bo-hoa-tuoi/13376_chuyen-yeu">Chuyện yêu</a>
                                    <p><span>600.000 đ</span></p>
                                    <div className="ctrl-qty">
                                        <a href="javascript:void(0);" className="minus" onclick="AddOrRemoveItems(this, false, 13376, 555555,5);" />
                                        <input className="txtQty" type="number" defaultValue={1} onchange="HandleKeypress(this, event, 13376, 555555,5)" onkeypress="HandleKeypress(this, event, 13376, 555555,5)" />
                                        <a href="javascript:void(0);" className="plus" onclick="AddOrRemoveItems(this, true, 13376, 555555,5);" />
                                    </div>
                                </div>
                                <a className="close remove-item" href="javascript:void(0);" onclick="RemoveItem(13376)">X</a>
                                <div className="clearfix" />
                            </div>
                        </div>
                        <div className="total">
                            <div className="each-row">
                                <span>Tạm tính:</span>
                                <strong id="subtotal"> 555.556 đ</strong>
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
                                <strong id="vat"> 55.556 đ</strong>
                            </div>
                            <div className="row each-row last">
                                <span>Tổng cộng: </span>
                                <strong id="total"> 611.111 đ</strong>
                            </div>
                            <div className="row each-row">
                                <a href="https://hoayeuthuong.com/checkout/OrderInfo.aspx?lang=vn" className="e-buy">Đặt hàng</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
