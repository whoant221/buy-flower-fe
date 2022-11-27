import React from 'react'
import { Navbar } from '../../layout/header/navbar'
import { Button, Spin, Form, Input } from 'antd';
import './login.scss'
import { useMutation } from 'react-query';
import { registerUser, loginUser } from '../../api/register';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Login() {
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();
    const { mutate: register, status: statusRegister } = useMutation('register', registerUser, {
        onSuccess: (data) => {
            setLoading(false)
            successRegister()
        },
        onError: () => {
            setLoading(false)
        }
    });

    const { mutate: login } = useMutation('login', loginUser, {
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userName', data.name);
            localStorage.removeItem('cart')
            navigate('/');
        },
        onError: () => {
            setLoading(false)
            error()
        }
    });

    const error = () => {
        Modal.error({
            title: 'Đăng nhập thất bại',
            content: 'Tên đăng nhập hoặc mật khẩu sai, vui lòng đăng nhập lại!',
        });
    };

    const successRegister = () => {
        Modal.success({
            content: 'Bạn đã đăng ký thành công!',
        });
    };

    const handleRegister = (e) => {
        const dataRegister = { ...e, password_confirmation: e.password }
        register(dataRegister)
        setLoading(true)
    }

    const handleLogin = (e) => {
        login(e)
        setLoading(true)
    }
    return (
        <>
            <Spin tip="Loading..." spinning={loading} style={{ paddingTop: 700 }} >
                <div className='login_page'>
                    <div><Navbar /></div>
                    <div className='login_container'>
                        <div className='register'>
                            <h4 className='title_register'>CHƯA CÓ TÀI KHOẢN?</h4>
                            <Form
                                className='form_register'
                                onFinish={handleRegister}
                                name="register"
                                labelCol={{
                                    span: 5,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                            // onFinish={onFiish}
                            // onFinishFailed={}
                            // autoComplete="off"
                            >
                                <Form.Item
                                    label="email"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập email',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Mật khẩu "
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập mật khẩu',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    label="Tên"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập tên',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Số điện thoại"
                                    name="phone_number"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập số điện thoại',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Địa chỉ"
                                    name="address"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập địa chỉ',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{
                                        offset: 5,
                                        span: 16,
                                    }}
                                >
                                    <Button type="primary" htmlType="submit">
                                        Đăng ký
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                        <div className='login'>
                            <h4 className='title_login'>ĐÃ CÓ TÀI KHOẢN?</h4>
                            <Form
                                name="login"
                                onFinish={handleLogin}
                                labelCol={{
                                    span: 7,
                                }}
                                wrapperCol={{
                                    span: 15,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                            // onFinish={onFiish}
                            // onFinishFailed={}
                            // autoComplete="off"
                            >
                                <Form.Item
                                    label="Tên đăng nhập"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập tên đăng nhập',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Mật khẩu"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Hãy nhập mật khẩu',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{
                                        offset: 5,
                                        span: 16,
                                    }}
                                >
                                    <Button type="primary" htmlType="submit">
                                        Đăng nhập
                                    </Button>
                                </Form.Item>
                            </Form>
                            <a href='/forgot' style={{ paddingLeft: 45 }}>Quên mật khẩu ?</a>
                        </div>

                    </div>
                </div>
            </Spin>
        </>
    )
}
