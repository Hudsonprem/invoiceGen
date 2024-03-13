import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space,message, AutoComplete } from 'antd';
import {useDispatch, useSelector} from "react-redux"
import {addProductInfo} from "../../../utils/redux/slice/page.slice"
import isEmpty from 'lodash/isEmpty'

export function ProductInfo({current,next,prev}){
  
  let dispatch = useDispatch()
 
  const GoodsOptions = [
    {
      value: '18" DENIM ARM SLEEVES (ITEMCODE : 6011835)',
    },
    {
      value: 'Cotton Apron (ITEMCODE : 6000863)',
    },
    {
      value: "14'' Cotton Gloves with Lining",
    },
    {
      value: '18" Leather Leg guard',
    },
    {
      value: 'Cotton Apron (Blue)',
    },
    {
      value: 'Cotton waste',
    },
  ];
  
  const codeOptions = [
    {
      value: '5202',
    },
    {
      value: '6116',
    },
    {
      value: '42032910',
    },
    {
      value: '52094200',
    }
  ];

  const unitOptions = [
    {
      value: 'pair',
    },
    {
      value: 'pcs',
    }
  ];

  const onFinish = (values) => {
    console.log(values);
    if(isEmpty(values.products))
    {
      message.warning('Please add products')
    }else{
      dispatch(addProductInfo(values))
      next()
    }
  };

   return (
  <Form
    name="dynamic_form_nest_item"
    onFinish={onFinish}
    style={{
      maxWidth: 800,
    }}
    className={`w-[60vw] px-5 ${current ? "" : "hidden"}`}
    autoComplete="off"
  >
    <Form.List name="products" >
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              className='flex flex-col '              
              style={{
                marginBottom: 8,
              }}
              align="baseline"
            >
              <Form.Item
                {...restField}
                name={[name, 'Description_of_Goods']} 
                rules={[
                  {
                    required: true,
                    message: 'Missing Description of Goods',
                  },
                ]}
              >
                <AutoComplete 
                placeholder="Description of Goods"  
                style={{ width: "50vw" }}  
                filterOption={(inputValue, option) =>
                  option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                options={GoodsOptions}/>
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'HSN_SAC']}                
                rules={[
                  {                    
                    required: true,
                    message: 'Missing HSN / SAC',
                  },
                ]}
              >
                <AutoComplete 
                  placeholder="HSN / SAC"  
                  style={{ width: "50vw" }}  
                  filterOption={(inputValue, option) =>
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
                  options={codeOptions}/>
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, 'Quantity']}
                rules={[
                  {
                    required: true,
                    message: 'Missing Quantity',
                  },
                ]}
              >
                <Input type='Number' placeholder="Quantity" />
              </Form.Item>

              <Form.Item
                {...restField}
                name={[name, 'Quantity_Unit']}
                rules={[
                  {
                    required: true,
                    message: 'Missing  Unit',
                  },
                ]}
              >
                <AutoComplete 
                  placeholder="Unit" 
                  style={{ width: 150 }}  
                  filterOption={(inputValue, option) =>
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
                  options={unitOptions}/>

              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'Rate']}
                rules={[
                  {
                    required: true,
                    message: 'Missing Rate',
                  },
                ]}
              >
                <Input type='Number' placeholder="Rate" />
              </Form.Item>

              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add({
              Description_of_Goods:'18" DENIM ARM SLEEVES',
              HSN_SAC:"52094200",
              Quantity_Unit:"Pair",
              Rate:68.25
            })} block icon={<PlusOutlined />}>
              Add Product
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>

    <div className='flex justify-between my-2'>
        <Button type="primary" htmlType="submit">
          Submit and Next
        </Button>
        <Button onClick={() => prev()}>
          Previous
        </Button>
      </div>
  </Form>
)
            }
export default ProductInfo;