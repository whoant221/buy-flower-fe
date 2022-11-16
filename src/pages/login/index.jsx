import React from 'react'
import { Navbar } from '../../layout/header/navbar'
import { Button, Checkbox, Form, Input } from 'antd';
import './login.scss'

export function Login() {
    return (
        <>
            <div className='login_page'>
                <div><Navbar /></div>
                <div className='login_container'>
                    <div className='register'>
                        <h4 className='title_register'>CHƯA CÓ TÀI KHOẢN?</h4>
                        <Form
                            className='form_register'
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
                                label="Tên đăng nhập"
                                name="username"
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
                                name="phoneNumber"
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
                            name="basic"
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
                                name="username"
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
                    </div>
                </div>
            </div>
        </>
    )
}
