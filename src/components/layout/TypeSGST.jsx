import { Select, Space } from 'antd';
import { GSTLIST } from "../../utils/constants/app.constant"
import {useDispatch, useSelector} from "react-redux"
import {changeCGST, changeSGST} from "../../utils/redux/slice/page.slice"


export function TypeSGST() 
{
const { Option } = Select;
let dispatch = useDispatch()
let {CGST} = useSelector((state)=>state.pageData)

const handleChange = (value) => {
  if(value === 18 || CGST === 18)
  {
    dispatch(changeSGST(0))
    dispatch(changeCGST(18))
  } else{
    dispatch(changeSGST(value))
  }
};
  return <Select
    style={{
      width: '100%',
    }}
    placeholder="Select SGST %"
    defaultValue={[GSTLIST[0].value]}
    onChange={handleChange}
    optionLabelProp="label"
  >
    {GSTLIST.map((role)=>{
    return <Option key={role.value } value={role.value} label={role.lable}>
              <Space>
                {role.name} {role.name === 18 || role.name === 5 ? "[IGST]" : "[SGST]" }
              </Space>
           </Option>

    })}
  </Select>
};


export default TypeSGST;