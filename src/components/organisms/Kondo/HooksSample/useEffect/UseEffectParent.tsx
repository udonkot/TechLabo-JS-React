import React, { useEffect, useState } from 'react'
import { UseEffectChild } from './UseEffectChild'

export interface CheckBoxType {
  id: string
  value: string
  checked: boolean
  onChange: () => void
}

const CheckBox = (param: CheckBoxType): JSX.Element => {
  return (
    <>
      <input
        type="checkbox"
        id={param.id}
        value={param.value}
        checked={param.checked}
        onChange={param.onChange}
      />
    </>
  )
}

export const UseEffectParent: React.FC = () => {
  const [showSub, setShowSub] = useState<boolean>(false)
  const [childButtonClick, setChildButtonClick] = useState<boolean>(false)
  const [useEffectCnt, setUseEffectCnt] = useState<number>(0)

  useEffect(() => {
    setUseEffectCnt(useEffectCnt + 1)
  }, [childButtonClick])

  const childButtonOnClick = (): void => {
    setChildButtonClick(!childButtonClick)
  }

  return (
    <div>
      親のuseEffect実行回数：{useEffectCnt}
      <br />
      childButtonClick：{childButtonClick.toString()}
      <br />
      {
        <CheckBox
          id="1"
          value="sub"
          checked={showSub}
          onChange={() => setShowSub(!showSub)}
        />
      }
      サブメニュー表示
      <br />
      {showSub && <UseEffectChild parentFunc={childButtonOnClick} />}
    </div>
  )
}
