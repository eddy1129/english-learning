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
        minHeight: "70vh",
        flexDirection: "column",
      }}
    >
      <h1>Learning form</h1>
      <Form
        wrapperCol={{
          offset: 2,
          span: 16,
        }}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ fontWeight: "800" }}
      >
        <Form.Item
          label={<b style={{fontSize:15}}>Word</b>}
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
        wrapperCol={{
          offset: 3,
          span: 50,
        }}
          name="wordtype"
          valuePropName="value"
          label = {<b style={{fontSize:15}}>Type</b>}
          rules={[
            {
              required: true,
              message: "Please select the word type!",
            },
          ]}
        >
          <Radio.Group>
            <Radio.Button value="verb">Verb</Radio.Button>
            <Radio.Button value="noun">Noun</Radio.Button>
            <Radio.Button value="adj">Adjective</Radio.Button>
            <Radio.Button value="adverb">Adverb</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 1,
            span: 16,
          }}
          label={<b style={{fontSize:15}}>Sentence</b>}
          name="sentence"
          rules={[
            {
              required: true,
              message: "Please input the sentence",
            },
          ]}
        >
          <Input.TextArea cols={50} rows={3} />
        </Form.Item>

        <Form.Item
        wrapperCol={{
          offset: 0,
          span: 16,
        }}
          label={<b style={{fontSize:15}}>My Sentence</b>}
          name="mySentence"
          rules={[
            {
              required: true,
              message: "Please create  sentence",
            },
          ]}
        >
          <Input.TextArea cols={50} rows={3} />
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
