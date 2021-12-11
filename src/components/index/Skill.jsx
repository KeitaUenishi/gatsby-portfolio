import React from 'react'
import * as style from "../../styles/index.module.scss"
import JSLogo from "../../images/javascript.svg"
import ReactLogo from "../../images/react.svg"
import CSharpLogo from "../../images/c--4.svg"
import TSLogo from "../../images/typescript.svg"

const Skill = () => {
  return (
    <div className={style.skills}>
      <h2>Skills</h2>
      <div className={style.skillsContainer}>
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
          <img src={CSharpLogo} alt="charp"/>
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