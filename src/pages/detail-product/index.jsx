import { Footer } from '../../layout/footer'
import { Navbar } from '../../layout/header/navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { addComment, addShopingCart, getCart, getComment, getDetailFlower } from '../../api/detail_product'
import { formatCurrency } from '../../helper'
import { Button, Form, Input, notification, Rate } from 'antd';
import { getFlower } from '../../api/home'
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';

export function DetailProduct() {
    let navigate = useNavigate();
    const { slug } = useParams()
    const [infoFlower, setInfoFlower] = useState();
    const [sameFlower, setSameFlower] = useState([]);
    const [cart, setCart] = useState([])
    const [listComment, setListComment] = useState([])
    const token = localStorage.getItem('token')
    const [form] = Form.useForm();

    const customIcons = {
        1: <FrownOutlined />,
        2: <FrownOutlined />,
        3: <MehOutlined />,
        4: <SmileOutlined />,
        5: <SmileOutlined />,
    };

    useEffect(() => {
        async function fetchData() {
            setInfoFlower((await getDetailFlower(slug)))
            setCart((await (await getCart(token)).data.shopping_carts
            ))
            setListComment((await (await getComment({ flower_id: slug }, token)).data.comments))
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
                    .then(reps => notification.success({ message: "Th??m th??nh c??ng !" }))
                    .catch(err => notification.error({ message: "C?? g?? ???? ??ang l???i !" }))
            } else {
                addShopingCart({ flower_id: infoFlower.id, amount: 1 }, token)
                    .then(reps => notification.success({ message: "Th??m th??nh c??ng !" }))
                    .catch(err => notification.error({ message: "C?? g?? ???? ??ang l???i !" }))
            }
        }

    }

    const handleSubmitComment = async (e) => {
        const dataComment = {
            "flower_id": slug,
            "rank": e.rate,
            "content": e.comment
        }
        await addComment(dataComment, token).catch(err => notification.error({ message: "B???n ch??a mua s???n ph???m n??y" }))

        setListComment((await (await getComment({ flower_id: slug }, token)).data.comments))
        form.resetFields()
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
                                        <div style={{
                                            width: '292px',
                                            marginRight: '0px',
                                            float: 'left',
                                            display: 'block'
                                        }}>
                                            <img src={infoFlower?.images[0]} data-imagezoom="true"
                                                className="img-responsive" width={300} height={360} />
                                        </div>
                                    </div>
                                    <ol className="flex-control-nav flex-control-thumbs" />

                                </div>

                                <div className="clearfix" />
                            </div>
                            <div className="r_item">
                                <h2>{infoFlower?.name}</h2>
                                <div className="single-price"><span
                                    className="old-price">{formatCurrency(infoFlower?.original_price)} VND</span><span
                                        className="price">{formatCurrency(infoFlower?.sale_price)} VND</span></div>
                                <p className="vat">Gi?? ???? bao g???m 8% VAT</p>
                                <div className="pd_summary">{infoFlower?.description}</div>
                                <h4>S???n ph???m bao g???m:</h4>
                                <ul className="material">
                                    {
                                        infoFlower?.buds?.map(e => {
                                            return <li>{e.name} : {e.count}</li>
                                        })
                                    }

                                </ul>
                                <p><i>S???n ph???m th???c nh???n c?? th??? kh??c v???i h??nh ?????i di???n tr??n website (?????c ??i???m th??? c??ng
                                    v??
                                    t??nh ch???t t??? nhi??n c???a h??ng n??ng nghi???p)</i></p>

                                <div className="area_order">
                                    <div className="add-cart hplAddCart" onClick={handleClickAddCart}>Th??m v??o gi???</div>
                                    <div className="buy-now hplBuyNow">
                                        <div onClick={handleBuyNow} style={{ color: "#FFFFF" }}>Mua ngay</div>
                                    </div>
                                </div>
                                <div className="offer">
                                    <h4>??U ????I ?????C BI???T</h4>
                                    <ul className="benefit">
                                        <li>T???ng banner ho???c thi???p (tr??? gi?? 20.000?? - 50.000??) mi???n ph??</li>
                                        <li>Gi???m ti???p 3% cho ????n h??ng B???n t???o ONLINE l???n th??? 2, 5% cho ????n h??ng B???n t???o
                                            ONLINE l???n th??? 6 v?? 10% cho ????n h??ng B???n t???o ONLINE l???n th??? 12.
                                        </li>
                                        <li>Giao mi???n ph?? trong n???i th??nh 63/63 t???nh</li>
                                        <li>Giao g???p trong v??ng 2 gi???</li>
                                        <li>Cam k???t 100% ho??n l???i ti???n n???u B???n kh??ng h??i l??ng</li>
                                        <li>Cam k???t hoa t????i tr??n 3 ng??y</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix" />
                        <div className="clearfix" />
                        <h2 className=' margin_top_15 ' style={{
                            textAlign: "left",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#bd2026",
                            textTransform: "uppercase"
                        }}>Nh???ng m???u hoa t????i c??ng lo???i kh??c</h2>
                        <div className="data_items the_same_item_flower">
                            {
                                sameFlower.length > 0 ? sameFlower.map(e => {
                                    return <a className="item" href={`/product/${e.id}`}>
                                        <div className="i"><img className="lazy" src={e.images[0]}
                                            style={{ display: 'inline' }} /></div>
                                        <div className="t">{e.name}
                                            <span className="vn"><em
                                                className="oprice">{formatCurrency(e.original_price)} ??</em><em>{formatCurrency(e.sale_price) || formatCurrency(e.original_price)} ??</em></span>
                                        </div>
                                    </a>
                                }) : <></>
                            }
                            {/* <div className="item">
                             <div className="i"><a title="Only rose 22" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/12984_only-rose-22"><img className="lazy" data-original="/hinh-hoa-tuoi/thumb/hoa-khuyen-mai/12984_only-rose-22.jpg" alt="Only rose 22" title="Only rose 22" src="./Khuy???n m??i N???ng say c???a h??ng hoa t????i_files/12984_only-rose-22.jpg" style={{ display: 'inline' }} /></a></div>
                             <div className="t"><a title="Only rose 22" href="https://hoayeuthuong.com/cua-hang-hoa/hoa-khuyen-mai/12984_only-rose-22">Only
                             rose 22</a><span className="vn"><em className="oprice">600.000 ??</em><em>450.000
                             ??</em></span></div><span className="ibadge isale">Sale</span>
                             </div> */}

                        </div>
                        <div className="clearfix" />
                        <div className="clearfix" />
                        <div className="clearfix" />
                        <a href={`/product?category=${infoFlower?.category_ids[0]}`} className="viewmore">Xem th??m</a>
                    </div>

                    <div className="clearfix" />
                    <div className="clearfix" />
                    <div style={{ marginLeft: 65 }}>
                        <h2 className=' margin_top_15 ' style={{
                            textAlign: "left",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "#bd2026",
                            textTransform: "uppercase"
                        }}>????nh gi??</h2>
                        {
                            listComment.length > 0 ? listComment.map(e => {
                                return <div style={{ float: "left" }} className={"tab_comment"}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                                            style={{ paddingRight: 10, width: 50 }}>
                                        </img>
                                        <div>
                                            <div style={{ fontWeight: 600, color: "#bd2026" }}>
                                                {e.name} &nbsp;  <Rate character={({ index }) => customIcons[index + 1]} value={e.rank} />
                                            </div>
                                            <div>{e.content}</div>
                                        </div>
                                    </div>
                                </div>
                            }) : <></>
                        }
                        {console.log(listComment)}
                        <Form
                            name="comment"
                            onFinish={handleSubmitComment}
                            // onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            style={{ float: "left", width: "100%" }}
                            layout="inline"
                            form={form}
                        >
                            <Form.Item name="rate" label="Rate" rules={[{ required: true, message: 'Ch???n m???c ????? y??u th??ch' }]}>
                                <Rate character={({ index }) => customIcons[index + 1]} />
                            </Form.Item>
                            <Form.Item
                                name="comment"
                                rules={[{ required: true, message: 'H??y nh???p tr?????c khi b??nh lu???n' }]}
                                style={{ width: "89%", height: 48 }}
                            >
                                <Input placeholder="Nh???p b??nh lu???n" style={{ height: 50 }} />
                            </Form.Item>
                            <Form.Item style={{ paddingTop: 10 }}>
                                <Button type="primary" htmlType="submit">
                                    B??nh lu???n
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <Footer />
                </div>

            </div>
        </div>
    </>
}
