require("prismjs/themes/prism-solarizedlight.css")
import React from "react"
import { RecoilRoot } from "recoil"

type Props = {
  element: React.ReactNode
  props: any
}

const wrapPageElement:React.FC<Props> = ({ element, props }) => {
  return <RecoilRoot {...props}>{element}</RecoilRoot>
}

export { wrapPageElement } 