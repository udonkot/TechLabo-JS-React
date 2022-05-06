import React, { useEffect } from 'react';
import {OptionListType} from '../../atoms/SelectBox/OptionList.type'
import SelectBox from '../../atoms/SelectBox/SelectBox'

import axios from 'axios'

interface IProps {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    data: OptionListType[]
}

const SlackChannelSelectBox: React.FC<IProps> = (props) => {
/*
    const [data, setData] = React.useState<OptionListType[]>([]);
    React.useEffect(() => {
        const getChannel = async () => {
            const response = await axios.get('https://dxservice-javafuncsample.azurewebsites.net/api/slackchannels?');
            const channelList:OptionListType[] = response.data.result;
            setData(channelList)
        }
        getChannel();
    },[])
*/  

    return (
      <SelectBox optionList={props.data} onChange={props.onChange}/>
    )
};

export default SlackChannelSelectBox;
