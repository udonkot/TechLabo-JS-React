import React, { useEffect, useState } from 'react'

interface Props {
  parentFunc: () => void
}

export const UseEffectChild: React.FC<Props> = (props) => {
  const [cnt, setCnt] = useState<number>(0)
  const [execCnt, setExecCnt] = useState<number>(0)

  // ownボタンクリックイベント
  const onClick = (): void => {
    // useEffectが発火するようstate更新
    setCnt(cnt + 1)
  }

  useEffect(() => {
    // useEffectの実行回数をカウント
    setExecCnt(execCnt + 1)
  }, [cnt])

  return (
    <div>
      サブメニュー
      <br />
      子のuseEffectの実行回数:{execCnt}
      <br />
      <button name="parent" onClick={props.parentFunc}>
        親のuseEffect実行
      </button>
      <br />
      <button name="own" onClick={() => onClick()}>
        子のuseEffect実行
      </button>
    </div>
  )
}
