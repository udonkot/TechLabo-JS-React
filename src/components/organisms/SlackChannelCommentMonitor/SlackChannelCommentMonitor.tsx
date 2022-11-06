import React from 'react'
import Table from 'react-bootstrap/Table'
import GrapthBar from '../../atoms/Grapth/GrapthBar'
import { OptionListType } from '../../atoms/SelectBox/OptionList.type'
import SelectBox from '../../atoms/SelectBox/SelectBox'
import { Title } from '../../atoms/Title/Title'
import axios from 'axios'
import { SlackChannelCommentResponseType } from './SlackChannelCommentMonitor.type'
import { useAppDispatch, useAppSelector } from '../../../store/store.hooks'
import { getSlackChannelListAPIData } from '../../../modules/logic/SlackAPILogic'

/*
const DUMMY_DATALIST = {
  result: [
    {
      type: 'ALL',
      yyyymm: '全期間',
      comments: [
        {
          user: 'kondo',
          value: 100,
        },
        {
          user: 'yamane',
          value: 90,
        },
        {
          user: 'okayasu',
          value: 50,
        },
      ]
    },
    {
      type: 'month',
      yyyymm: '2022/07',
      comments: [
        {
          user: 'kondo',
          value: 50,
        },
        {
          user: 'yamane',
          value: 20,
        },
        {
          user: 'hazeyama',
          value: 4,
        },
      ]
    },
    {
      type: 'month1bf',
      yyyymm: '2022/06',
      comments: [
        {
          user: 'kondo',
          value: 30,
        },
        {
          user: 'yamane',
          value: 10,
        },
      ]
    },
  ]
}

const SELECT_LIST = [
  {
    name:'unit-dxサービス_周知連絡用',
    id: 'C03408J995K'
  },
]
*/
const RADIO_LIST = [
  {
    name: '今月',
    id: 'month'
  },
  {
    name: '先月',
    id: 'month1bf'
  },
  {
    name: '2ヶ月前',
    id: 'month2bf'
  },
  {
    name: '3ヶ月前',
    id: 'month3bf'
  }
]

export interface CommentDataType {
  labelList: string[]
  dataList: number[]
  labelTitle: string
}

export const SlackChannelCommentMonitor: React.FC = (props) => {
  // useState
  const [commentData, setCommentData] = React.useState<CommentDataType>({
    dataList: [],
    labelList: [],
    labelTitle: ''
  })

  const [responseData, setResponseData] =
    React.useState<SlackChannelCommentResponseType>()

  const [radio, setRadio] = React.useState<string>('')
  const [status, setStatus] = React.useState<string>('未取得')
  const [showRadio, isShowRadio] = React.useState<boolean>(false)

  // useEffect
  React.useEffect(() => {}, [])

  // redux データ取得
  // redux データ取得
  const dispatch = useAppDispatch()
  const tableData = useAppSelector((s) => s.SlackChannelList)
  if (tableData === null || tableData?.length === 0) {
    console.log('[TopPage] getSlackChannelListAPIData')
    void getSlackChannelListAPIData(dispatch)
  }

  // event
  // プルダウンリスト選択
  const changeSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const getComment = async (): Promise<void> => {
      setStatus('取得中...')
      const response = await axios.get(
        'https://dxservice-javafuncsample.azurewebsites.net/api/slackcomments?name=' +
          e.target.value
      )
      setResponseData(response.data.result)
      setStatus('取得完了')
      isShowRadio(true)
      /*
            let wrkCommentDataType: CommentDataType = {
              dataList: [],
              labelList: [],
              labelTitle: '',
            };

            result.map((item) => {
              // window.alert(item.type + ' ' + e.target.value);
              if (item.type === e.target.value) {
                wrkCommentDataType.labelTitle = item.yyyymm.concat('のslackコメント数')
                item.comments.forEach((comment) => {
                  wrkCommentDataType.dataList.push(comment.value);
                  wrkCommentDataType.labelList.push(comment.user);
                })
              }
              setCommentData(wrkCommentDataType);
              return;
            })
      */
    }
    void getComment()

    // setCommentData(DUMMY_DATALIST.result.);
  }
  // ラジオボタン選択
  const changeRadio = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // radioをstateにセット
    setRadio(e.target.value)

    const wrkCommentDataType: CommentDataType = {
      dataList: [],
      labelList: [],
      labelTitle: ''
    }

    responseData?.forEach((item, index) => {
      // window.alert(item.type + ' ' + e.target.value);
      if (item.type === e.target.value) {
        wrkCommentDataType.labelTitle = item.yyyymm.concat('のslackコメント数')
        item.comments?.forEach((comment) => {
          wrkCommentDataType.dataList.push(comment.value)
          wrkCommentDataType.labelList.push(comment.user)
        })
      }
      setCommentData(wrkCommentDataType)
    })
  }

  // プルダウンリスト生成
  const optionList = (): OptionListType[] => {
    const wrkOptionList: OptionListType[] = []

    tableData.forEach((item) => {
      if (!item.isArchived) {
        const option: OptionListType = { id: item.id, name: item.name }
        wrkOptionList.push(option)
      }
    })
    return wrkOptionList
  }

  // 件数テーブル表示データ生成
  const tbodyList: JSX.Element[] = []
  const createTbody = (): JSX.Element[] => {
    commentData.labelList.forEach((item, idx) => {
      tbodyList.push(
        <tr>
          <td>{idx}</td>
          <td>{item}</td>
          <td>{commentData.dataList[idx]}</td>
        </tr>
      )
    })
    return tbodyList
  }

  return (
    <>
      <Title titleName="Slackチャンネルコメント数一覧" />
      {/*  */}
      <label>ステータス：{status}</label>
      <br />
      <SelectBox optionList={optionList()} onChange={changeSelect} />
      <br />
      {/*  */}
      {showRadio &&
        RADIO_LIST.map((item, index) => (
          <label key={index}>
            <input
              type="radio"
              name={item.name}
              value={item.id}
              checked={item.id === radio}
              onChange={changeRadio}
            />
            {item.name}
          </label>
        ))}

      {status === '取得完了' && (
        <div>
          <GrapthBar
            dataList={commentData?.dataList}
            labelList={commentData?.labelList}
            title={commentData.labelTitle}
            labelName="slackComment数"
          />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>ユーザ</th>
                <th>コメント数</th>
              </tr>
            </thead>
            <tbody>{createTbody()}</tbody>
          </Table>
        </div>
      )}
    </>
  )
}
