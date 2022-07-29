import {Story} from '@storybook/react';
import React from 'react';
import GrapthRadar from './GrapthRadar';

export default {
    component: GrapthRadar,
    title: 'atoms/GrapthRadar'
};

type TemplateType = {
  data: any
  title: string
}


const data = {
  labels: ['営業評価', 'お客様評価', '行動力', '提案力', 'リーダーシップ', '勤怠', '自己啓発'],
  datasets: [
    {
      label: 'BPその１',
      data: [10,8,4,2,6,9,1],
      backgroundColor: 'rgba(200, 32, 132, 0.5)',
    }, 
    {
      label: 'BPその２',
      data: [3,3,3,3,3,3,3],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'BPその３',
      data: [2,2,4,4,6,6,9],
      backgroundColor: 'rgba(255, 200, 60, 0.5)',
    }
  ]
}

const Template: Story<TemplateType> = (args) => <GrapthRadar {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: data,
  title: 'GrapthRadar Sample',
  };
