import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const Register = (props) => {
    return (

        <div className='loginpage'>

            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    minWidth: 600,
                    display: "flex",
                    justifyContent: 'start',
                    flexDirection: "column",
                    alignItems: "start",
                    width: "400px"
                }}
                initialValues={{
                    remember: true,
                }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h1>REGISTER</h1>
                <label>Username</label>
                <Form.Item
                    style={{ width: "600px" }}
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <label>Pasword</label>
                <Form.Item
                    style={{ width: "600px" }}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    style={{ width: "600px" }}
                    name="remember"
                    valuePropName="checked"

                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    style={{ width: "600px", textAlign: "center" }}

                >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;