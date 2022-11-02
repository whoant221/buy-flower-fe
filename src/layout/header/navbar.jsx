import '../../pages/home/style.css'
import '../../pages/home/slidebars.css'
import '../../pages/home/crumbs.css'

export function Navbar() {
    return (
        <> 
            <div id="header" className>
                <div className="wrapper clearfix">
                    <div className="logo">
                        <a href="https://hoayeuthuong.com/" title="Shop hoa yêu thương"><img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/logo-hoa-yeu-thuong.png" /></a>
                    </div>
                    <div className="search">
                        <input id="txtSearch" type="text" placeholder="Tìm sản phẩm" onkeypress="txtSearchKeyUp()" />
                        <a href="javascript:void(0);" onclick="SearchItem();" className="btnsearch">Tìm kiếm</a>
                    </div>
                    <div className="cart">
                        <a id="shopping-cart" href="javascript:void(0);"><img src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/shopping-bag.png" /><strong>Giỏ
                            hàng</strong></a>
                    </div>
                    <div className="my-account">
                        <img id="ctl00_ucHeader_imgUser" src="./Shop hoa tươi Hoayeuthuong_ Đặt hoa online, giao hoa miễn phí_files/user.png" style={{ borderWidth: '0px' }} />
                        <a id="ctl00_ucHeader_hplMyAccount" title="Tài khoản" href="https://hoayeuthuong.com/account/account.aspx?lang=vn">Tài khoản</a>
                        <div id="ctl00_ucHeader_pnlSignin" className="signin-dropdown">
                            <a href="https://hoayeuthuong.com/account/account.aspx?lang=vn" title="Sign in" className="sign-in">Sign in</a>
                            <div className="dac">
                                <strong>Bạn chưa chưa có tài khoản?</strong>
                                <a href="https://hoayeuthuong.com/account/account.aspx?lang=vn" title="Nhấn vào đây" className="register">Nhấn vào đây</a>
                            </div>
                            <a href="https://hoayeuthuong.com/account/forgot.aspx?lang=vn">Quên mật khẩu</a>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div id="top_menu">
                <div className="wrapper">
                    <ul className="header_nav">
                        <li><strong><a href="https://hoayeuthuong.com/" title="Trang chủ">Trang chủ</a></strong></li>
                        <li className="has_child">
                            <h2><a href="https://hoayeuthuong.com/dien-hoa.aspx" title="Chủ đề">Chủ đề</a></h2>
                            <div>
                                <h3><a href="https://hoayeuthuong.com/dien-hoa/hoa-sinh-nhat.aspx" title="Hoa sinh nhật">Hoa sinh nhật</a></h3>
                                <h3><a href="https://hoayeuthuong.com/dien-hoa/hoa-khai-truong.aspx" title="Hoa khai trương">Hoa khai trương</a></h3>
                                <h3><a href="https://hoayeuthuong.com/dien-hoa/hoa-chuc-mung.aspx" title="Hoa chúc mừng">Hoa chúc mừng</a></h3>
                                <h3><a href="https://hoayeuthuong.com/dien-hoa/hoa-chia-buon.aspx" title="Hoa chia buồn">Hoa chia buồn</a></h3>
                                <h3><a href="https://hoayeuthuong.com/dien-hoa/hoa-chuc-suc-khoe.aspx" title="Hoa chúc sức khỏe">Hoa chúc sức khỏe</a></h3>
                                <h3><a href="https://hoayeuthuong.com/dien-hoa/hoa-tinh-yeu.aspx" title="Hoa tình yêu">Hoa tình yêu</a></h3>
                                <h3><a href="https://hoayeuthuong.com/dien-hoa/hoa-cam-on.aspx" title="Hoa cảm ơn">Hoa
                                    cảm ơn</a></h3>
                                <h3><a href="https://hoayeuthuong.com/dien-hoa/hoa-chuc-mung-tot-nghiep.aspx" title="Hoa mừng tốt nghiệp">Hoa mừng tốt nghiệp</a></h3>
                            </div>
                        </li>
                        <li className="has_child">
                            <h2><a href="https://hoayeuthuong.com/doi-tuong.aspx" title="Đối tượng">Đối tượng</a></h2>
                            <div>
                                <h3><a href="https://hoayeuthuong.com/doi-tuong/nguoi-yeu.aspx" title="Hoa tặng người yêu">Hoa tặng người yêu</a></h3>
                                <h3><a href="https://hoayeuthuong.com/doi-tuong/ban-be.aspx" title="Hoa tặng bạn bè">Hoa
                                    tặng bạn bè</a></h3>
                                <h3><a href="https://hoayeuthuong.com/doi-tuong/vo-yeu.aspx" title="Hoa tặng vợ">Hoa
                                    tặng vợ</a></h3>
                                <h3><a href="https://hoayeuthuong.com/doi-tuong/chong-yeu.aspx" title="Hoa tặng chồng">Hoa tặng chồng</a></h3>
                                <h3><a href="https://hoayeuthuong.com/doi-tuong/me-yeu.aspx" title="Hoa tặng mẹ">Hoa
                                    tặng mẹ</a></h3>
                                <h3><a href="https://hoayeuthuong.com/doi-tuong/tre-em.aspx" title="Hoa tặng trẻ em">Hoa
                                    tặng trẻ em</a></h3>
                                <h3><a href="https://hoayeuthuong.com/doi-tuong/cho-nu.aspx" title="Hoa tặng cho nữ">Hoa
                                    tặng cho nữ</a></h3>
                                <h3><a href="https://hoayeuthuong.com/doi-tuong/cho-nam.aspx" title="Hoa tặng cho nam">Hoa tặng cho nam</a></h3>
                                <h3><a href="https://hoayeuthuong.com/doi-tuong/sep.aspx" title="Hoa tặng Sếp">Hoa tặng
                                    Sếp</a></h3>
                                <h3><a href="https://hoayeuthuong.com/doi-tuong/dong-nghiep.aspx" title="Hoa tặng đồng nghiệp">Hoa tặng đồng nghiệp</a></h3>
                            </div>
                        </li>
                        <li className="has_child">
                            <h2><a href="https://hoayeuthuong.com/shop-hoa.aspx" title="Kiểu dáng">Kiểu dáng</a></h2>
                            <div>
                                <h3><a href="https://hoayeuthuong.com/shop-hoa/bo-hoa-tuoi.aspx" title="Bó hoa tươi">Bó
                                    hoa tươi</a></h3>
                                <h3><a href="https://hoayeuthuong.com/shop-hoa/gio-hoa-tuoi.aspx" title="Giỏ hoa tươi">Giỏ hoa tươi</a></h3>
                                <h3><a href="https://hoayeuthuong.com/shop-hoa/hoa-tuoi-hop.aspx" title="Hộp hoa tươi">Hộp hoa tươi</a></h3>
                                <h3><a href="https://hoayeuthuong.com/shop-hoa/binh-hoa-tuoi.aspx" title="Bình hoa tươi">Bình hoa tươi</a></h3>
                                <h3><a href="https://hoayeuthuong.com/shop-hoa/hoa-tha-binh.aspx" title="Hoa thả bình">Hoa thả bình</a></h3>
                                <h3><a href="https://hoayeuthuong.com/shop-hoa/hoa-chuc-mung.aspx" title="Lẵng hoa khai trương">Lẵng hoa khai trương</a></h3>
                                <h3><a href="https://hoayeuthuong.com/shop-hoa/hoa-chia-buon.aspx" title="Lẵng hoa chia buồn">Lẵng hoa chia buồn</a></h3>
                            </div>
                        </li>
                        <li className="has_child">
                            <h2><a href="https://hoayeuthuong.com/hoa-tuoi.aspx" title="Hoa tươi">Hoa tươi</a></h2>
                            <div>
                                <h3><a href="https://hoayeuthuong.com/hoa-tuoi/only-rose.aspx" title="Only rose">Only
                                    rose</a></h3>
                                <h3><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-hong.aspx" title="Hoa hồng">Hoa
                                    hồng</a></h3>
                                <h3><a href="https://hoayeuthuong.com/hoa-tuoi/huong-duong.aspx" title="Hoa Hướng Dương">Hoa Hướng Dương</a></h3>
                                <h3><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-dong-tien.aspx" title="Hoa đồng tiền">Hoa đồng tiền</a></h3>
                                <h3><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-lan.aspx" title="Lan hồ điệp">Lan hồ
                                    điệp</a></h3>
                                <h3><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-cam-chuong.aspx" title="Cẩm chướng">Cẩm chướng</a></h3>
                                <h3><a href="https://hoayeuthuong.com/hoa-tuoi/cat-tuong.aspx" title="Hoa Cát Tường">Hoa
                                    Cát Tường</a></h3>
                                <h3><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-ly.aspx" title="Hoa ly">Hoa ly</a>
                                </h3>
                                <h3><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-baby.aspx" title="Baby flower">Baby
                                    flower</a></h3>
                                <h3><a href="https://hoayeuthuong.com/hoa-tuoi/hoa-cuc.aspx" title="Hoa cúc">Hoa cúc</a>
                                </h3>
                            </div>
                        </li>
                        <li className="has_child">
                            <h2><a href="https://hoayeuthuong.com/mau-hoa-tuoi.aspx" title="Màu sắc">Màu sắc</a></h2>
                            <div>
                                <h3><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-trang.aspx" title="Màu trắng">Màu trắng</a></h3>
                                <h3><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-do.aspx" title="Màu đỏ">Màu đỏ</a></h3>
                                <h3><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-hong.aspx" title="Màu hồng">Màu hồng</a></h3>
                                <h3><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-cam.aspx" title="Màu cam">Màu cam</a></h3>
                                <h3><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-tim.aspx" title="Màu tím">Màu tím</a></h3>
                                <h3><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-vang.aspx" title="Màu vàng">Màu vàng</a></h3>
                                <h3><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-mau-xanh.aspx" title="Màu xanh (xanh dương, xanh lá)">Màu xanh (xanh dương, xanh lá)</a></h3>
                                <h3><a href="https://hoayeuthuong.com/mau-hoa-tuoi/hoa-tuoi-nhieu-mau.aspx" title="Kết hợp màu">Kết hợp màu</a></h3>
                            </div>
                        </li>
                        <li className="has_child">
                            <h2><a href="https://hoayeuthuong.com/cua-hang-hoa.aspx" title="Bộ Sưu tập">Bộ Sưu tập</a>
                            </h2>
                            <div>
                                <h3><a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-cao-cap.aspx" title="Hoa Cao Cấp">Hoa Cao Cấp</a></h3>
                                <h3><a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-sinh-vien.aspx" title="Hoa sinh viên">Hoa sinh viên</a></h3>
                                <h3><a href="https://hoayeuthuong.com/cua-hang-hoa/mau-hoa-moi.aspx" title="Mẫu hoa mới">Mẫu hoa mới</a></h3>
                                <h3><a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai.aspx" title="Khuyến mãi">Khuyến mãi</a></h3>
                                <h3><a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-tuoi-20-10.aspx" title="Ngày phụ nữ Việt Nam (20/10)">Ngày phụ nữ Việt Nam (20/10)</a></h3>
                                <h3><a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-tuoi-20-11.aspx" title="Ngày nhà giáo">Ngày nhà giáo</a></h3>
                                <h3><a href="https://hoayeuthuong.com/giang-sinh.aspx" title="Giáng Sinh">Giáng Sinh</a>
                                </h3>
                                <h3><a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-tet.aspx" title="Hoa Tết">Hoa
                                    Tết</a></h3>
                                <h3><a href="https://hoayeuthuong.com/cua-hang-hoa/hoa-su-kien.aspx" title="Hoa sự kiện">Hoa sự kiện</a></h3>
                                <h3><a href="https://hoayeuthuong.com/hoa-tinh-yeu.aspx" title="Hoa tình yêu">Hoa tình
                                    yêu</a></h3>
                                <h3><a href="https://hoayeuthuong.com/ngay-phu-nu.aspx" title="Ngày Quốc tế Phụ nữ">Ngày
                                    Quốc tế Phụ nữ</a></h3>
                            </div>
                        </li>
                        <li className="has_child">
                            <h2><a href="https://hoayeuthuong.com/qua-tang.aspx" title="Quà tặng kèm">Quà tặng kèm</a>
                            </h2>
                            <div>
                                <h3><a href="https://hoayeuthuong.com/qua-tang/banh-kem-tous-les-jours.aspx" title="Bánh kem Tous les Jours">Bánh kem Tous les Jours</a></h3>
                                <h3><a href="https://hoayeuthuong.com/qua-tang/banh-kem-brodard.aspx" title="Bánh kem Brodard">Bánh kem Brodard</a></h3>
                                <h3><a href="https://hoayeuthuong.com/qua-tang/so-co-la-d-art.aspx" title="Chocolate">Chocolate</a></h3>
                                <h3><a href="https://hoayeuthuong.com/qua-tang/trai-cay.aspx" title="Trái cây">Trái
                                    cây</a></h3>
                                <h3><a href="https://hoayeuthuong.com/qua-tang/gau-bong.aspx" title="Gấu bông">Gấu
                                    bông</a></h3>
                                <h3><a href="https://hoayeuthuong.com/giang-sinh/nen-thom-va-hoa.aspx" title="Nến thơm">Nến thơm</a></h3>
                                <h3><a href="https://hoayeuthuong.com/qua-tang/hamper.aspx" title="Hamper">Hamper</a>
                                </h3>
                            </div>
                        </li>
                        <li>
                            <h2><a href="https://hoayeuthuong.com/hoa-cuoi">Hoa cưới</a></h2>
                        </li>
                        <li>
                            <h2><a href="https://hoayeuthuong.com/y-nghia-hoa.aspx" title="Ý nghĩa hoa">Ý nghĩa hoa</a>
                            </h2>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}