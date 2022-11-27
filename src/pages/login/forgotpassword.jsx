import React from 'react'
import { Navbar } from '../../layout/header/navbar'
import { Button, notification, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { forgotPassword } from '../../api/home';
import { useMutation } from 'react-query';

export function Forgotpassword() {
  const [email, setEmail] = useState();

  const { mutate: forgotPasswordUser } = useMutation('forgotPass', forgotPassword, {
    onSuccess: (data) => {
      notification.success({message: "Vui lòng kiểm tra email để lấy lại mật khẩu !"})
    },
    onError: () => {
      notification.error({message: "Email không tồn tại !"})
    }
});

  useEffect(() => {
    if(email)
    forgotPasswordUser(email)
  }, [email])
  
  const handleForgot = (e) => {
    setEmail(e)
  }
  return (
    <div>
        <Navbar/>
        <Form
                            name="login"
                            onFinish={handleForgot}
                           style={{padding: 200, width: "auto"}}
                            initialValues={{
                                remember: true,
                            }}
                            labelCol={{
                                span: 7,
                            }}
                            wrapperCol={{
                                span: 15,
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
                                wrapperCol={{
                                    offset: 5,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Lấy lại mật khẩu
                                </Button>
                            </Form.Item>
                        </Form>
    </div>
  )
}
