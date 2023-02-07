import React from 'react'
import { OptionListType } from './OptionList.type'

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  optionList: OptionListType[]
}

const SelectBox: React.FC<IProps> = (props) => {
  //  alert("items:" + items[0]);
  const option = []
  option.push(<option value="-" key="999"></option>)

  props.optionList.forEach((data, idx) => {
    option.push(
      <option value={data.id} key={idx}>
        {data.name}
      </option>
    )
  })

  return <select onChange={props.onChange}>{option}</select>
}

export default SelectBox
