import React from 'react'
import { connect } from 'dva'
import { Timeline, Tag,  Row, Col, Card, Spin } from 'antd';
import moment from 'moment';
import Link from 'umi/link'

import { Text } from 'components/Typo'
import SiderCard from 'containers/SiderCard'

function renderTimeLine (year, articles){
  const data = articles.filter( d => moment(d.updated_at).format('YYYY') === year )
  return (
    <div key={year}>
      <Text size={32}>{year}</Text>
      <Timeline>
        {
          data.map( item => 
          <Timeline.Item key={item.id}>
            {moment(item.updated_at).format('YYYY-MM-DD')}
            <div>
              <Link to={`/blog/${item.number}`} style={{fontSize:28}}> {item.title} </Link>
              {item.labels.map(d=> <Tag color="#343434" style={{marginBottom:6}} key={d.id}>{d.name}</Tag>)}
            </div>
          </Timeline.Item>
        )}
      </Timeline>
    </div>
  )
}

const AboutIndex = (props) => {
  return (
    <div>
      <Text my={70} center font="72px Poppins" color="#555"
            lineHeight="72px" weight={500}>
        Archives
      </Text>
      <Row gutter={32}>
        <Col xs={24} sm={24} md={24} lg={14} xl={16} xxl={16}>
          <Card>
            <Spin spinning={props.loading}>
              {props.yearsData.map( y => renderTimeLine(y.year, props.articles))}
            </Spin>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
          <SiderCard title="ARCHIVES" yearsData={props.yearsData}/>
        </Col>
      </Row>
    </div>
  );
}

function mapStateToProps(state) {
  const { articles, yearsData } = state.blog;
  return {
    articles,
    yearsData,
    loading: state.loading.effects["blog/fetch"]
  };
}

export default connect(mapStateToProps)(AboutIndex);