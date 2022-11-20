require("prismjs/themes/prism-solarizedlight.css")
import React from "react"
import { RecoilRoot } from "recoil"

export const wrapPageElement = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>
}
