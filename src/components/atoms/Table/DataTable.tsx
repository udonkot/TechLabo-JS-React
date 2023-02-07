import React from 'react'
import Table from 'react-bootstrap/Table'
import { UserCommentListType } from '../../molecules/SlackCommentSummaryTable/UserCommentList.type'

interface IProps {
  theadList?: String[]
  tbodyList: UserCommentListType[]
}

const DataTable: React.FC<IProps> = (props) => {
  /*
  const theadList = () => {
    const dataList: JSX.Element[] = [];
    props.theadList.map((header) => {
      dataList.push(<th>{header}</th>)
    })
    alert(dataList)
    return dataList
  }
  */

  const dataList: JSX.Element[] = []

  const tbodyList = () => {
    props.tbodyList.forEach((data, idx) => {
      // dataListを取得
      dataList.push(
        <tr>
          <td>{idx}</td>
          <td>{data.user}</td>
          <td>{data.value}</td>
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
          <th>Users</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>{tbodyList()}</tbody>
    </Table>
  )
}

export default DataTable
