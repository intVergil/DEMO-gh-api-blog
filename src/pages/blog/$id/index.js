import React, { Component } from 'react'
import { connect } from 'dva'
import { Spin } from 'antd'
////
import { FullArticle } from 'containers/Article'
import { Text } from 'components/Typo'

class index extends Component {
  render() {
    const { article, comments, loading } =this.props
    return (
      <Spin spinning={loading}>
        <Text my={70} center font="72px Poppins" color="#555"
              lineHeight="72px" weight={500}>
          Article
        </Text>
        {article && <FullArticle dataSource={article} comments={comments}/>}
      </Spin>
    );
  }
}

function mapStateToProps(state) {
  const { article, comments } = state.article;
  return {
    article, 
    comments,
    loading: state.loading.effects["article/fetch_by_id"]
  };
}

export default connect(mapStateToProps)(index);

