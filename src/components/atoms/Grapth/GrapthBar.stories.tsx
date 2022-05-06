import {Story} from '@storybook/react';
import React from 'react';
import GrapthBar from './GrapthBar';

export default {
    component: GrapthBar,
    title: 'atoms/GrapthBar'
};

type TemplateType = {
  dataList: number[],
  labelList: string[],
  title: string
  labelName: string
}

const Template: Story<TemplateType> = (args) => <GrapthBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    labelList: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    dataList: [1,10,20,30],
    title: 'GrapthBar Sample',
    labelName: 'SampleLabel'
};
