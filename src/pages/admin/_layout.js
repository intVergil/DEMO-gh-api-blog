import { Layout, Menu, Icon, Avatar } from 'antd';
import router from 'umi/router';
////

const { Content, Sider } = Layout;

const SiderStyle = {
    boxShadow: "2px 0 6px rgba(0,21,41,.35)",
}
const MenuItemStyle = {
    height:60,
    margin:"16px auto"
}
const IconStyle = {
    position: "absolute",
    fontSize: 21,
    lineHeight: "56px",
    right: 0,
    left: 0
}
const LogoutIconStyle = {
    position: "absolute",
    fontSize: 21,
    lineHeight: "56px",
    right: 0,
    left: 0,
    color:"#fff",
    bottom:0
}
const ContentStyle = {
    padding: '24px',
    background: "#2D2D31"
}

function Logout (){
    sessionStorage.removeItem('admin_token')
    router.replace("/")
}

function AdminIndex(props) {
    return (
        <Layout style={{height:"100%"}}>
            <Sider collapsed={true} style={SiderStyle}>
                <div style={{textAlign:"center",padding:12, background: "#3d3d3d"}}>
                    <Avatar icon="user" size={56}/>
                </div>
                <Menu
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1" style={MenuItemStyle}>
                        <Icon type="dashboard" style={IconStyle}/>
                        <span>dashboard</span>
                    </Menu.Item>
                    <Menu.Item key="2" style={MenuItemStyle}>
                        <Icon type="form" style={IconStyle}/>
                        <span>form</span>
                    </Menu.Item>
                    <Menu.Item key="3" style={MenuItemStyle}>
                        <Icon type="ordered-list" style={IconStyle}/>
                        <span>list</span>
                    </Menu.Item>
                    <Menu.Item key="4" style={MenuItemStyle}>
                        <Icon type="team" style={IconStyle}/>
                        <span>commit</span>
                    </Menu.Item>
                    <Menu.Item key="5" style={MenuItemStyle}>
                        <Icon type="setting" style={IconStyle}/>
                        <span>setting</span>
                    </Menu.Item>
                </Menu>
                <Icon type="export" style={LogoutIconStyle} onClick={Logout}/>
            </Sider>
            <Content style={ContentStyle}>
                {props.children}
            </Content>
        </Layout>
    )
    
}

export default AdminIndex;
