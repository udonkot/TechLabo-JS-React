import {Story} from '@storybook/react';
import DataTable from './DataTable';
import {UserCommentListType} from '../../molecules/SlackCommentSummaryTable/UserCommentList.type'

export default {
  component: DataTable,
  title: 'atoms/DataTable'
};

type TemplateType = {
    theadList?: String[];
    tbodyList: UserCommentListType[];
}

const Template: Story<TemplateType> = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
/*
  theadList: [
    'user',
    'cmnt'
  ],
  */
  tbodyList: [
    {
      user: 'user',
      value:1
    },
    {
      user: 'user2',
      value: 10
    },
  ]
};
