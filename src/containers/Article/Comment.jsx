import React from 'react'
import { Comment, Avatar, Form, Button, List, Input, Tooltip } from 'antd';
import moment from 'moment';

const TextArea = Input.TextArea;

const Editor = ({
  onChange, onSubmit, submitting, value,
}) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} placeholder="comming soon" disabled/>
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class ArticleComment extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  }

  componentDidMount(){
    this.setState({comments:this.props.comments})
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            body: this.state.value,
            datetime: moment().fromNow(),
            user:{
              login: 'intVergil',
              avatar_url: 'https://avatars1.githubusercontent.com/u/19487327?s=460&v=4',
            }
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <div>
        {comments.length > 0 && 
          <List
            dataSource={comments}
            header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
            itemLayout="horizontal"
            renderItem={item => 
              <Comment
                // actions = {[<span>Reply to</span>]}
                author = {item.user.login}
                avatar = {item.user.avatar_url}
                content = {item.body}
                datetime = {(
                  <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(1, 'days').fromNow()}</span>
                  </Tooltip>
                )} />}
          />
        }
        <Comment
          avatar={(
            <Avatar
              src="https://avatars1.githubusercontent.com/u/19487327?s=460&v=4"
              alt="intVergil"
            />
          )}
          content={(
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          )}
        />
      </div>
    );
  }
}

export default ArticleComment