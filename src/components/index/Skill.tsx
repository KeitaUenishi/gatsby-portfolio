import React from 'react'

import JSLogo from "../../images/icon-tech/javascript.svg"
import ReactLogo from "../../images/icon-tech/react.svg"
import CSharpLogo from "../../images/icon-tech/c--4.svg"
import TSLogo from "../../images/icon-tech/typescript.svg"

const Skill = () => {
  return (
    <div>
      <h2>Skills</h2>
      <div>
        <div>
          <img src={JSLogo} alt="javascript"/>
          <div>JavaScript</div>
          <div>ｶﾝｾﾞﾝﾆﾘｶｲｼﾀ…</div>
        </div>
        <div>
          <img src={ReactLogo} alt="react"/>
          <div>React</div>
          <div>ｶﾝｾﾞﾝﾆﾘｶｲｼﾀ…</div>
        </div>
        <div>
          <img src={CSharpLogo} alt="c_harp"/>
          <div>C#</div>
          <div>ｶﾝｾﾞﾝﾆﾘｶｲｼﾀ…</div>
        </div>
        <div>
          <img src={TSLogo} alt="next"/>
          <span>TypeScript / ｶﾝｾﾞﾝﾆﾘｶｲｼﾀ…</span>
        </div>
      </div>
    </div>
  )
}

export default Skill