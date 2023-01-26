import { Button, Form, Input, Select } from 'antd';
import {useDispatch, useSelector} from "react-redux"
import {addBuyerProfile} from "../../../utils/redux/slice/page.slice"

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


export function BuyerInfo({current,next,prev}) {
  const [form] = Form.useForm();
  let dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(addBuyerProfile(values))
    next()
  };

  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
        B_Company_Name: 'JBM AUTO LIMITED - ORAGADAM',
        B_Address_1:"Plot No: RNS-1 RENAULT NISSAN",
        B_Address_2:"SUPPLIERS PARK",
        B_Address_3:"ORAGADAM-603109",
        B_GSTIN_UIN:"33AAACJ9630N1ZB",
        B_State_Name:"Tamil Nadu",
        B_Code:33
        

    });
  };
  return (
    <Form
       
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
        className={`w-[60vw] px-5 ${current ? "" : "hidden"}`}
    >
      <Form.Item
        name="B_Company_Name"
        label="Company Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="B_Address_1"
        label="Address line 1"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="B_Address_2"
        label="Address line 2"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="B_Address_3"
        label="Address line 3"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="B_GSTIN_UIN"
        label="GSTIN/UIN"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="B_State_Name"
        label="State Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="B_Code"
        label="code"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
     
      <div className='flex w-full ml-10 gap-3'>
        <button type='button'  onClick={onReset}>
          Reset
        </button>
        <button type='button'  onClick={onFill}>
          Fill Default
        </button>
      </div>

      <div className='flex justify-between my-2'>
        <Button type="primary" htmlType="submit">
          Submit and Next
        </Button>
        <Button onClick={() => prev()}>
          Previous
        </Button>
      </div>

    </Form>
  );
};
export default BuyerInfo;