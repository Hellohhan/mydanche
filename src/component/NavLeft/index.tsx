import React,{useEffect} from 'react';
import './style.less'
import { Menu } from 'antd';
import menuList ,{menuItem}from './menuConfig';
import { NavLink } from 'umi';
const { Item ,SubMenu } = Menu;

interface NavLeftProps {
}

const NavLeft: React.FunctionComponent<NavLeftProps> = (props) => {
    useEffect(()=>{
        console.log(menuList);
    },[])
    //函数组件的componentDidMount
    let renderMenu=(data:Array<menuItem>)=>{
          return data.map((item,index)=>{
            if(item.children){
              //有 子菜单
              return <SubMenu title={item.title} key={item.key}>
                {renderMenu(item.children)}
              </SubMenu>
            }else{
              return<Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
              </Item>
            }
          })
    }
  return <div className="NavLeft">
    <div className="Icon">
      <img src="./asset/logo-ant.svg" alt="" />
      <h1>TS单车</h1>
    </div>
      <Menu theme='dark'>
        {renderMenu(menuList)}
      </Menu>
  </div>;
};

export default NavLeft;
