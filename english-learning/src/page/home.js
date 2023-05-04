import React from "react";
import { Button, Form, Input, Radio } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>English form</h1>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ fontSize: "150%" }}
      >
        <Form.Item
          label="Word"
          name="word"
          rules={[
            {
              required: true,
              message: "Please input the word!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="type"
          valuePropName="checked"
          label="Type"
          rules={[
            {
              required: true,
              message: "Please select the word type!",
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button value="easy">Easy</Radio.Button>
            <Radio.Button value="mid">Mid</Radio.Button>
            <Radio.Button value="hard">Hard</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Sentence"
          name="sentence"
          rules={[
            {
              required: true,
              message: "Please input the sentence",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="My sentence"
          name="mySentence"
          rules={[
            {
              required: true,
              message: "Please create  sentence",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
