import { Select, Space } from 'antd';
import { GSTLIST} from "../../utils/constants/app.constant"
import {useDispatch, useSelector} from "react-redux"
import {changeCGST, changeSGST} from "../../utils/redux/slice/page.slice"


export function TypeCGST() 
{
const { Option } = Select;
let dispatch = useDispatch()
// let roleList = useSelector((state)=>state.pageData.roles)

const handleChange = (value) => {
  switch (value) {
    case 2.5:
      dispatch(changeSGST(value))
      dispatch(changeCGST(value))
      break;
    case 5:
      dispatch(changeSGST(0))
      dispatch(changeCGST(5))
      break;
    case 9:
      dispatch(changeSGST(value))
      dispatch(changeCGST(value))
      break;
    case 18:
      dispatch(changeSGST(0))
      dispatch(changeCGST(18))
      break;
  
    default:
      dispatch(changeSGST(value))
      dispatch(changeCGST(value))
      break;
  }
};
  return <Select    
    style={{
      width: '100%',
    }}
    placeholder="Select GST %"
    defaultValue={[GSTLIST[0].value]}
    onChange={handleChange}
    optionLabelProp="label"
  >
    {GSTLIST.map((role)=>{
    return <Option key={role.value } value={role.value} label={role.lable}>
              <Space>
               {role.name} {role.name === 18 || role.name === 5 ? "[IGST]" : "[SGST + CGST]" }
              </Space>
           </Option>

    })}
  </Select>
};


export default TypeCGST;