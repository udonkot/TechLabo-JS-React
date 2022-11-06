import React, { useState } from 'react'

const About: React.FC = () => {
  const [screenName, setScreenName] = useState<String>('')

  const onBlurText = (e: HTMLInputElement): void => setScreenName(e.value)

  return (
    <div className="About">
      <div>
        DXサービスユニットのメンバが作成したサービス・成果物が稼働するところ
        <br />
        随時リリース予定
      </div>

      <input type="text" onBlur={(e) => onBlurText(e.target)} />
      {screenName}
    </div>
  )
}

export default About
