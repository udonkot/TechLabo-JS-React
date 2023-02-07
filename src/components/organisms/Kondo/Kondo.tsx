import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Title } from '../../atoms/Title/Title'
import { UseEffectParent } from './HooksSample/useEffect/UseEffectParent'
import { Radar } from './chartJsSample/Radar/Radar'
import { ConpitencyCloudCheck } from './ConpitencyCloudCheck/ConpitencyCloudCheck'
// eslint-disable-next-line
// import { WebClient } from '@slack/web-api'

export const Kondo: React.FC = () => {
  const [showUseEffect, setShowUseEffect] = useState<boolean>(false)
  const [showRadar, setShowRadar] = useState<boolean>(false)
  const [showConpitencyCloud, setShowConpitencyCloud] = useState<boolean>(false)

  useEffect(() => {
    //
  }, [])

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const sendButtonClick = () => {
    // const client = new WebClient()
    // const channelId = ''
    // // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    // const sendMessage = async () => {
    //   //
    //   await client.chat.postMessage({
    //     channel: channelId,
    //     text: 'hello'
    //   })
    //   return true
    // }
    // void sendMessage()
  }

  // const clickHandler = (event: React.MouseEventHandler<HTMLButtonElement>) => {
  //   setShowUseEffect(true)
  // }

  // function clickUseEffectSampleButton():
  //   | React.MouseEventHandler<HTMLButtonElement>
  //   | undefined {

  //   // throw new Error('Function not implemented.')
  // }

  return (
    <div>
      <Title titleName="Kondo Labo" />
      <br />
      <Button onClick={() => setShowUseEffect(!showUseEffect)}>
        useEffect検証
      </Button>
      <br />
      <Button onClick={() => setShowRadar(!showRadar)}>
        レーダーチャート検証
      </Button>
      <br />
      <Button onClick={() => setShowConpitencyCloud(!showConpitencyCloud)}>
        コンピテンシークラウド検証
      </Button>
      <br />
      <Button onClick={() => sendButtonClick()}>メッセージ送信</Button>
      <br />
      {showUseEffect && <UseEffectParent />}
      {showRadar && <Radar />}
      {showConpitencyCloud && <ConpitencyCloudCheck />}
    </div>
  )
}
