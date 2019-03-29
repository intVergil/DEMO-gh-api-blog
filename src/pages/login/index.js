import React from 'react'
import Link from 'umi/link';
import { Form, Icon, Input, Button, Row } from 'antd';
import { connect } from 'dva';
////
import { Text } from 'components/Typo'

const boxStyle = {
    width:320,
    padding:"24px",
    boxShadow: "14px 14px 16px -5px rgba(0,0,0,0.5)",
    backgroundColor:"#fff"
}

class NormalLoginForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            this.props.dispatch({
                type: "loginToAdmin/admin_login",
                payload: values,
              });
        }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <Row type="flex" justify="center" align="middle" 
            style={{height: "100%",flexDirection: "column", background:"#595958"}}>
            <div style={boxStyle}>
                <Text h4 color="#555">Sign in to Dashboard</Text>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Item>
                        {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                        <Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <Form.Item style={{textAlign:"center"}}>
                        <Button type="primary" htmlType="submit" block>
                            Sign in
                        </Button>
                    </Form.Item>
                </Form>
                <Link to="/">Back</Link>
            </div>
        </Row>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'login_admin' })(NormalLoginForm);

export default connect()(WrappedNormalLoginForm);