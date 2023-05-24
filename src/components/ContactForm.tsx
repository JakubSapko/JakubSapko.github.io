import { useState } from "react";

import { Button, Form, Input, notification } from "antd";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onFinish = (values: any) => {
        setIsLoading(true);
        emailjs
            .send(
                "service_20jetyu",
                "template_2jedrx1",
                {
                    from_name: values.name,
                    message: values.message,
                    reply_to: values.email,
                },
                "I9xt3rOxAqdhMavY8"
            )
            .then(
                (result) => {
                    setIsLoading(false);
                    notification.success({
                        message: `Success!`,
                        description: `Thank you for contacting me! I will get back to you ASAP!`,
                        placement: "bottomRight",
                    });
                },
                (error) => {
                    setIsLoading(false);
                    notification.error({
                        message: `Error!`,
                        description: `Something went wrong when sending email :( )`,
                        placement: "bottomRight",
                    });
                }
            );
    };

    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: `Error!`,
            description: `Please fill in all the fields!`,
            placement: "bottomRight",
        });
    };

    return (
        <div className="contact-form-container">
            <h1 className="contact-form-title">Get in touch with me!</h1>
            <Form
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 20 }}
                style={{
                    width: "60%",
                    marginLeft: "5.25rem",
                    marginRight: "auto",
                }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                size="large"
            >
                <Form.Item
                    label="Your Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Please input your name!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: "email",
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Your message"
                    name="message"
                    rules={[
                        {
                            required: true,
                            message:
                                "Hey, share your thoughts before sending me an email!",
                        },
                    ]}
                >
                    <Input.TextArea autoSize={{ minRows: 3, maxRows: 9 }} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 20 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={isLoading}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
