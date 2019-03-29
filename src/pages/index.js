import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { List, Spin, Icon, Row, Col } from 'antd'
////
import { Article } from 'containers/Article'
import SiderCard from 'containers/SiderCard'
import { Text } from 'components/Typo'

Spin.setDefaultIndicator(<Icon type="loading" style={{ fontSize: 24 }} spin />)

class Blog extends React.Component {
  static propTypes = {
    articles: PropTypes.array
  }
  render(){
    return (
      <div>
        <Text my={70} center font="72px Poppins" color="#555"
              lineHeight="72px" weight={500}>
          Vergil Blog
        </Text>
        <Row gutter={32}>
          <Col xs={24} sm={24} md={24} lg={14} xl={16} xxl={16}>
          <List
            loading={this.props.loading}
            dataSource={this.props.articles}
            renderItem={item => (<Article dataSource={item} key={item.id}/>
            )}
          />
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
            <SiderCard title="ARCHIVES" yearsData={this.props.yearsData}/>
            <SiderCard title="LABELS" labels={this.props.labels}/>
            <SiderCard title="ABOUT ME"/>
            <SiderCard title="FOLLOW ME"/>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { labels, yearsData, articles } = state.blog;
  return {
    labels, 
    yearsData,
    articles,
    loading: state.loading.effects["blog/fetch"]
  };
}

export default connect(mapStateToProps)(Blog);