import {Story} from '@storybook/react';
import React from 'react';
import SlackChannelSelectBox from './SlackChannelSelectBox';
import {OptionListType} from '../../atoms/SelectBox/OptionList.type'

export default {
    component: SlackChannelSelectBox,
    title: 'molecules/SlackChannelSelectBox'
};

type TemplateType = {
    data: OptionListType[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Template: Story<TemplateType> = (args) => <SlackChannelSelectBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>  {
    },
    data: [
      {
        id: '1001',
        name: 'hoge'
      },
      {
        id: '1002',
        name: 'piyo'
      },
    ]
};
