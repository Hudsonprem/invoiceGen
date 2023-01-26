import { Steps, theme } from 'antd';
import { useState } from 'react';
import CompanyInfo  from './companyInfo/index';
import BuyerInfo  from './buyerInfo/index';
import InvoiceInfo  from './invoiceInfo/index';
import ProductInfo  from './productInfo/index';
import ExtraInfo  from './extraInfo/index';
import {STEPS} from "../../utils/constants/app.constant"


export function StepComponent()
{
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const items = STEPS.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };


  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>
             <div className='flex justify-center my-5 w-full'>
                <CompanyInfo next={next} prev={prev} current={STEPS[current].sno === 1}/>
                <BuyerInfo   next={next} prev={prev} current={STEPS[current].sno === 2}/>
                <InvoiceInfo next={next} prev={prev} current={STEPS[current].sno === 3}/>
                <ProductInfo next={next} prev={prev} current={STEPS[current].sno === 4}/>
                <ExtraInfo   next={next} prev={prev} current={STEPS[current].sno === 5}/>
            </div>
      </div>
    </>
  );
};
export default StepComponent;


// {current > 0 && (
//   <Button
//     style={{
//       margin: '0 8px',
//     }}
//     onClick={() => prev()}
//   >
//     Previous
//   </Button>
// )}
//  {current < STEPS.length - 1 && (
//   <Button type="primary" onClick={() => next()}>
//     Next
//   </Button>
// )}