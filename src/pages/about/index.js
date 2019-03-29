import React from 'react'
import { connect } from 'dva'

import { Text } from 'components/Typo'

const AboutIndex = (props) => {
  return (
    <div>
      <Text my={70} center font="72px Poppins" color="#555"
            lineHeight="72px" weight={500}>
        About Me
      </Text>
      <Text my={70} font="28px Poppins" color="#555"
            lineHeight="72px" weight={500}>
        我的名字是严亦斌。英文名Vergil。出生于1992年。<br/>
        现就读于日本的首都大学东京。<br/>
        专业是工业设计，专业的涉猎相当广泛，大致分为产品和媒体。<br/>
        我偏向于媒体，大致包括平面设计，软件设计，交互设计，映像设计等等。<br/>
        大学研究GPU高速渲染，大学院在做3D面部动画的相关研究。<br/>
        业余时间我在自学Web，以及Unity。<br/>
        我喜欢看书，上网，看电影，玩游戏，爱好摄影及绘画。
      </Text>
    </div>
  );
}

export default connect()(AboutIndex);