import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Title } from '../../atoms/Title/Title'
import { UseEffectParent } from './HooksSample/useEffect/UseEffectParent'
import { Radar } from './chartJsSample/Radar/Radar'
import { ConpitencyCloudCheck } from './ConpitencyCloudCheck/ConpitencyCloudCheck'

export const Kondo: React.FC = () => {
  const [showUseEffect, setShowUseEffect] = useState<boolean>(false)
  const [showRadar, setShowRadar] = useState<boolean>(false)
  const [showConpitencyCloud, setShowConpitencyCloud] = useState<boolean>(false)

  useEffect(() => {
    //
  }, [])

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
      {showUseEffect && <UseEffectParent />}
      {showRadar && <Radar />}
      {showConpitencyCloud && <ConpitencyCloudCheck />}
    </div>
  )
}
