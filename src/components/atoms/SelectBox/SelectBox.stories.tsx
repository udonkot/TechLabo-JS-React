import { Story } from '@storybook/react'
import React from 'react'
import SelectBox from './SelectBox'
import { OptionListType } from './OptionList.type'

export default {
  component: SelectBox,
  title: 'atoms/SelectBox'
}

type TemplateType = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  optionList: OptionListType[]
}

const Template: Story<TemplateType> = (args) => <SelectBox {...args} />

export const Default = Template.bind({})
Default.args = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {},
  optionList: [
    {
      name: 'hoge',
      id: 'aaa'
    },
    {
      name: 'moge',
      id: 'bbb'
    }
  ]
}
