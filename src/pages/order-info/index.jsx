import React from 'react'
import { Navbar } from '../../layout/header/navbar'

export function OrderInfo() {
    return (
        <div>
            <div canvas="container" className="close-any">
                <Navbar />
                <div id="content">
                    <div className="wrapper">
                        <div className="clearfix" />
                        <div className="dxpnlControl_MetropolisBlue frm-data" id="ctl00_cphContent_pnlOrderInfo">
                            <h2>Thông tin người mua</h2>
                            <div>
                                Lấy thông tin liên lạc từ: &nbsp;<a href="javascript:void(0);" onclick="GetInfoFB()" style={{ display: 'none' }}>
                                    <span> <img src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/facebook_ico.svg" alt="" style={{ height: '18px' }} />&nbsp;&nbsp;Facebook</span> </a><a href="javascript:void(0);" id="btnGetInfoGG">
                                    <span> <img src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/google_ico.svg" alt="" style={{ height: '18px' }} />&nbsp;&nbsp;Google</span>
                                </a>
                            </div>
                            <div>
                                <label htmlFor="ctl00_cphContent_pnlOrderInfo_txtFullName"> <span className="req">*</span>Họ và tên: </label>
                                <input name="ctl00$cphContent$pnlOrderInfo$txtFullName" type="text" maxLength={150} id="ctl00_cphContent_pnlOrderInfo_txtFullName" className="is-invalid" onfocusout="ValidInput(this, 0)" />
                                <div className="invalid-feedback">Please enter your full name</div>
                            </div>
                            <div>
                                <label htmlFor="ctl00_cphContent_pnlOrderInfo_txtPhoneNumber"> <span className="req">*</span>Điện thoại: </label>
                                <input name="ctl00$cphContent$pnlOrderInfo$txtPhoneNumber" type="text" maxLength={25} id="ctl00_cphContent_pnlOrderInfo_txtPhoneNumber" className="is-invalid" onfocusout="ValidInput(this, 7)" />
                                <div className="invalid-feedback">Please enter your phone number</div>
                            </div>
                            <div>
                                <label htmlFor="ctl00_cphContent_pnlOrderInfo_txtEmail"> Email của bạn: </label>
                                <input name="ctl00$cphContent$pnlOrderInfo$txtEmail" type="text" maxLength={100} id="ctl00_cphContent_pnlOrderInfo_txtEmail" />
                            </div>
                            <div>
                                <label htmlFor="ctl00_cphContent_pnlOrderInfo_txtAddress"> Địa chỉ: </label>
                                <input name="ctl00$cphContent$pnlOrderInfo$txtAddress" type="text" maxLength={250} id="ctl00_cphContent_pnlOrderInfo_txtAddress" />
                            </div>
                            <div>
                                <input id="ctl00_cphContent_pnlOrderInfo_cckAnonymous" type="checkbox" name="ctl00$cphContent$pnlOrderInfo$cckAnonymous" />
                                <label htmlFor="ctl00_cphContent_pnlOrderInfo_cckAnonymous">Giấu tên người gửi?</label>
                            </div>
                            <h2>Thông tin người nhận</h2>
                            <div>
                                <span onchange="RequestCallback('COPY_INFO');"><input id="ctl00_cphContent_pnlOrderInfo_cckCopy" type="checkbox" name="ctl00$cphContent$pnlOrderInfo$cckCopy" /><label htmlFor="ctl00_cphContent_pnlOrderInfo_cckCopy">Tôi là người nhận hoa</label></span>
                            </div>
                            <div>
                                <label htmlFor="ctl00_cphContent_pnlOrderInfo_txtRecipientName"> <span className="req">*</span>Tên người nhận:</label>
                                <input name="ctl00$cphContent$pnlOrderInfo$txtRecipientName" type="text" maxLength={200} id="ctl00_cphContent_pnlOrderInfo_txtRecipientName" className="is-invalid" onfocusout="ValidInput(this, 0)" />
                                <div className="invalid-feedback">Vui lòng nhập tên người nhận</div>
                            </div>
                            <div>
                                <label htmlFor="ctl00_cphContent_pnlOrderInfo_txtRecipientPhone"> <span className="req">*</span>Điện thoại:</label>
                                <input name="ctl00$cphContent$pnlOrderInfo$txtRecipientPhone" type="text" maxLength={25} id="ctl00_cphContent_pnlOrderInfo_txtRecipientPhone" className="is-invalid" onfocusout="ValidInput(this, 7)" />
                                <div className="invalid-feedback">Nhập điện thoại người nhận</div>
                            </div>
                            <div>
                                <label htmlFor="ctl00_cphContent_pnlOrderInfo_txtRecipientAddress"> <span className="req">*</span>Địa chỉ:</label>
                                <input name="ctl00$cphContent$pnlOrderInfo$txtRecipientAddress" type="text" maxLength={250} id="ctl00_cphContent_pnlOrderInfo_txtRecipientAddress" className="is-invalid" onfocusout="ValidInput(this, 0)" />
                                <div className="invalid-feedback">Nhập địa chỉ người nhận</div>
                            </div>
                            <div>
                                <label> <span className="req">*</span>Tỉnh/Thành phố:</label>
                                <div className="cbb-2">
                                    <table id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_LP" className="dxeLoadingPanel_MetropolisBlue dxlpLoadingPanel_MetropolisBlue" cellSpacing={0} cellPadding={0} border={0} style={{ borderCollapse: 'collapse', left: '0px', top: '0px', zIndex: 30000, display: 'none' }}>
                                        <tbody>
                                            <tr>
                                                <td className="dx" style={{ paddingRight: '0px' }}><img className="dxlp-loadingImage dxlp-imgPosLeft" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="" align="middle" /></td>
                                                <td className="dx" style={{ paddingLeft: '0px' }}><span id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_TL">Loading…</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_LD" className="dxeLoadingDiv_MetropolisBlue dxlpLoadingDiv_MetropolisBlue dx-ft" style={{ left: '0px', top: '0px', zIndex: 29999, display: 'none', position: 'absolute' }} />
                                    <table className="dxeButtonEditSys dxeButtonEdit_MetropolisBlue" cellSpacing={1} cellPadding={0} id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState" border={0} style={{ width: '100%' }}>
                                        <tbody>
                                            <tr>
                                                <td style={{ display: 'none' }}><input id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_VI" name="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_VI" type="hidden" defaultValue={1} /></td>
                                                <td className="dxic" onmousedown="return ASPx.DDMC_MD('ctl00_cphContent_pnlOrderInfo_cbbRecipientState', event)" style={{ width: '100%' }}><input className="dxeEditArea_MetropolisBlue dxeEditAreaSys" id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_I" name="ctl00$cphContent$pnlOrderInfo$cbbRecipientState" onfocus="ASPx.EGotFocus('ctl00_cphContent_pnlOrderInfo_cbbRecipientState')" onblur="ASPx.ELostFocus('ctl00_cphContent_pnlOrderInfo_cbbRecipientState')" onchange="ASPx.ETextChanged('ctl00_cphContent_pnlOrderInfo_cbbRecipientState')" defaultValue="TP Hồ Chí Minh" type="text" autoComplete="off" /></td>
                                                <td id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_B-100" className="dxeButton dxeButtonEditButton_MetropolisBlue dxeButtonEditClearButton_MetropolisBlue" onmousedown="ASPx.BEClear('ctl00_cphContent_pnlOrderInfo_cbbRecipientState', event)"><img id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_B-100Img" className="dxEditors_edtClear_MetropolisBlue" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="x" /></td>
                                                <td id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_B-1" className="dxeButton dxeButtonEditButton_MetropolisBlue" style={{ WebkitUserSelect: 'none' }}><img id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_B-1Img" className="dxEditors_edtDropDown_MetropolisBlue" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="v" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_DDD_PW-1" className="dxpcDropDown_MetropolisBlue dxpclW dxpc-ddSys dxdd-root" style={{ zIndex: 10000, display: 'none', visibility: 'hidden' }}>
                                        <div className="dxpc-mainDiv dxdd-list dxpc-shadow">
                                            <div className="dxpc-contentWrapper">
                                                <div className="dxpc-content" id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_DDD_PWC-1">
                                                    <table className="dxeListBox_MetropolisBlue" cellSpacing={0} cellPadding={0} id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_DDD_L" border={0} style={{ borderCollapse: 'separate' }}>
                                                        <tbody>
                                                            <tr>
                                                                <td valign="top">
                                                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_DDD_L_D" className="dxlbd" style={{ width: '100%', overflowX: 'hidden', overflowY: 'auto' }}>
                                                                        <div id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_DDD_LLBVSTC" style={{ overflow: 'hidden', width: '100%' }}>
                                                                            <div id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_DDD_LVirtualScrollTopSpacer" />
                                                                            <input id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_DDD_L_VI" type="hidden" name="ctl00$cphContent$pnlOrderInfo$cbbRecipientState$DDD$L" defaultValue={1} />
                                                                            <table cellSpacing={0} cellPadding={0} border={0} style={{ borderCollapse: 'separate', visibility: 'hidden !important', display: 'none !important' }}>
                                                                                <tbody>
                                                                                    <tr id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_DDD_L_LBI-1" className="dxeListBoxItemRow_MetropolisBlue">
                                                                                        <td id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_DDD_L_LBI-1T0" className="dxeListBoxItem_MetropolisBlue">&nbsp;</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <table id="ctl00_cphContent_pnlOrderInfo_cbbRecipientState_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{ width: '100%', borderCollapse: 'separate' }} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="invalid-feedback">Vui lòng chọn Tỉnh/thành phố</div>
                                </div>
                                <div className="cbb-2">
                                    <table id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_LP" className="dxeLoadingPanel_MetropolisBlue dxlpLoadingPanel_MetropolisBlue" cellSpacing={0} cellPadding={0} border={0} style={{ borderCollapse: 'collapse', left: '0px', top: '0px', zIndex: 30000, display: 'none' }}>
                                        <tbody>
                                            <tr>
                                                <td className="dx" style={{ paddingRight: '0px' }}><img className="dxlp-loadingImage dxlp-imgPosLeft" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="" align="middle" /></td>
                                                <td className="dx" style={{ paddingLeft: '0px' }}><span id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_TL">Loading…</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_LD" className="dxeLoadingDiv_MetropolisBlue dxlpLoadingDiv_MetropolisBlue dx-ft" style={{ left: '0px', top: '0px', zIndex: 29999, display: 'none', position: 'absolute' }} />
                                    <table className="dxeButtonEditSys dxeButtonEdit_MetropolisBlue is-invalid" cellSpacing={1} cellPadding={0} id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity" border={0} style={{ width: '100%' }}>
                                        <tbody>
                                            <tr>
                                                <td style={{ display: 'none' }}><input id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_VI" name="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_VI" type="hidden" defaultValue={0} /></td>
                                                <td className="dxic" style={{ width: '100%' }}><input className="dxeEditArea_MetropolisBlue dxeEditAreaSys" id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_I" name="ctl00$cphContent$pnlOrderInfo$cbbRecipientCity" onfocus="ASPx.EGotFocus('ctl00_cphContent_pnlOrderInfo_cbbRecipientCity')" onblur="ASPx.ELostFocus('ctl00_cphContent_pnlOrderInfo_cbbRecipientCity')" onchange="ASPx.ETextChanged('ctl00_cphContent_pnlOrderInfo_cbbRecipientCity')" defaultValue="Quận/Huyện" type="text" autoComplete="off" /></td>
                                                <td id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_B-100" className="dxeButton dxeButtonEditButton_MetropolisBlue dxeButtonEditClearButton_MetropolisBlue" onmousedown="ASPx.BEClear('ctl00_cphContent_pnlOrderInfo_cbbRecipientCity', event)"><img id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_B-100Img" className="dxEditors_edtClear_MetropolisBlue" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="x" /></td>
                                                <td id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_B-1" className="dxeButton dxeButtonEditButton_MetropolisBlue" style={{ WebkitUserSelect: 'none' }}><img id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_B-1Img" className="dxEditors_edtDropDown_MetropolisBlue" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="v" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_DDD_PW-1" className="dxpcDropDown_MetropolisBlue dxpclW dxpc-ddSys dxdd-root" style={{ zIndex: 10000, display: 'none', visibility: 'hidden' }}>
                                        <div className="dxpc-mainDiv dxdd-list dxpc-shadow">
                                            <div className="dxpc-contentWrapper">
                                                <div className="dxpc-content" id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_DDD_PWC-1">
                                                    <table className="dxeListBox_MetropolisBlue" cellSpacing={0} cellPadding={0} id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_DDD_L" border={0} style={{ borderCollapse: 'separate' }}>
                                                        <tbody>
                                                            <tr>
                                                                <td valign="top">
                                                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_DDD_L_D" className="dxlbd" style={{ width: '100%', overflowX: 'hidden', overflowY: 'auto' }}>
                                                                        <div id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_DDD_LLBVSTC" style={{ overflow: 'hidden', width: '100%' }}>
                                                                            <div id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_DDD_LVirtualScrollTopSpacer" />
                                                                            <input id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_DDD_L_VI" type="hidden" name="ctl00$cphContent$pnlOrderInfo$cbbRecipientCity$DDD$L" defaultValue={0} />
                                                                            <table cellSpacing={0} cellPadding={0} border={0} style={{ borderCollapse: 'separate', visibility: 'hidden !important', display: 'none !important' }}>
                                                                                <tbody>
                                                                                    <tr id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_DDD_L_LBI-1" className="dxeListBoxItemRow_MetropolisBlue">
                                                                                        <td id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_DDD_L_LBI-1T0" className="dxeListBoxItem_MetropolisBlue">&nbsp;</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <table id="ctl00_cphContent_pnlOrderInfo_cbbRecipientCity_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{ width: '100%', borderCollapse: 'separate' }} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="invalid-feedback">Please choose city</div>
                                </div>
                            </div>
                            <div>
                                <label> <span className="req">*</span>Phí giao hàng:</label>
                                <span id="ctl00_cphContent_pnlOrderInfo_lblShippingCost" className="cost" />
                            </div>
                            <h2>Thời gian giao hàng</h2>
                            <div id="ctl00_cphContent_pnlOrderInfo_pnlDeliveryTime">
                                <div className="cbb-4">
                                    <table id="ctl00_cphContent_pnlOrderInfo_cbbYear_LP" className="dxeLoadingPanel_MetropolisBlue dxlpLoadingPanel_MetropolisBlue" cellSpacing={0} cellPadding={0} border={0} style={{ borderCollapse: 'collapse', left: '0px', top: '0px', zIndex: 30000, display: 'none' }}>
                                        <tbody>
                                            <tr>
                                                <td className="dx" style={{ paddingRight: '0px' }}><img className="dxlp-loadingImage dxlp-imgPosLeft" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="" align="middle" /></td>
                                                <td className="dx" style={{ paddingLeft: '0px' }}><span id="ctl00_cphContent_pnlOrderInfo_cbbYear_TL">Loading…</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbYear_LD" className="dxeLoadingDiv_MetropolisBlue dxlpLoadingDiv_MetropolisBlue dx-ft" style={{ left: '0px', top: '0px', zIndex: 29999, display: 'none', position: 'absolute' }} />
                                    <table className="dxeButtonEditSys dxeButtonEdit_MetropolisBlue" cellSpacing={1} cellPadding={0} id="ctl00_cphContent_pnlOrderInfo_cbbYear" border={0} style={{ width: '100%' }}>
                                        <tbody>
                                            <tr>
                                                <td style={{ display: 'none' }}><input id="ctl00_cphContent_pnlOrderInfo_cbbYear_VI" name="ctl00_cphContent_pnlOrderInfo_cbbYear_VI" type="hidden" defaultValue={2022} /></td>
                                                <td className="dxic" style={{ width: '100%' }}><input className="dxeEditArea_MetropolisBlue dxeEditAreaSys" id="ctl00_cphContent_pnlOrderInfo_cbbYear_I" name="ctl00$cphContent$pnlOrderInfo$cbbYear" onfocus="ASPx.EGotFocus('ctl00_cphContent_pnlOrderInfo_cbbYear')" onblur="ASPx.ELostFocus('ctl00_cphContent_pnlOrderInfo_cbbYear')" onchange="ASPx.ETextChanged('ctl00_cphContent_pnlOrderInfo_cbbYear')" defaultValue="Năm 2022" type="text" autoComplete="off" /></td>
                                                <td id="ctl00_cphContent_pnlOrderInfo_cbbYear_B-1" className="dxeButton dxeButtonEditButton_MetropolisBlue" style={{ WebkitUserSelect: 'none' }}><img id="ctl00_cphContent_pnlOrderInfo_cbbYear_B-1Img" className="dxEditors_edtDropDown_MetropolisBlue" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="v" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbYear_DDD_PW-1" className="dxpcDropDown_MetropolisBlue dxpclW dxpc-ddSys dxdd-root" style={{ zIndex: 10000, display: 'none', visibility: 'hidden' }}>
                                        <div className="dxpc-mainDiv dxdd-list dxpc-shadow">
                                            <div className="dxpc-contentWrapper">
                                                <div className="dxpc-content" id="ctl00_cphContent_pnlOrderInfo_cbbYear_DDD_PWC-1">
                                                    <table className="dxeListBox_MetropolisBlue" cellSpacing={0} cellPadding={0} id="ctl00_cphContent_pnlOrderInfo_cbbYear_DDD_L" border={0} style={{ borderCollapse: 'separate' }}>
                                                        <tbody>
                                                            <tr>
                                                                <td valign="top">
                                                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbYear_DDD_L_D" className="dxlbd" style={{ width: '100%', overflowX: 'hidden', overflowY: 'auto' }}>
                                                                        <div id="ctl00_cphContent_pnlOrderInfo_cbbYear_DDD_LLBVSTC" style={{ overflow: 'hidden', width: '100%' }}>
                                                                            <div id="ctl00_cphContent_pnlOrderInfo_cbbYear_DDD_LVirtualScrollTopSpacer" />
                                                                            <input id="ctl00_cphContent_pnlOrderInfo_cbbYear_DDD_L_VI" type="hidden" name="ctl00$cphContent$pnlOrderInfo$cbbYear$DDD$L" defaultValue={2022} />
                                                                            <table cellSpacing={0} cellPadding={0} border={0} style={{ borderCollapse: 'separate', visibility: 'hidden !important', display: 'none !important' }}>
                                                                                <tbody>
                                                                                    <tr id="ctl00_cphContent_pnlOrderInfo_cbbYear_DDD_L_LBI-1" className="dxeListBoxItemRow_MetropolisBlue">
                                                                                        <td id="ctl00_cphContent_pnlOrderInfo_cbbYear_DDD_L_LBI-1T0" className="dxeListBoxItem_MetropolisBlue">&nbsp;</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <table id="ctl00_cphContent_pnlOrderInfo_cbbYear_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{ width: '100%', borderCollapse: 'separate' }} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cbb-4">
                                    <table id="ctl00_cphContent_pnlOrderInfo_cbbMonth_LP" className="dxeLoadingPanel_MetropolisBlue dxlpLoadingPanel_MetropolisBlue" cellSpacing={0} cellPadding={0} border={0} style={{ borderCollapse: 'collapse', left: '0px', top: '0px', zIndex: 30000, display: 'none' }}>
                                        <tbody>
                                            <tr>
                                                <td className="dx" style={{ paddingRight: '0px' }}><img className="dxlp-loadingImage dxlp-imgPosLeft" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="" align="middle" /></td>
                                                <td className="dx" style={{ paddingLeft: '0px' }}><span id="ctl00_cphContent_pnlOrderInfo_cbbMonth_TL">Loading…</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbMonth_LD" className="dxeLoadingDiv_MetropolisBlue dxlpLoadingDiv_MetropolisBlue dx-ft" style={{ left: '0px', top: '0px', zIndex: 29999, display: 'none', position: 'absolute' }} />
                                    <table className="dxeButtonEditSys dxeButtonEdit_MetropolisBlue" cellSpacing={1} cellPadding={0} id="ctl00_cphContent_pnlOrderInfo_cbbMonth" border={0} style={{ width: '100%' }}>
                                        <tbody>
                                            <tr>
                                                <td style={{ display: 'none' }}><input id="ctl00_cphContent_pnlOrderInfo_cbbMonth_VI" name="ctl00_cphContent_pnlOrderInfo_cbbMonth_VI" type="hidden" defaultValue={11} /></td>
                                                <td className="dxic" style={{ width: '100%' }}><input className="dxeEditArea_MetropolisBlue dxeEditAreaSys" id="ctl00_cphContent_pnlOrderInfo_cbbMonth_I" name="ctl00$cphContent$pnlOrderInfo$cbbMonth" onfocus="ASPx.EGotFocus('ctl00_cphContent_pnlOrderInfo_cbbMonth')" onblur="ASPx.ELostFocus('ctl00_cphContent_pnlOrderInfo_cbbMonth')" onchange="ASPx.ETextChanged('ctl00_cphContent_pnlOrderInfo_cbbMonth')" defaultValue="Tháng 11" type="text" autoComplete="off" /></td>
                                                <td id="ctl00_cphContent_pnlOrderInfo_cbbMonth_B-1" className="dxeButton dxeButtonEditButton_MetropolisBlue" style={{ WebkitUserSelect: 'none' }}><img id="ctl00_cphContent_pnlOrderInfo_cbbMonth_B-1Img" className="dxEditors_edtDropDown_MetropolisBlue" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="v" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbMonth_DDD_PW-1" className="dxpcDropDown_MetropolisBlue dxpclW dxpc-ddSys dxdd-root" style={{ zIndex: 10000, display: 'none', visibility: 'hidden' }}>
                                        <div className="dxpc-mainDiv dxdd-list dxpc-shadow">
                                            <div className="dxpc-contentWrapper">
                                                <div className="dxpc-content" id="ctl00_cphContent_pnlOrderInfo_cbbMonth_DDD_PWC-1">
                                                    <table className="dxeListBox_MetropolisBlue" cellSpacing={0} cellPadding={0} id="ctl00_cphContent_pnlOrderInfo_cbbMonth_DDD_L" border={0} style={{ borderCollapse: 'separate' }}>
                                                        <tbody>
                                                            <tr>
                                                                <td valign="top">
                                                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbMonth_DDD_L_D" className="dxlbd" style={{ width: '100%', overflowX: 'hidden', overflowY: 'auto' }}>
                                                                        <div id="ctl00_cphContent_pnlOrderInfo_cbbMonth_DDD_LLBVSTC" style={{ overflow: 'hidden', width: '100%' }}>
                                                                            <div id="ctl00_cphContent_pnlOrderInfo_cbbMonth_DDD_LVirtualScrollTopSpacer" />
                                                                            <input id="ctl00_cphContent_pnlOrderInfo_cbbMonth_DDD_L_VI" type="hidden" name="ctl00$cphContent$pnlOrderInfo$cbbMonth$DDD$L" defaultValue={11} />
                                                                            <table cellSpacing={0} cellPadding={0} border={0} style={{ borderCollapse: 'separate', visibility: 'hidden !important', display: 'none !important' }}>
                                                                                <tbody>
                                                                                    <tr id="ctl00_cphContent_pnlOrderInfo_cbbMonth_DDD_L_LBI-1" className="dxeListBoxItemRow_MetropolisBlue">
                                                                                        <td id="ctl00_cphContent_pnlOrderInfo_cbbMonth_DDD_L_LBI-1T0" className="dxeListBoxItem_MetropolisBlue">&nbsp;</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <table id="ctl00_cphContent_pnlOrderInfo_cbbMonth_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{ width: '100%', borderCollapse: 'separate' }} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cbb-4">
                                    <table id="ctl00_cphContent_pnlOrderInfo_cbbDay_LP" className="dxeLoadingPanel_MetropolisBlue dxlpLoadingPanel_MetropolisBlue" cellSpacing={0} cellPadding={0} border={0} style={{ borderCollapse: 'collapse', left: '0px', top: '0px', zIndex: 30000, display: 'none' }}>
                                        <tbody>
                                            <tr>
                                                <td className="dx" style={{ paddingRight: '0px' }}><img className="dxlp-loadingImage dxlp-imgPosLeft" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="" align="middle" /></td>
                                                <td className="dx" style={{ paddingLeft: '0px' }}><span id="ctl00_cphContent_pnlOrderInfo_cbbDay_TL">Loading…</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbDay_LD" className="dxeLoadingDiv_MetropolisBlue dxlpLoadingDiv_MetropolisBlue dx-ft" style={{ left: '0px', top: '0px', zIndex: 29999, display: 'none', position: 'absolute' }} />
                                    <table className="dxeButtonEditSys dxeButtonEdit_MetropolisBlue" cellSpacing={1} cellPadding={0} id="ctl00_cphContent_pnlOrderInfo_cbbDay" border={0} style={{ width: '100%' }}>
                                        <tbody>
                                            <tr>
                                                <td style={{ display: 'none' }}><input id="ctl00_cphContent_pnlOrderInfo_cbbDay_VI" name="ctl00_cphContent_pnlOrderInfo_cbbDay_VI" type="hidden" defaultValue={6} /></td>
                                                <td className="dxic" style={{ width: '100%' }}><input className="dxeEditArea_MetropolisBlue dxeEditAreaSys" id="ctl00_cphContent_pnlOrderInfo_cbbDay_I" name="ctl00$cphContent$pnlOrderInfo$cbbDay" onfocus="ASPx.EGotFocus('ctl00_cphContent_pnlOrderInfo_cbbDay')" onblur="ASPx.ELostFocus('ctl00_cphContent_pnlOrderInfo_cbbDay')" onchange="ASPx.ETextChanged('ctl00_cphContent_pnlOrderInfo_cbbDay')" defaultValue={6} type="text" autoComplete="off" /></td>
                                                <td id="ctl00_cphContent_pnlOrderInfo_cbbDay_B-1" className="dxeButton dxeButtonEditButton_MetropolisBlue" style={{ WebkitUserSelect: 'none' }}><img id="ctl00_cphContent_pnlOrderInfo_cbbDay_B-1Img" className="dxEditors_edtDropDown_MetropolisBlue" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="v" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbDay_DDD_PW-1" className="dxpcDropDown_MetropolisBlue dxpclW dxpc-ddSys dxdd-root" style={{ zIndex: 10000, display: 'none', visibility: 'hidden' }}>
                                        <div className="dxpc-mainDiv dxdd-list dxpc-shadow">
                                            <div className="dxpc-contentWrapper">
                                                <div className="dxpc-content" id="ctl00_cphContent_pnlOrderInfo_cbbDay_DDD_PWC-1">
                                                    <table className="dxeListBox_MetropolisBlue" cellSpacing={0} cellPadding={0} id="ctl00_cphContent_pnlOrderInfo_cbbDay_DDD_L" border={0} style={{ borderCollapse: 'separate' }}>
                                                        <tbody>
                                                            <tr>
                                                                <td valign="top">
                                                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbDay_DDD_L_D" className="dxlbd" style={{ width: '100%', overflowX: 'hidden', overflowY: 'auto' }}>
                                                                        <div id="ctl00_cphContent_pnlOrderInfo_cbbDay_DDD_LLBVSTC" style={{ overflow: 'hidden', width: '100%' }}>
                                                                            <div id="ctl00_cphContent_pnlOrderInfo_cbbDay_DDD_LVirtualScrollTopSpacer" />
                                                                            <input id="ctl00_cphContent_pnlOrderInfo_cbbDay_DDD_L_VI" type="hidden" name="ctl00$cphContent$pnlOrderInfo$cbbDay$DDD$L" defaultValue={6} />
                                                                            <table cellSpacing={0} cellPadding={0} border={0} style={{ borderCollapse: 'separate', visibility: 'hidden !important', display: 'none !important' }}>
                                                                                <tbody>
                                                                                    <tr id="ctl00_cphContent_pnlOrderInfo_cbbDay_DDD_L_LBI-1" className="dxeListBoxItemRow_MetropolisBlue">
                                                                                        <td id="ctl00_cphContent_pnlOrderInfo_cbbDay_DDD_L_LBI-1T0" className="dxeListBoxItem_MetropolisBlue">&nbsp;</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <table id="ctl00_cphContent_pnlOrderInfo_cbbDay_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{ width: '100%', borderCollapse: 'separate' }} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cbb-4">
                                    <table id="ctl00_cphContent_pnlOrderInfo_cbbHour_LP" className="dxeLoadingPanel_MetropolisBlue dxlpLoadingPanel_MetropolisBlue" cellSpacing={0} cellPadding={0} border={0} style={{ borderCollapse: 'collapse', left: '0px', top: '0px', zIndex: 30000, display: 'none' }}>
                                        <tbody>
                                            <tr>
                                                <td className="dx" style={{ paddingRight: '0px' }}><img className="dxlp-loadingImage dxlp-imgPosLeft" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="" align="middle" /></td>
                                                <td className="dx" style={{ paddingLeft: '0px' }}><span id="ctl00_cphContent_pnlOrderInfo_cbbHour_TL">Loading…</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbHour_LD" className="dxeLoadingDiv_MetropolisBlue dxlpLoadingDiv_MetropolisBlue dx-ft" style={{ left: '0px', top: '0px', zIndex: 29999, display: 'none', position: 'absolute' }} />
                                    <table className="dxeButtonEditSys dxeButtonEdit_MetropolisBlue" cellSpacing={1} cellPadding={0} id="ctl00_cphContent_pnlOrderInfo_cbbHour" border={0} style={{ width: '100%' }}>
                                        <tbody>
                                            <tr>
                                                <td style={{ display: 'none' }}><input id="ctl00_cphContent_pnlOrderInfo_cbbHour_VI" name="ctl00_cphContent_pnlOrderInfo_cbbHour_VI" type="hidden" defaultValue={17} /></td>
                                                <td className="dxic" style={{ width: '100%' }}><input className="dxeEditArea_MetropolisBlue dxeEditAreaSys" id="ctl00_cphContent_pnlOrderInfo_cbbHour_I" name="ctl00$cphContent$pnlOrderInfo$cbbHour" onfocus="ASPx.EGotFocus('ctl00_cphContent_pnlOrderInfo_cbbHour')" onblur="ASPx.ELostFocus('ctl00_cphContent_pnlOrderInfo_cbbHour')" onchange="ASPx.ETextChanged('ctl00_cphContent_pnlOrderInfo_cbbHour')" defaultValue="17 h" type="text" autoComplete="off" /></td>
                                                <td id="ctl00_cphContent_pnlOrderInfo_cbbHour_B-1" className="dxeButton dxeButtonEditButton_MetropolisBlue" style={{ WebkitUserSelect: 'none' }}><img id="ctl00_cphContent_pnlOrderInfo_cbbHour_B-1Img" className="dxEditors_edtDropDown_MetropolisBlue" src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/DXR(2).axd" alt="v" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbHour_DDD_PW-1" className="dxpcDropDown_MetropolisBlue dxpclW dxpc-ddSys dxdd-root" style={{ zIndex: 10000, display: 'none', visibility: 'hidden' }}>
                                        <div className="dxpc-mainDiv dxdd-list dxpc-shadow">
                                            <div className="dxpc-contentWrapper">
                                                <div className="dxpc-content" id="ctl00_cphContent_pnlOrderInfo_cbbHour_DDD_PWC-1">
                                                    <table className="dxeListBox_MetropolisBlue" cellSpacing={0} cellPadding={0} id="ctl00_cphContent_pnlOrderInfo_cbbHour_DDD_L" border={0} style={{ borderCollapse: 'separate' }}>
                                                        <tbody>
                                                            <tr>
                                                                <td valign="top">
                                                                    <div id="ctl00_cphContent_pnlOrderInfo_cbbHour_DDD_L_D" className="dxlbd" style={{ width: '100%', overflowX: 'hidden', overflowY: 'auto' }}>
                                                                        <div id="ctl00_cphContent_pnlOrderInfo_cbbHour_DDD_LLBVSTC" style={{ overflow: 'hidden', width: '100%' }}>
                                                                            <div id="ctl00_cphContent_pnlOrderInfo_cbbHour_DDD_LVirtualScrollTopSpacer" />
                                                                            <input id="ctl00_cphContent_pnlOrderInfo_cbbHour_DDD_L_VI" type="hidden" name="ctl00$cphContent$pnlOrderInfo$cbbHour$DDD$L" defaultValue={17} />
                                                                            <table cellSpacing={0} cellPadding={0} border={0} style={{ borderCollapse: 'separate', visibility: 'hidden !important', display: 'none !important' }}>
                                                                                <tbody>
                                                                                    <tr id="ctl00_cphContent_pnlOrderInfo_cbbHour_DDD_L_LBI-1" className="dxeListBoxItemRow_MetropolisBlue">
                                                                                        <td id="ctl00_cphContent_pnlOrderInfo_cbbHour_DDD_L_LBI-1T0" className="dxeListBoxItem_MetropolisBlue">&nbsp;</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <table id="ctl00_cphContent_pnlOrderInfo_cbbHour_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{ width: '100%', borderCollapse: 'separate' }} />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="invalid-feedback">Delivery time invalid -</div>
                            </div>
                            <h2>Lời nhắn</h2>
                            <div>
                                <label> Thiệp gửi tặng cho:</label>
                                <select name="ctl00$cphContent$pnlOrderInfo$ddlObjectRecipient" id="ctl00_cphContent_pnlOrderInfo_ddlObjectRecipient">
                                    <option selected="selected" value={0}>Thiệp gửi tặng cho</option>
                                    <option value={8}>Anh, chị, em - Brother, sister</option>
                                    <option value={1}>Bạn bè - Friends</option>
                                    <option value={5}>Bố Mẹ - Parent</option>
                                    <option value={2}>Chồng - Husband</option>
                                    <option value={10}>Đặt giúp người khác - Not me</option>
                                    <option value={6}>Đối tác, khách hàng - Partners/Customer</option>
                                    <option value={4}>Đồng nghiệp/Sếp - Co-worker/Boss</option>
                                    <option value={7}>Người yêu - Lover</option>
                                    <option value={3}>Vợ -Wife</option>
                                    <option value={9}>Khác - Other</option>
                                </select>
                            </div>
                            <div>
                                <label> Nhân dịp:</label>
                                <select name="ctl00$cphContent$pnlOrderInfo$ddlOccasion" id="ctl00_cphContent_pnlOrderInfo_ddlOccasion">
                                    <option selected="selected" value={0}>Nhân dịp</option>
                                    <option value={5}>Chúc mừng - Congratulations</option>
                                    <option value={4}>Khai trương - Grand openings</option>
                                    <option value={1}>Sinh nhật - Birthday</option>
                                    <option value={7}>Cảm ơn - Thankyou</option>
                                    <option value={6}>Chia buồn - Sympathy</option>
                                    <option value={3}>Làm quen/Tình yêu - Dating/Love</option>
                                    <option value={2}>Ngày kỉ niệm - Anniversary</option>
                                    <option value={8}>Ngày lễ - Occacion day (20/10, 8/3, 20/11)</option>
                                    <option value={22}>Thích thì tặng - Just Because</option>
                                    <option value={21}>Xin lỗi - Sorry</option>
                                    <option value={20}>Khác - Others</option>
                                </select>
                            </div>
                            <div>Thông điệp:</div>
                            <div>
                                <textarea name="ctl00$cphContent$pnlOrderInfo$txtMessage" rows={2} cols={20} id="ctl00_cphContent_pnlOrderInfo_txtMessage" defaultValue={""} />
                            </div>
                            <div>Lời nhắn cho Hoayeuthuong.com:</div>
                            <div>
                                <textarea name="ctl00$cphContent$pnlOrderInfo$txtDescription" rows={2} cols={20} id="ctl00_cphContent_pnlOrderInfo_txtDescription" defaultValue={""} />
                            </div>
                            <div>
                                <span className="morelist" onchange="ShowHideVat()"><input id="ctl00_cphContent_pnlOrderInfo_cckVat" type="checkbox" name="ctl00$cphContent$pnlOrderInfo$cckVat" /><label htmlFor="ctl00_cphContent_pnlOrderInfo_cckVat">Xuất hóa đơn GTGT</label></span>
                            </div>
                            <div id="pnlVat" style={{ display: 'none' }}>
                                <div>
                                    <label htmlFor="ctl00_cphContent_pnlOrderInfo_txtCompanyName"> <span className="req">*</span>Tên công ty: </label>
                                    <input name="ctl00$cphContent$pnlOrderInfo$txtCompanyName" type="text" maxLength={250} id="ctl00_cphContent_pnlOrderInfo_txtCompanyName" />
                                    <div className="invalid-feedback">Please enter company name</div>
                                </div>
                                <div>
                                    <label htmlFor="ctl00_cphContent_pnlOrderInfo_txtTaxCode">Mã số thuế:</label>
                                    <input name="ctl00$cphContent$pnlOrderInfo$txtTaxCode" type="text" maxLength={100} id="ctl00_cphContent_pnlOrderInfo_txtTaxCode" />
                                </div>
                                <div>
                                    <label htmlFor="ctl00_cphContent_pnlOrderInfo_txtCompanyAddress"> <span className="req">*</span>Địa chỉ: </label>
                                    <input name="ctl00$cphContent$pnlOrderInfo$txtCompanyAddress" type="text" maxLength={250} id="ctl00_cphContent_pnlOrderInfo_txtCompanyAddress" />
                                    <div className="invalid-feedback">Please enter company address</div>
                                </div>
                            </div>
                            <div className="button">
                                <a href="javascript:void(0);" onclick="RequestCallback('ORDER')" className="e-buy">Đặt hàng</a>
                            </div>
                        </div>
                        <div className="sc-right">
                            <div className="cart-item" data-id={13376}>
                                <div className="img">
                                    <img src="./shop hoa _ hoa tươi _ điện hoa _ hoayeuthuong.com_files/13376_chuyen-yeu.jpg" />
                                </div>
                                <div className="text">
                                    <a href="https://hoayeuthuong.com/shop-hoa/bo-hoa-tuoi/13376_chuyen-yeu">Chuyện yêu</a>
                                    <p><span>1 x 600.000 đ</span></p>
                                </div>
                                <div className="clearfix" />
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
