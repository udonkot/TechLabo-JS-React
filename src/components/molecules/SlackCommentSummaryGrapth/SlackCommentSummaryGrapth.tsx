import React from 'react';
import GrapthBar from '../../atoms/Grapth/GrapthBar'

interface IProps {
  dataList: number[],
  labelList: string[],
}

const SlackCommentSummaryGrapth: React.FC<IProps> = (props) => {
  return (
    <GrapthBar dataList={props.dataList} labelList={props.labelList} labelName='コメント数' title='Slackチャンネルコメント' />
  )
}

export default SlackCommentSummaryGrapth;
