import { Layout } from 'antd';
////
import BesicHeader from './Header/Besic';

const { Header, Content, Footer } = Layout;

const layoutStyle = {
  backgroundImage: "url(https://gw.alicdn.com/tfs/TB1xzbUumBYBeNjy0FeXXbnmFXa-125-121.png)",
  minHeight:"100%"
}

function BasicLayout(props) {
  if (props.location.pathname.startsWith("/login")){
    return props.children
  }else if (props.location.pathname.startsWith("/admin")){
    return props.children
  }else return (
    <Layout style={layoutStyle}>
      <link rel="icon" type="image/x-icon" href="<%= context.publicPath %>favicon.png" />
      <Header className="Header">
        <BesicHeader location={props.location}/>
      </Header>
      <Content className="Content">
        {props.children}
      </Content>
      <Footer className="Footer" style={{background:"none"}}>
        Vergil Pages ©2019 Created by Vergil
      </Footer>
    </Layout>
  );
}

export default BasicLayout;