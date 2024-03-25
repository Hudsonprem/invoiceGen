import { Breadcrumb, Layout, Menu, theme } from 'antd';
import TypeSelect from './TypeSelect';
import TypeInvoice from './TypeInvoice';
import TypeGST from './TypeGST';
const { Header, Content, Footer } = Layout;

export function LayoutComponent({children})
{
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
      className=''
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          height:"50%", 
          width: '100%',
        }}
      >
<div className='flex flex-wrap justify-center items-center w-full md:justify-between'>

        <button
        type='button'
        className=' bg-blue-300 my-3 h-10 flex justify-center  items-center px-4 cursor-pointer rounded-md'
        >
          Invoice Gen
          </button>
          <div className='w-80 '>
          <TypeInvoice />
          </div>
          <div className='w-80 '>
          <TypeSelect />
          </div>
          <div className='w-60'>
          <TypeGST />
          </div>
 
          </div>
      </Header>

      
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: "80vh",
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>


      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Invoice Gen ©2023 Created by Hudson
      </Footer>
    </Layout>
  );
};