import React from 'react';
import {SlackChannelListTableType} from './SlackChannelListTable.type'
import Table from 'react-bootstrap/Table';

interface IProps {
  tableData:SlackChannelListTableType[]
}

const SlackChannelListTable: React.FC<IProps> = (props) => {
  const dataList: JSX.Element[] = [];
  const tbodyList = () => { 
    props.tableData.forEach((data,idx) => {
      // dataListを取得
      dataList.push(
        <tr key={idx}>
          <td>{idx}</td>
          <td>{data.name}</td>
          <td>{data.id}</td>
          <td>{data.numOfMembers}</td>
          <td>{data.isArchived ? 'アーカイブ中': '公開中'}</td>
        </tr>
      )
  })
  return dataList
}

return (
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
    <tbody>
      {tbodyList()}
    </tbody>
  </Table>
)

};

export default SlackChannelListTable;
