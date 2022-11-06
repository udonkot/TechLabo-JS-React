import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { useAppSelector } from '../../../store/store.hooks'

// type

// import { getSlackChannelListAPIData } from '../../../modules/logic/SlackAPILogic'

// Slackチャンネル一覧画面Organism
const SlackChannelListTable: React.FC = () => {
  console.log('[SlackChannelListTable] start')

  // redux データ取得
  // const dispatch = useAppDispatch()
  const tableData = useAppSelector((s) => s.SlackChannelList)

  useEffect(() => {}, [])

  if (tableData === null || tableData?.length === 0) {
    console.log('[TopPage] getSlackChannelListAPIData')
    //    void getSlackChannelListAPIData(dispatch)
  }

  /*
  const [tableData, setTableData] = useState<SlackChannelListTableType[]>([])

  const dispatch = useAppDispatch();
  useEffect(() => {
    // let tableData:SlackChannelListTableType[] = [];
    (async() => {
      console.log('[SlackChannelListTable] start useEffect')
      const data = await getSlackChannelListAPIData(dispatch);
      console.log('[SlackChannelListTable] setTableData')
      setTableData(data);
      console.log('[SlackChannelListTable] end useEffect')
    })()
  }, []);
*/

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const tbodyList = () => {
    const dataList: JSX.Element[] = []
    tableData
      .filter((data) => {
        return !data.isArchived
      })
      .sort((n1, n2) => n1.name.charCodeAt(0) - n2.name.charCodeAt(0))
      .forEach((data, idx) => {
        // dataListを取得
        dataList.push(
          <tr key={idx}>
            <td>{idx}</td>
            <td>{data.name}</td>
            <td>{data.id}</td>
            <td>{data.numOfMembers}</td>
            <td>{data.isArchived ? 'アーカイブ中' : '公開中'}</td>
          </tr>
        )
      })
    return dataList
  }

  console.log('[SlackChannelListTable] end')
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>チャンネル名</th>
            <th>チャンネルID</th>
            <th>メンバ数</th>
            <th>アーカイブ有無</th>
          </tr>
        </thead>
        <tbody>{tbodyList()}</tbody>
      </Table>
    </>
  )
}

export default SlackChannelListTable
