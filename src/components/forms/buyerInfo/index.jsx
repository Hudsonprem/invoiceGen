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
  const onFill1 = () => {
    form.setFieldsValue({
        B_Company_Name: 'M/S. Instant Procurement Services Pvt Ltd,',
        B_Address_1:"opp.Electronic Sodan, S - Block,",
        B_Address_2:"Plot No : S-79 / B, MIDC Bhosari,",
        B_Address_3:"Unit No-3 B Wing, Main Telco Road,",
        B_Address_4:"Pimpri Chinchwad, Pune - 411026.",
        B_GSTIN_UIN:"27AADC19794DIZ6",
        B_State_Name:"Maharashtra",
        B_Code:27
    });
  };
  const onFill2 = () => {
    form.setFieldsValue({
        B_Company_Name: 'NEEL Industries Pvt Ltd,',
        B_Address_1:"Kuthambakkam Village,",
        B_Address_2:"Poonamalle Taulk,",
        B_Address_3:"Thiruvallur District - 600124.",
        B_Address_4:"",
        B_GSTIN_UIN:"33AABCN1516C1Z8",
        B_State_Name:"Tamil Nadu",
        B_Code:33
    });
  };
  const onFill3 = () => {
    form.setFieldsValue({
        B_Company_Name: 'JBM AUTO LIMITED',
        B_Address_1:"Ford Suppliers,Port, No.l , S.P Koil Street,",
        B_Address_2:"Chengalpettu Taluk,",
        B_Address_3:"Kanchipuram.",
        B_Address_4:"",
        B_GSTIN_UIN:"33AABCN1516CIZ8",
        B_State_Name:"Tamil Nadu",
        B_Code:33
    });
  };
  const onFill4 = () => {
    form.setFieldsValue({
        B_Company_Name: 'Alayams Autoteck Private Limited',
        B_Address_1:"No 1/464 Mount Poonamalle High Road",
        B_Address_2:"Iyappanthangal",
        B_Address_3:"Ch-600056",
        B_Address_4:"",
        B_GSTIN_UIN:"33AANCA0497P1Z4",
        B_State_Name:"Tamil Nadu",
        B_Code:33
    });
  };
  const onFill5 = () => {
      form.setFieldsValue({
          B_Company_Name: 'JBM AUTO LIMITED - ORAGADAM',
          B_Address_1:"Plot No: RNS-1 RENAULT NISSAN",
          B_Address_2:"SUPPLIERS PARK",
          B_Address_3:"ORAGADAM-603109",
          B_Address_4:"",
          B_GSTIN_UIN:"33AAACJ9630N1ZB",
          B_State_Name:"Tamil Nadu",
          B_Code:33
      });
  };

  const onFill6 = () => {
    form.setFieldsValue({
        B_Company_Name: 'M/S Safeboy safety solutions',
        B_Address_1:"No : 298, Dr. Nanjappa Road",
        B_Address_2:"Coimbatore - 641018, TN - India",
        B_Address_3:"",
        B_Address_4:"",
        B_GSTIN_UIN:"33ADTFS5538H1ZL",
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
      <div className='flex flex-wrap w-full  gap-3'>
        <button type='button'  onClick={onReset}>
          Reset
        </button>
        <button type='button'  onClick={onFill1}>
            M/S. Instant Procurement
        </button>
        <button type='button'  onClick={onFill2}>
            NEEL Industries
        </button>
        <button type='button'  onClick={onFill3}>
            JBM
        </button>
        <button type='button'  onClick={onFill5}>
            JBM - ORAGADAM
        </button>
        <button type='button'  onClick={onFill4}>
            Alayams Autoteck
        </button>
        <button type='button'  onClick={onFill6}>
            Safeboy
        </button>
      </div>

      <br />      
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
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="B_Address_4"
        label="Address line 4"
        rules={[
          {
            required: false,
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