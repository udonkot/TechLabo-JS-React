import React from 'react';
import SlackChannelSelectBox from '../..//molecules/SlackChannelSelectBox/SlackChannelSelectBox';
import SlackCommentSummaryTable from '../../molecules/SlackCommentSummaryTable/SlackCommnetSummaryTable';
import axios from 'axios'
import {UserCommentListType} from '../../molecules/SlackCommentSummaryTable/UserCommentList.type'
import SlackCommentSummaryGrapth from '../../molecules/SlackCommentSummaryGrapth/SlackCommentSummaryGrapth'
import {OptionListType} from '../../atoms/SelectBox/OptionList.type'
import { useSelector, useDispatch } from 'react-redux';
import { increase } from '../../../redux/counterSlice';


interface IProps {
  selectList: OptionListType[]
}



const SlackChannelCommentMonitor: React.FC = () => {
//  const [channelId, setChannelId] = React.useState<String>('')
  const [data, setData] = React.useState<UserCommentListType[]>([]);
  const [grapthData, setGrapthData] = React.useState<number[]>([]);
  const [grapthLabel, setGrapthLabel] = React.useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>)  =>  {
//    setChannelId(e.target.value)

    const getComment = async () => {
        const response = await axios.get('https://dxservice-javafuncsample.azurewebsites.net/api/slackcomments?name=' + e.target.value);
        const userCommentList:UserCommentListType[] = response.data.result;

        const newGrapthData: number[] = []
        const newGrapthLabel: string[] = []


        userCommentList.forEach((userData) => {
          newGrapthLabel.push(userData.user)
          newGrapthData.push(userData.value)
        })

        setData(userCommentList)
        setGrapthLabel(newGrapthLabel)
        setGrapthData(newGrapthData)
    }
    getComment();
  }

  const count = useSelector((hoge: any) => 
    hoge.counter.count
  );
  const dispatch = useDispatch();

  return (
    <div className="SlackChannelCommentMonitor">
      {count}
      <button onClick={() => dispatch(increase())}>Up</button>
{/*
      <SlackChannelSelectBox data={props.selectList} onChange={onChange}/>
  */}
      <SlackCommentSummaryTable tableData={data}/>
      <SlackCommentSummaryGrapth dataList={grapthData} labelList={grapthLabel} />
    </div>
  );
}

export default SlackChannelCommentMonitor;
