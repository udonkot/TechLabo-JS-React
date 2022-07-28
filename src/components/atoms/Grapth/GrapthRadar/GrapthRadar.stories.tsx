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
  labels: ['国語', '算数', '理科', '社会', '体育', '英語', '科学'],
  datasets: [
    {
      label: 'SampleLabel1',
      data: [1,10,20,30,30,6,27],
      backgroundColor: 'rgba(200, 32, 132, 0.5)',
    }, 
    {
      label: 'SampleLabe2',
      data: [5,10,15,40,18,32,26],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ]
}

const Template: Story<TemplateType> = (args) => <GrapthRadar {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: data,
  title: 'GrapthRadar Sample',
  };
