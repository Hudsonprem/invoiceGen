import { Select, Space } from 'antd';
import { INVOICETYPELIST } from "../../utils/constants/app.constant"
import {useDispatch, useSelector} from "react-redux"
import {changeInvoiceType} from "../../utils/redux/slice/page.slice"


export function TypeInvoice() 
{
const { Option } = Select;
let dispatch = useDispatch()


const handleChange = (value) => {
  dispatch(changeInvoiceType(value))
};

  return <Select
    style={{
      width: '100%',
    }}
    placeholder="Select Invoice Type"
    defaultValue={INVOICETYPELIST[0].value}
    onChange={handleChange}
    optionLabelProp="label"
  >
    {INVOICETYPELIST.map((role)=>{
    return <Option key={role.value } value={role.value} label={role.lable}>
              <Space>
                {role.name}
              </Space>
           </Option>

    })}
  </Select>
};


export default TypeInvoice;