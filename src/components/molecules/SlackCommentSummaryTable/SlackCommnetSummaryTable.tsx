import React, { useEffect } from 'react';
import DataTable from '../../atoms/Table/DataTable';
import {UserCommentListType} from './UserCommentList.type'
import {SlackChannelListTableType} from '../../molecules//SlackChannelListTable/SlackChannelListTable.type'

import axios from 'axios'

interface IProps {
//  channelId:String
  tableData:UserCommentListType[]
}

const SlackCommentSummaryTable: React.FC<IProps> = (props) => {
 

    /*
    const [data, setData] = React.useState<UserCommentListType[]>([]);
    const getComment = async () => {
      const response = await axios.get('https://dxservice-javafuncsample.azurewebsites.net/api/slackcomments?name=C2F0GCZ43');
      const userCommentList:UserCommentListType[] = response.data.result;
      setData(userCommentList)
    }
    getComment();
*/
/*
    React.useEffect(() => {
        const getComment = async () => {
            const response = await axios.get('https://dxservice-javafuncsample.azurewebsites.net/api/slackcomments?name=' + props.channelId);
            const userCommentList:UserCommentListType[] = response.data.result;
            setData(userCommentList)
        }
        getComment();
    },[])
    
    alert('show table')
*/

    return (
      <DataTable tbodyList={props.tableData} />
    )
};

export default SlackCommentSummaryTable;
