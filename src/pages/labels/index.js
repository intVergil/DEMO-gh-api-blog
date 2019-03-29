import React from 'react'
import { connect } from 'dva'
import { Tag,  Row, Col, Card, Spin } from 'antd';
import moment from 'moment';
import { List, Icon } from 'antd';

import SiderCard from 'containers/SiderCard'
import { Text } from 'components/Typo'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const ArticleList = ({ articles, name }) => (
  <List split={false}
    header={<Tag color="#343434" style={{marginBottom:6}} >{name}</Tag>}
    itemLayout="vertical"
    dataSource={articles}
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
      >
        <List.Item.Meta
          title={<a href={`/blog/${item.number}`}>{item.title}</a>}
          description={moment(item.updated_at).format('YYYY-MM-DD')}
        />
        {/* {item.body} */}
      </List.Item>
    )}
  />
)

const AboutIndex = (props) => {
  console.log(props.articles)
  return (
    <Spin spinning={props.loading}>
      <Text my={70} center font="72px Poppins" color="#555"
            lineHeight="72px" weight={500}>
        Labels
      </Text>
      <Row gutter={32}>
        <Col xs={24} sm={24} md={24} lg={14} xl={16} xxl={16}>
          <Card>
            <List 
              split={false}
              itemLayout="vertical"
              dataSource={props.labels}
              renderItem={item => (
                <List.Item key={item.id}>
                  <ArticleList name={item.name}
                    articles={props.articles.filter( d => d.labels.find(l=>l.id === item.id))}/>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
          <SiderCard title="LABELS" labels={props.labels}/>
        </Col>
      </Row>
    </Spin>
  );
}

function mapStateToProps(state) {
  const { articles, labels } = state.blog;
  return {
    articles,
    labels,
    loading: state.loading.effects["blog/fetch_labels"]
  };
}

export default connect(mapStateToProps)(AboutIndex);