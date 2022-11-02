
import './style.css'
import './slidebars.css'
import './crumbs.css'
import { Navbar } from '../../layout/header/navbar'

export function Home() {
    return <>
    <div>
        <div off-canvas="sb left reveal" style={{}}>
            <ul className="sb_main_nav" >
                <li><a href="https://hoayeuthuong.com/" title="Trang chủ">Trang chủ</a></li>
                <li>
                    <p className="sb_main_h">Chủ đề<span className="plusminus">+</span></p>
                    <div className="sb_sub_nav">
                        <a href="https://hoayeuthuong.com/dien-hoa/hoa-sinh-nhat.aspx" title="Hoa sinh nhật">Hoa sinh
                            nhật</a><a href="https://hoayeuthuong.com/dien-hoa/hoa-khai-truong.aspx" title="Hoa khai trương">Hoa khai trương</a><a href="https://hoayeuthuong.com/dien-hoa/hoa-chuc-mung.aspx" title="Hoa chúc mừng">Hoa chúc
                                mừng</a><a href="https://hoayeuthuong.com/dien-hoa/hoa-chia-buon.aspx" title="Hoa chia buồn">Hoa chia buồn</a>
                        <a href="https://hoayeuthuong.com/dien-hoa/hoa-chuc-suc-khoe.aspx" title="Hoa chúc sức khỏe">Hoa
                            chúc sức khỏe</a><a href="https://hoayeuthuong.com/dien-hoa/hoa-tinh-yeu.aspx" title="Hoa tình yêu">Hoa tình yêu</a><a href="https://hoayeuthuong.com/dien-hoa/hoa-cam-on.aspx" title="Hoa cảm ơn">Hoa cảm ơn</a><a href="https://hoayeuthuong.com/dien-hoa/hoa-chuc-mung-tot-nghiep.aspx" title="Hoa mừng tốt nghiệp">Hoa mừng tốt nghiệp</a>
                    </div>
                </li>
                <li>
                    <p className="sb_main_h">Đối tượng<span className="plusminus">+</span></p>
                    <div className="sb_sub_nav">
                        <a href="https://hoayeuthuong.com/doi-tuong/nguoi-yeu.aspx" title="Hoa tặng người yêu">Hoa tặng
                            người yêu</a><a href="https://hoayeuthuong.com/doi-tuong/ban-be.aspx" title="Hoa tặng bạn bè">Hoa tặng bạn bè</a><a href="https://hoayeuthuong.com/doi-tuong/vo-yeu.aspx" title="Hoa tặng vợ">Hoa tặng vợ</a><a href="https://hoayeuthuong.com/doi-tuong/chong-yeu.aspx" title="Hoa tặng chồng">Hoa tặng
                                chồng</a><a href="https://hoayeuthuong.com/doi-tuong/me-yeu.aspx" title="Hoa tặng mẹ">Hoa
                                    tặng mẹ</a><a href="https://hoayeuthuong.com/doi-tuong/tre-em.aspx" title="Hoa tặng trẻ em">Hoa tặng trẻ em</a><a href="https://hoayeuthuong.com/doi-tuong/cho-nu.aspx" title="Hoa tặng cho nữ">Hoa tặng cho
                                        nữ</a><a href="https://hoayeuthuong.com/doi-tuong/cho-nam.aspx" title="Hoa tặng cho nam">Hoa
                                            tặng cho nam</a><a href="https://hoayeuthuong.com/doi-tuong/sep.aspx" title="Hoa tặng Sếp">Hoa tặng Sếp</a><a href="https://hoayeuthuong.com/doi-tuong/dong-nghiep.aspx" title="Hoa tặng đồng nghiệp">Hoa
                                                tặng đồng nghiệp</a>
                    </div>
                </li>
                <li>
                    <p className="sb_main_h">Kiểu dáng<span className="plusminus">+</span></p>
                    <div className="sb_sub_nav">
                        <a href="https://hoayeuthuong.com/shop-hoa/bo-hoa-tuoi.aspx" title="Bó hoa tươi">Bó hoa
                            tươi</a><a href="https://hoayeuthuong.com/shop-hoa/gio-hoa-tuoi.aspx" title="Giỏ hoa tươi">Giỏ hoa tươi</a><a href="https://hoayeuthuong.com/shop-hoa/hoa-tuoi-hop.aspx" title="Hộp hoa tươi">Hộp hoa
                                tươi</a><a href="https://hoayeuthuong.com/shop-hoa/binh-hoa-tuoi.aspx" title="Bình hoa tươi">Bình hoa tươi</a><a href="https://hoayeuthuong.com/shop-hoa/hoa-tha-binh.aspx" title="Hoa thả bình">Hoa thả
                                    bình</a><a href="https://hoayeuthuong.com/shop-hoa/hoa-chuc-mung.aspx" title="Lẵng hoa khai trương">Lẵng hoa khai trương</a><a href="https://hoayeuthuong.com/shop-hoa/hoa-chia-buon.aspx" title="Lẵng hoa chia buồn">Lẵng
                                        hoa chia buồn</a>
                    </div>
                </li>
                <li>
                    <p className="sb_main_h">Hoa tươi<span className="plusminus">+</span></p>
                    <div className="sb_sub_nav">
                        <a href="https://hoayeuthuong.com/hoa-tuoi/only-rose.aspx" title="Only rose">Only rose</a><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-hong.aspx" title="Hoa hồng">Hoa hồng</a><a href="https://hoayeuthuong.com/hoa-tuoi/huong-duong.aspx" title="Hoa Hướng Dương">Hoa Hướng
                            Dương</a><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-dong-tien.aspx" title="Hoa đồng tiền">Hoa đồng tiền</a><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-lan.aspx" title="Lan hồ điệp">Lan hồ điệp</a><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-cam-chuong.aspx" title="Cẩm chướng">Cẩm
                                chướng</a><a href="https://hoayeuthuong.com/hoa-tuoi/cat-tuong.aspx" title="Hoa Cát Tường">Hoa Cát Tường</a><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-ly.aspx" title="Hoa ly">Hoa ly</a><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-baby.aspx" title="Baby flower">Baby flower</a><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-cuc.aspx" title="Hoa cúc">Hoa cúc</a>
                    </div>
                </li>
                <li>
                    <p className="sb_main_h">
                        Màu sắc<span className="plusminus">+</span>
                    </p>
                    <div className="sb_sub_nav">
                        <a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-trang.aspx" title="Màu trắng">Màu
                            trắng</a><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-do.aspx" title="Màu đỏ">Màu đỏ</a><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-hong.aspx" title="Màu hồng">Màu
                                hồng</a><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-cam.aspx" title="Màu cam">Màu cam</a><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-tim.aspx" title="Màu tím">Màu
                                    tím</a><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-vang.aspx" title="Màu vàng">Màu vàng</a><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-xanh.aspx" title="Màu xanh (xanh dương, xanh lá)">Màu xanh (xanh dương, xanh lá)</a><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-nhieu-mau.aspx" title="Kết hợp màu">Kết
                                        hợp màu</a>
                    </div>
                </li>
                <li>
                    <p className="sb_main_h">
                        Bộ Sưu tập<span className="plusminus">+</span>
                    </p>
                    <div className="sb_sub_nav">
                        <a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-cao-cap.aspx" title="Hoa Cao Cấp">Hoa Cao
                            Cấp</a>
                        <a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-sinh-vien.aspx" title="Hoa sinh viên">Hoa
                            sinh viên</a>
                        <a href="https://hoayeuthuong.com/cua-hang-hoa/mau-hoa-moi.aspx" title="Mẫu hoa mới">Mẫu hoa
                            mới</a>
                        <a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai.aspx" title="Khuyến mãi">Khuyến
                            mãi</a>
                        <a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-tuoi-20-10.aspx" title="Ngày phụ nữ Việt Nam (20/10)">Ngày phụ nữ Việt Nam (20/10)</a>
                        <a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-tuoi-20-11.aspx" title="Ngày nhà giáo">Ngày
                            nhà giáo</a>
                        <a href="https://hoayeuthuong.com/giang-sinh.aspx" title="Giáng Sinh">Giáng Sinh</a>
                        <a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-tet.aspx" title="Hoa Tết">Hoa Tết</a>
                        <a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-su-kien.aspx" title="Hoa sự kiện">Hoa sự
                            kiện</a>
                        <a href="https://hoayeuthuong.com/hoa-tinh-yeu.aspx" title="Hoa tình yêu">Hoa tình yêu</a>
                        <a href="https://hoayeuthuong.com/ngay-phu-nu.aspx" title="Ngày Quốc tế Phụ nữ">Ngày Quốc tế Phụ
                            nữ</a>
                    </div>
                </li>
                <li>
                    <p className="sb_main_h">
                        Quà tặng kèm<span className="plusminus">+</span>
                    </p>
                    <div className="sb_sub_nav">
                        <a href="https://hoayeuthuong.com/qua-tang/banh-kem-tous-les-jours.aspx" title="Bánh kem Tous les Jours">Bánh kem Tous les Jours</a>
                        <a href="https://hoayeuthuong.com/qua-tang/banh-kem-brodard.aspx" title="Bánh kem Brodard">Bánh
                            kem Brodard</a>
                        <a href="https://hoayeuthuong.com/qua-tang/so-co-la-d-art.aspx" title="Chocolate">Chocolate</a>
                        <a href="https://hoayeuthuong.com/qua-tang/trai-cay.aspx" title="Trái cây">Trái cây</a>
                        <a href="https://hoayeuthuong.com/giang-sinh/nen-thom-va-hoa.aspx" title="Nến thơm">Nến thơm</a>
                    </div>
                </li>
                <li><a href="https://hoayeuthuong.com/hoa-cuoi">Hoa cưới</a></li>
                <li><a href="https://hoayeuthuong.com/y-nghia-hoa.aspx" title="Ý nghĩa hoa">Ý nghĩa hoa</a></li>
            </ul>
        </div>
        <div canvas="container" className="close-any">
        <Navbar/>
            <div className="icon_flower">
                <div className="wrapper">
                    <h2><span title="Mẫu hoa mới năm 2022">
                        Mẫu hoa mới năm 2022</span></h2>
                    <ul className="items">
                        <li>
                            <a href="https://hoayeuthuong.com/dien-hoa/hoa-tinh-yeu.aspx" title="Hoa tình yêu"><img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-hoa-tinh-yeu.png" /></a>
                            <a href="https://hoayeuthuong.com/dien-hoa/hoa-tinh-yeu.aspx" title="Hoa tình yêu">Hoa tình
                                yêu</a>
                        </li>
                        <li>
                            <a href="https://hoayeuthuong.com/dien-hoa/hoa-sinh-nhat.aspx" title="Hoa sinh nhật"><img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-hoa-sinh-nhat.png" /></a>
                            <a href="https://hoayeuthuong.com/dien-hoa/hoa-sinh-nhat.aspx" title="Hoa sinh nhật">Hoa
                                sinh nhật</a>
                        </li>
                        <li>
                            <a href="https://hoayeuthuong.com/cua-hang-hoa/mau-hoa-moi.aspx" title="Mẫu hoa mới"><img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-mau-hoa-moi.png" /></a>
                            <a href="https://hoayeuthuong.com/cua-hang-hoa/mau-hoa-moi.aspx" title="Mẫu hoa mới">Mẫu hoa
                                mới</a>
                        </li>
                        <li>
                            <a href="https://hoayeuthuong.com/cay-canh/cay-van-phong.aspx" title="Cây văn phòng"><img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-cay-vp.png" /></a>
                            <a href="https://hoayeuthuong.com/cay-canh/cay-van-phong.aspx" title="Cây văn phòng">Cây văn
                                phòng</a>
                        </li>
                        <li>
                            <a href="https://hoayeuthuong.com/shop-hoa/hoa-chuc-mung.aspx" title="Hoa chúc mừng"><img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-hoa-chuc-mung.png" /></a>
                            <a href="https://hoayeuthuong.com/shop-hoa/hoa-chuc-mung.aspx" title="Hoa chúc mừng">Hoa
                                chúc mừng</a>
                        </li>
                        <li>
                            <a href="https://hoayeuthuong.com/shop-hoa/hoa-chia-buon.aspx" title="Hoa chia buồn"><img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/icon-hoa-tang-le.png" /></a>
                            <a href="https://hoayeuthuong.com/shop-hoa/hoa-chia-buon.aspx" title="Lẵng hoa chia buồn">Lẵng hoa chia buồn</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="content">
                <div className="wrapper">
                    <div className="data_items promotion">
                        <h2><a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai.aspx" title="Khuyến mãi">Khuyến mãi</a></h2>
                        <div className="item">
                            <div className="i"><a title="Only rose 15" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/8378_only-rose-15"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-khuyen-mai/8378_only-rose-15.jpg" alt="Only rose 15" title="Only rose 15" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/8378_only-rose-15.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Only rose 15" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/8378_only-rose-15">Only
                                rose 15</a><span className="vn"><em className="oprice">600.000 đ</em><em>450.000
                                    đ</em></span></div><span className="ibadge isale">Sale</span>
                        </div>
                        <div className="item">
                            <div className="i"><a title="Mùa xuân của mẹ" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/10262_mua-xuan-cua-me"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-khuyen-mai/10262_mua-xuan-cua-me.jpg" alt="Mùa xuân của mẹ" title="Mùa xuân của mẹ" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/10262_mua-xuan-cua-me.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Mùa xuân của mẹ" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/10262_mua-xuan-cua-me">Mùa
                                xuân của mẹ</a><span className="vn"><em className="oprice">700.000 đ</em><em>600.000
                                    đ</em></span></div><span className="ibadge isale">Sale</span>
                        </div>
                        <div className="item">
                            <div className="i"><a title="Chuyện yêu" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/13376_chuyen-yeu"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-khuyen-mai/13376_chuyen-yeu.jpg" alt="Chuyện yêu" title="Chuyện yêu" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/13376_chuyen-yeu.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Chuyện yêu" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/13376_chuyen-yeu">Chuyện
                                yêu</a><span className="vn"><em className="oprice">700.000 đ</em><em>600.000 đ</em></span>
                            </div><span className="ibadge isale">Sale</span><span className="ibadge inew" />
                        </div>
                        <div className="item">
                            <div className="i"><a title="Nồng say" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/12588_nong-say"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-khuyen-mai/12588_nong-say.jpg" alt="Nồng say" title="Nồng say" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/12588_nong-say.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Nồng say" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/12588_nong-say">Nồng
                                say</a><span className="vn"><em className="oprice">1.100.000 đ</em><em>950.000 đ</em></span>
                            </div><span className="ibadge isale">Sale</span><span className="ibadge inew" />
                        </div>
                        <div className="item">
                            <div className="i"><a title="Congrats mini size 6" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/13652_congrats-mini-size-6"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-khuyen-mai/13652_congrats-mini-size-6.jpg" alt="Congrats mini size 6" title="Congrats mini size 6" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/13652_congrats-mini-size-6.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Congrats mini size 6" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/13652_congrats-mini-size-6">Congrats
                                mini size 6</a><span className="vn"><em className="oprice">1.200.000 đ</em><em>1.000.000
                                    đ</em></span></div><span className="ibadge isale">Sale</span>
                        </div>
                        <div className="item">
                            <div className="i"><a title="Ngày yêu" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/8829_ngay-yeu"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-khuyen-mai/8829_ngay-yeu.jpg" alt="Ngày yêu" title="Ngày yêu" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/8829_ngay-yeu.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Ngày yêu" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/8829_ngay-yeu">Ngày
                                yêu</a><span className="vn"><em className="oprice">900.000 đ</em><em>800.000 đ</em></span>
                            </div><span className="ibadge isale">Sale</span>
                        </div>
                        <div className="item">
                            <div className="i"><a title="Cutie bear and rose 3" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/11583_cutie-bear-and-rose-3"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-khuyen-mai/11583_cutie-bear-and-rose-3.jpg" alt="Cutie bear and rose 3" title="Cutie bear and rose 3" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/11583_cutie-bear-and-rose-3.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Cutie bear and rose 3" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/11583_cutie-bear-and-rose-3">Cutie
                                bear and rose 3</a><span className="vn"><em className="oprice">1.000.000 đ</em><em>900.000
                                    đ</em></span></div><span className="ibadge isale">Sale</span><span className="ibadge inew" />
                        </div>
                        <div className="item">
                            <div className="i"><a title="Ohara" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/11040_ohara"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-khuyen-mai/11040_ohara.jpg" alt="Ohara" title="Ohara" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/11040_ohara.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Ohara" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/11040_ohara">Ohara</a><span className="vn"><em className="oprice">1.100.000 đ</em><em>950.000 đ</em></span></div><span className="ibadge isale">Sale</span><span className="ibadge inew" />
                        </div>
                        <div className="item">
                            <div className="i"><a title="Luxury vase 21" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/13311_luxury-vase-21"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-khuyen-mai/13311_luxury-vase-21.jpg" alt="Luxury vase 21" title="Luxury vase 21" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/13311_luxury-vase-21.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Luxury vase 21" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/13311_luxury-vase-21">Luxury
                                vase 21</a><span className="vn"><em className="oprice">2.000.000 đ</em><em>1.800.000
                                    đ</em></span></div><span className="ibadge isale">Sale</span><span className="ibadge inew" />
                        </div>
                        <div className="item">
                            <div className="i"><a title="Moonlight sonate" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/12987_moonlight-sonate"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-khuyen-mai/12987_moonlight-sonate.jpg" alt="Moonlight sonate" title="Moonlight sonate" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/12987_moonlight-sonate.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Moonlight sonate" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/12987_moonlight-sonate">Moonlight
                                sonate</a><span className="vn"><em className="oprice">1.500.000 đ</em><em>1.300.000
                                    đ</em></span></div><span className="ibadge isale">Sale</span><span className="ibadge inew" />
                        </div>
                    </div>
                    <div className="clearfix" />
                    <a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai.aspx" className="viewmore">Xem thêm, còn
                        61 sản phẩm</a>
                    <div className="data-top clearfix">
                        <h2 className="top-title"><a href="https://hoayeuthuong.com/giaonhanh.aspx" title="Hoa giao nhanh 60 phút">Hoa giao nhanh 60 phút</a></h2>
                        <div className="data-top-link">
                            <a href="https://hoayeuthuong.com/shop-hoa/bo-hoa-tuoi.aspx" title="Bó hoa tươi">Bó hoa
                                tươi</a>
                            <a href="https://hoayeuthuong.com/shop-hoa/hoa-tuoi-hop.aspx" title="Hộp hoa tươi">Hộp hoa
                                tươi</a>
                            <a href="https://hoayeuthuong.com/shop-hoa/hoa-chuc-mung.aspx" title="Lẵng hoa khai trương">Lẵng hoa khai trương</a>
                            <a href="https://hoayeuthuong.com/shop-hoa/hoa-khai-truong.aspx" title="Hoa khai trương">Hoa
                                khai trương</a>
                        </div>
                    </div>
                    <div className="data_items express">
                        <div className="item">
                            <div className="i"><a title="Tình đầu thơ ngây" href="https://hoayeuthuong.com/shop-hoa/bo-hoa-tuoi/13262_tinh-dau-tho-ngay"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/bo-hoa-tuoi/13262_tinh-dau-tho-ngay.jpg" alt="Tình đầu thơ ngây" title="Tình đầu thơ ngây" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/13262_tinh-dau-tho-ngay.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Tình đầu thơ ngây" href="https://hoayeuthuong.com/shop-hoa/bo-hoa-tuoi/13262_tinh-dau-tho-ngay">Tình
                                đầu thơ ngây</a><span className="vn">250.000 đ</span></div><span className="ibadge inew" />
                        </div>
                        <div className="item">
                            <div className="i"><a title="Tươi tắn" href="https://hoayeuthuong.com/shop-hoa/bo-hoa-tuoi/12587_tuoi-tan"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/bo-hoa-tuoi/12587_tuoi-tan.jpg" alt="Tươi tắn" title="Tươi tắn" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/12587_tuoi-tan.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Tươi tắn" href="https://hoayeuthuong.com/shop-hoa/bo-hoa-tuoi/12587_tuoi-tan">Tươi
                                tắn</a><span className="vn">250.000 đ</span></div><span className="ibadge inew" />
                        </div>
                        <div className="item">
                            <div className="i"><a title="All of love" href="https://hoayeuthuong.com/shop-hoa/bo-hoa-tuoi/8524_all-of-love"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/bo-hoa-tuoi/8524_all-of-love.jpg" alt="All of love" title="All of love" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/8524_all-of-love.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="All of love" href="https://hoayeuthuong.com/shop-hoa/bo-hoa-tuoi/8524_all-of-love">All of
                                love</a><span className="vn"><em className="oprice">750.000 đ</em><em>400.000 đ</em></span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="i"><a title="Cutie bear and rose 5" href="https://hoayeuthuong.com/shop-hoa/gio-hoa-tuoi/13591_cutie-bear-and-rose-5"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/gio-hoa-tuoi/13591_cutie-bear-and-rose-5.jpg" alt="Cutie bear and rose 5" title="Cutie bear and rose 5" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/13591_cutie-bear-and-rose-5.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Cutie bear and rose 5" href="https://hoayeuthuong.com/shop-hoa/gio-hoa-tuoi/13591_cutie-bear-and-rose-5">Cutie
                                bear and rose 5</a><span className="vn">600.000 đ</span></div><span className="ibadge inew" />
                        </div>
                        <div className="item">
                            <div className="i"><a title="Ngày cuối tuần 2" href="https://hoayeuthuong.com/shop-hoa/binh-hoa-tuoi/13365_ngay-cuoi-tuan-2"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/binh-hoa-tuoi/13365_ngay-cuoi-tuan-2.jpg" alt="Ngày cuối tuần 2" title="Ngày cuối tuần 2" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/13365_ngay-cuoi-tuan-2.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Ngày cuối tuần 2" href="https://hoayeuthuong.com/shop-hoa/binh-hoa-tuoi/13365_ngay-cuoi-tuan-2">Ngày
                                cuối tuần 2</a><span className="vn">700.000 đ</span></div><span className="ibadge inew" />
                        </div>
                        <div className="item">
                            <div className="i"><a title="Cutie bear and rose 4" href="https://hoayeuthuong.com/shop-hoa/gio-hoa-tuoi/13590_cutie-bear-and-rose-4"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/gio-hoa-tuoi/13590_cutie-bear-and-rose-4.jpg" alt="Cutie bear and rose 4" title="Cutie bear and rose 4" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/13590_cutie-bear-and-rose-4.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Cutie bear and rose 4" href="https://hoayeuthuong.com/shop-hoa/gio-hoa-tuoi/13590_cutie-bear-and-rose-4">Cutie
                                bear and rose 4</a><span className="vn">550.000 đ</span></div><span className="ibadge inew" />
                        </div>
                        <div className="item">
                            <div className="i"><a title="Niềm hạnh phúc" href="https://hoayeuthuong.com/shop-hoa/binh-hoa-tuoi/13366_niem-hanh-phuc"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/binh-hoa-tuoi/13366_niem-hanh-phuc.jpg" alt="Niềm hạnh phúc" title="Niềm hạnh phúc" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/13366_niem-hanh-phuc.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Niềm hạnh phúc" href="https://hoayeuthuong.com/shop-hoa/binh-hoa-tuoi/13366_niem-hanh-phuc">Niềm
                                hạnh phúc</a><span className="vn">600.000 đ</span></div><span className="ibadge inew" />
                        </div>
                        <div className="item">
                            <div className="i"><a title="Gần bên em" href="https://hoayeuthuong.com/shop-hoa/gio-hoa-tuoi/8832_gan-ben-em"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/gio-hoa-tuoi/8832_gan-ben-em.jpg" alt="Gần bên em" title="Gần bên em" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/8832_gan-ben-em.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Gần bên em" href="https://hoayeuthuong.com/shop-hoa/gio-hoa-tuoi/8832_gan-ben-em">Gần bên
                                em</a><span className="vn">650.000 đ</span></div>
                        </div>
                        <div className="item">
                            <div className="i"><a title="Sắc Hồng Xinh" href="https://hoayeuthuong.com/shop-hoa/hoa-tuoi-hop/5424_sac-hong-xinh"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-tuoi-hop/5424_sac-hong-xinh.jpg" alt="Sắc Hồng Xinh" title="Sắc Hồng Xinh" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/5424_sac-hong-xinh.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Sắc Hồng Xinh" href="https://hoayeuthuong.com/shop-hoa/hoa-tuoi-hop/5424_sac-hong-xinh">Sắc Hồng
                                Xinh</a><span className="vn">700.000 đ</span></div>
                        </div>
                        <div className="item">
                            <div className="i"><a title="Vươn cao" href="https://hoayeuthuong.com/shop-hoa/hoa-chuc-mung/11031_vuon-cao"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-chuc-mung/11031_vuon-cao.jpg" alt="Vươn cao" title="Vươn cao" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/11031_vuon-cao.jpg" style={{ display: 'inline' }} /></a></div>
                            <div className="t"><a title="Vươn cao" href="https://hoayeuthuong.com/shop-hoa/hoa-chuc-mung/11031_vuon-cao">Vươn
                                cao</a><span className="vn">1.500.000 đ</span></div><span className="ibadge inew" />
                        </div>
                    </div>
                    <div className="clearfix" />
                    <a href="https://hoayeuthuong.com/giaonhanh.aspx" className="viewmore">Xem thêm, còn 120 sản phẩm</a>
                    <div className="clearfix" />
                    <div className="clearfix" />
                    <div className="data-top mt-10 clearfix">
                        <div className="data-top clearfix">
                            <h2 className="top-title">Cây tình yêu</h2>
                            <div className="data-top-link">
                                <a href="https://hoayeuthuong.com/cay-canh/lan-ho-diep.aspx" title="Lan hồ điệp">Lan hồ
                                    điệp</a>
                                <a href="https://hoayeuthuong.com/cay-canh/cay-van-phong.aspx" title="Cây văn phòng">Cây
                                    văn phòng</a>
                                <a href="https://hoayeuthuong.com/cay-canh/cay-thuy-canh.aspx" title="Cây thủy sinh">Cây
                                    thủy sinh</a>
                                <a href="https://hoayeuthuong.com/cay-canh/cay-de-ban.aspx" title="Cây để bàn">Cây để
                                    bàn</a>
                                <a href="https://hoayeuthuong.com/cay-canh.aspx" title="Cây may mắn">Cây may mắn</a>
                            </div>
                        </div>
                        <div className="data_items">
                            <div className="item">
                                <div className="i"><a title="Make you smile" href="https://hoayeuthuong.com/cay-canh/cay-de-ban/11523_make-you-smile"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/cay-de-ban/11523_make-you-smile.jpg" alt="Make you smile" title="Make you smile" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX6+vqsEtnpAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==" /></a>
                                </div>
                                <div className="t"><a title="Make you smile" href="https://hoayeuthuong.com/cay-canh/cay-de-ban/11523_make-you-smile">Make
                                    you smile</a><span className="vn">180.000 đ</span></div>
                            </div>
                            <div className="item">
                                <div className="i"><a title="TS Ngọc Ngân" href="https://hoayeuthuong.com/cay-canh/cay-thuy-canh/10249_ts-ngoc-ngan"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/cay-thuy-canh/10249_ts-ngoc-ngan.jpg" alt="TS Ngọc Ngân" title="TS Ngọc Ngân" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX6+vqsEtnpAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==" /></a>
                                </div>
                                <div className="t"><a title="TS Ngọc Ngân" href="https://hoayeuthuong.com/cay-canh/cay-thuy-canh/10249_ts-ngoc-ngan">TS
                                    Ngọc Ngân</a><span className="vn">260.000 đ</span></div>
                            </div>
                            <div className="item">
                                <div className="i"><a title="Vạn sự bình an" href="https://hoayeuthuong.com/cay-canh/cay-de-ban/11261_van-su-binh-an"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/cay-de-ban/11261_van-su-binh-an.jpg" alt="Vạn sự bình an" title="Vạn sự bình an" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX6+vqsEtnpAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==" /></a>
                                </div>
                                <div className="t"><a title="Vạn sự bình an" href="https://hoayeuthuong.com/cay-canh/cay-de-ban/11261_van-su-binh-an">Vạn sự
                                    bình an</a><span className="vn">370.000 đ</span></div>
                            </div>
                            <div className="item">
                                <div className="i"><a title="Đại cát" href="https://hoayeuthuong.com/cay-canh/cay-de-ban/11062_dai-cat"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/cay-de-ban/11062_dai-cat.jpg" alt="Đại cát" title="Đại cát" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX6+vqsEtnpAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==" /></a>
                                </div>
                                <div className="t"><a title="Đại cát" href="https://hoayeuthuong.com/cay-canh/cay-de-ban/11062_dai-cat">Đại
                                    cát</a><span className="vn">420.000 đ</span></div>
                            </div>
                            <div className="item">
                                <div className="i"><a title="Hồng môn cát tường" href="https://hoayeuthuong.com/cay-canh/cay-de-ban/11738_hong-mon-cat-tuong"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/cay-de-ban/11738_hong-mon-cat-tuong.jpg" alt="Hồng môn cát tường" title="Hồng môn cát tường" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX6+vqsEtnpAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==" /></a>
                                </div>
                                <div className="t"><a title="Hồng môn cát tường" href="https://hoayeuthuong.com/cay-canh/cay-de-ban/11738_hong-mon-cat-tuong">Hồng
                                    môn cát tường</a><span className="vn">420.000 đ</span></div>
                            </div>
                            <div className="item">
                                <div className="i"><a title="Chậu lan vàng 3 cành 01" href="https://hoayeuthuong.com/cay-canh/lan-ho-diep/11137_chau-lan-vang-3-canh-01"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/lan-ho-diep/11137_chau-lan-vang-3-canh-01.jpg" alt="Chậu lan vàng 3 cành 01" title="Chậu lan vàng 3 cành 01" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX6+vqsEtnpAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==" /></a>
                                </div>
                                <div className="t"><a title="Chậu lan vàng 3 cành 01" href="https://hoayeuthuong.com/cay-canh/lan-ho-diep/11137_chau-lan-vang-3-canh-01">Chậu
                                    lan vàng 3 cành 01</a><span className="vn"><em className="oprice">900.000
                                        đ</em><em>825.000 đ</em></span></div><span className="ibadge isale">Sale</span><span className="ibadge inew" />
                            </div>
                            <div className="item">
                                <div className="i"><a title="Cát tường 2" href="https://hoayeuthuong.com/cay-canh/lan-ho-diep/13398_cat-tuong-2"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/lan-ho-diep/13398_cat-tuong-2.jpg" alt="Cát tường 2" title="Cát tường 2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX6+vqsEtnpAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==" /></a>
                                </div>
                                <div className="t"><a title="Cát tường 2" href="https://hoayeuthuong.com/cay-canh/lan-ho-diep/13398_cat-tuong-2">Cát tường
                                    2</a><span className="vn">2.850.000 đ</span></div>
                            </div>
                            <div className="item">
                                <div className="i"><a title="Elegance orchid" href="https://hoayeuthuong.com/cay-canh/lan-ho-diep/13397_elegance-orchid"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/lan-ho-diep/13397_elegance-orchid.jpg" alt="Elegance orchid" title="Elegance orchid" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX6+vqsEtnpAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==" /></a>
                                </div>
                                <div className="t"><a title="Elegance orchid" href="https://hoayeuthuong.com/cay-canh/lan-ho-diep/13397_elegance-orchid">Elegance
                                    orchid</a><span className="vn">2.850.000 đ</span></div><span className="ibadge inew" />
                            </div>
                            <div className="item">
                                <div className="i"><a title="Lan Hồ Điệp Mẫu 2" href="https://hoayeuthuong.com/cay-canh/lan-ho-diep/12291_lan-ho-diep-mau-2"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/lan-ho-diep/12291_lan-ho-diep-mau-2.jpg" alt="Lan Hồ Điệp Mẫu 2" title="Lan Hồ Điệp Mẫu 2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX6+vqsEtnpAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==" /></a>
                                </div>
                                <div className="t"><a title="Lan Hồ Điệp Mẫu 2" href="https://hoayeuthuong.com/cay-canh/lan-ho-diep/12291_lan-ho-diep-mau-2">Lan
                                    Hồ Điệp Mẫu 2</a><span className="vn">1.100.000 đ</span></div><span className="ibadge isale">Sale</span><span className="ibadge inew" />
                            </div>
                            <div className="item">
                                <div className="i"><a title="Chậu hồ điệp vàng 10 cành" href="https://hoayeuthuong.com/cay-canh/lan-ho-diep/12705_chau-ho-diep-vang-10-canh"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/lan-ho-diep/12705_chau-ho-diep-vang-10-canh.jpg" alt="Chậu hồ điệp vàng 10 cành" title="Chậu hồ điệp vàng 10 cành" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX6+vqsEtnpAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==" /></a>
                                </div>
                                <div className="t"><a title="Chậu hồ điệp vàng 10 cành" href="https://hoayeuthuong.com/cay-canh/lan-ho-diep/12705_chau-ho-diep-vang-10-canh">Chậu
                                    hồ điệp vàng 10 cành</a><span className="vn"><em className="oprice">3.100.000
                                        đ</em><em>2.750.000 đ</em></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="wrapper">
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