import * as React from 'react';
import { Layout} from 'antd';
import NavLeft from '@/component/NavLeft';
import NavHeader from '@/component/NavHeader';
const { Header, Content, Footer, Sider } = Layout;

//相当于 const Sider=Layout.Sider
interface _layoutProps {
}

const _layout: React.FunctionComponent<_layoutProps> = (props) => {
  return <Layout className="_layout">
       <Sider
        style={{height:'100vh'}}
        width={220}
        collapsedWidth={0}
        breakpoint={'lg'}
        >
          <NavLeft/>
       </Sider> 
       <Content>
          <NavHeader/>
       <Content style={{minHeight:'60vh',border:'1px solid #000',margin:'12px'}}>
          {/*根据路由加载的页面 /home /ui */}
          {props.children}    
       </Content>
      <Footer style={{textAlign:'center',color:'#ccc'}}>页脚</Footer>
       </Content>
   </Layout> ;
};

export default _layout;
