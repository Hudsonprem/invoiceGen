import { Button, Form, Input, Select } from 'antd';
import {useDispatch, useSelector} from "react-redux"
import {addInvoiceInfo} from "../../../utils/redux/slice/page.slice"

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


export function InvoiceInfo({current,next,prev}) {
  const [form] = Form.useForm();

  let dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(addInvoiceInfo(values))
    next()
  };

  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
        Invoice_No: 86,
        Invoice_Dated: "19-jan-2023",
        Delivery_note:"SUPPLIERS PARK",
        Suppilers_ref:"SE-86",
        Mode_payment:"",
        Other_References:"",
        Buyers_Order_No:"6500032898",
        Buyer_Dated: "18-jan-2023",
        Despatch_Document_No: "",
        Delivery_Note_Date: "",
        Despatch_through: "",
        Destination: "PLANT CODE : 1712",
        Terms_of_Delivery: "Terms_of_Delivery",
        

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
        name="Invoice_No"
        label="Invoice No"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Invoice_Dated"
        label="Dated"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Delivery_note"
        label="Delivery note"       
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Mode_payment"
        label="Mode / Terms of payment"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Suppilers_ref"
        label="Suppiler's Ref."
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Other_References"
        label="Other Reference(s)"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Buyers_Order_No"
        label="Buyer's Order No."
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Buyer_Dated"
        label="Buyer Dated"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Despatch_Document_No"
        label="Despatch Document No"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Delivery_Note_Date"
        label="Delivery Note Date"       
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Despatch_through"
        label="Despatch through"
        
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Destination"
        label="Destination"       
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="Terms_of_Delivery"
        label="Terms of Delivery"
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
export default InvoiceInfo;