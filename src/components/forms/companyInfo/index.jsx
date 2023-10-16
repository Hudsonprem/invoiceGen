import { Button, Form, Input, Select } from 'antd';
import {useDispatch, useSelector} from "react-redux"
import {addCompanyProfile} from "../../../utils/redux/slice/page.slice"

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


export function CompanyInfo({current,next}) {
  const [form] = Form.useForm();
  let dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(addCompanyProfile(values))
    next()
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
        H_Company_Name: 'STARWIN ENTERPRISES',
        H_Address_1:"No.8 Pilliyar Koil Street",
        H_Address_2:"Deveraj Nagar, Anakaputhur",
        H_Address_3:"Chennai-600070",
        H_GSTIN_UIN:"33AJHPD5000H1ZX",
        H_State_Name:"Tamil Nadu",
        H_Code:33
    });
  };
  return (
    <>
    <Form
       
       {...layout}
       form={form}
       name="control-hooks"
       onFinish={onFinish}
       className={`w-[60vw] px-5 ${current ? "" : "hidden"}`}
       >
      <Form.Item
        name="H_Company_Name"
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
        name="H_Address_1"
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
        name="H_Address_2"
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
        name="H_Address_3"
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
        name="H_GSTIN_UIN"
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
        name="H_State_Name"
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
        name="H_Code"
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
          Starwin
        </button>
      </div>


      <div className='flex justify-between my-2'>
        <Button type="primary" htmlType="submit">
          Submit and Next
        </Button> 
      </div>
     
    </Form>
        </>
  );
};
export default CompanyInfo;