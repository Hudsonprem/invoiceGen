import { Button,message, Form, Input, Select } from 'antd';
import {useDispatch, useSelector} from "react-redux"
import {addExtraInfo} from "../../../utils/redux/slice/page.slice"
import Router from 'next/router';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


export function ExtraInfo({current,next,prev}) {
  const [form] = Form.useForm();
  let dispatch = useDispatch()
  let PageData = useSelector((state)=>state.pageData)
 
  const onFinish = (values) => {
    dispatch(addExtraInfo(values))
    message.success('Will redirect to Invoice page')

    setTimeout(() => {
      Router.push("/page")
    }, 1000);
  };
  
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
        H_Company_Pan: 'AJHPD5000H',
        Number_words:"Six Hundred"
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
        name="H_Company_Pan"
        label="Company Pan"
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
          Generate PDF
        </Button>
        <Button onClick={() => prev()}>
          Previous
        </Button>
      </div>
    </Form>
  );
};
export default ExtraInfo;