// obj from third-parties library
import React, { Component} from "react";
import { ToastContainer } from "react-toastify";
// components from our application
import SiderMenu from "./components/sidebar/sidebar";
import NavBar from "./components/navbar/navbar"
import auth from "./services/authService";
import { Layout,Card} from "antd";
import Routes from "./config/routeLowLevel"
//css modules
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import logo from "./assets/logo/logo2.png";
import { Divider} from "antd";

const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
  state = { collapsed: false };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });

  }

// back #1e1e2f  #1e1e4f ---card  #525f7f  side  001529
  render() {
    return (
      <React.Fragment >
        <ToastContainer />
        <Layout style={{background: '#1e1e2f', minHeight: "100vh", textAlign: "right"}}>
            <Layout style={{background: '#1e1e2f' , margin:"0px 220px 10px 10px"}}>
                <Header >
                    <NavBar/>
                </Header>
                <Content >
                    <Routes/>
                </Content>
                <Footer style={{background: "#1e1e2f",color:"#FFF",fontSize:"14px",textAlign:"center"}}>تمامی حقوق این سایت محفوظ می باشد</Footer>
            </Layout>
            <Sider  style={{background:"#1e1e2f",position:"fixed",width:200, overflow: 'auto', height: '100vh', right: 0 }}>
                {/*collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}*/}
                <Header style={{textAlign: "center" ,margin:"10px 0px 10px 0px"}}>
                    <img src={logo} width="60" height="60" alt="logo" />
                </Header>
                <Content style={{minHeight: "84vh",margin:"20px 0px 10px 0px",padding:"30px 0px 0px 0px"}}>
                    <SiderMenu />
                </Content>
            </Sider>
        </Layout>
      </React.Fragment>
    );
  }
}
export default App;
