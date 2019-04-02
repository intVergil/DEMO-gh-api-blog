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
      <Text my={70} font="28px Poppins" color="#555" center
            lineHeight="72px" weight={500}>
        严亦斌<br/>
        设计师 + 程序员。<br/>
        自学Web以及Unity中。<br/>
        爱好看书，玩游戏，摄影及绘画。<br/>
        现就读于日本，首都大学东京，工业设计专业。<br/>
      </Text>
    </div>
  );
}

export default connect()(AboutIndex);