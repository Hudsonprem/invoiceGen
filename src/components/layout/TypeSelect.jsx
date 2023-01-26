import { Select, Space } from 'antd';
import {PAGEROLE} from "../../utils/constants/app.constant"
import {useDispatch, useSelector} from "react-redux"
import {addRole} from "../../utils/redux/slice/page.slice"


export function TypeSelect() 
{
const { Option } = Select;
let dispatch = useDispatch()
// let roleList = useSelector((state)=>state.pageData.roles)

const handleChange = (value) => {
  if(value.length !== 0)
  {
    dispatch(addRole(value))
  }
};
  return <Select
    mode="multiple"
    style={{
      width: '100%',
    }}
    placeholder="Select one Role"
    defaultValue={[PAGEROLE[0].value]}
    onChange={handleChange}
    optionLabelProp="label"
  >
    {PAGEROLE.map((role)=>{
    return <Option key={role.value } value={role.value} label={role.lable}>
              <Space>
                {role.name}
              </Space>
           </Option>

    })}
  </Select>
};


export default TypeSelect;