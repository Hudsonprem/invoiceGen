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
  if(value === 18)
  {
    dispatch(changeSGST(0))
    dispatch(changeCGST(18))
  } else{
    dispatch(changeCGST(value))
  }
};
  return <Select    
    style={{
      width: '100%',
    }}
    placeholder="Select CGST %"
    defaultValue={[GSTLIST[0].value]}
    onChange={handleChange}
    optionLabelProp="label"
  >
    {GSTLIST.map((role)=>{
    return <Option key={role.value } value={role.value} label={role.lable}>
              <Space>
                {role.name} [CGST]
              </Space>
           </Option>

    })}
  </Select>
};


export default TypeCGST;