import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Avatar, Menu , Dropdown} from "antd";
import { useTranslation } from 'react-i18next';
import customFont from '../../assets/fonts/W_yekan.ttf'


const NavBar = ({user}) => {
    const { t } = useTranslation();
    const menu = (
        <Menu className="menu">
            <Menu.Item>
                <a  target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    {t('dashboard.userProfile')}
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    {t('dashboard.userSetting')}
                </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    {t('dashboard.userLogout')}
                </a>
            </Menu.Item>
        </Menu>
    );
  return (
    <nav className="navbar navbar-default navbar-dark bg ">
      {/*<div className="container-fluid ">*/}
        {/*{!user && (*/}
        {/*  <React.Fragment>*/}
        {/*    <NavLink className="nav navbar-nav " to="/register">*/}
        {/*      ثبت نام*/}
        {/*    </NavLink>*/}
        {/*    <NavLink className="nav navbar-nav " to="/login">*/}
        {/*      ورود*/}
        {/*    </NavLink>*/}
        {/*  </React.Fragment>*/}
        {/*)}*/}

        {/*{user && (*/}
        {/*  <React.Fragment>*/}
        {/*    <NavLink className="nav navbar-nav " to="/profile">*/}
        {/*      {user.name}*/}
        {/*    </NavLink>*/}
        {/*    <NavLink className="nav navbar-nav " to="/logout">*/}
        {/*      خروج*/}
        {/*    </NavLink>*/}
        {/*  </React.Fragment>*/}
        {/*)}*/}

              <NavLink className="nav navbar-nav " to="#">
                  <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" href="#">
                      <Avatar size="large" icon="user" />
                      {/*<Icon type="caret-down" />*/}
                      </a>
                      </Dropdown>
              </NavLink>
              <NavLink  className="nav navbar-nav " to="#">
                  {t('dashboard.title')}
              </NavLink>
    </nav>
  );
};

export default NavBar;
