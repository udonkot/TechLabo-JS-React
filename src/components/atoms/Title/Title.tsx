import React from 'react';

interface IProps {
  titleName:string
}

export const Title:React.FC<IProps> = (props) => {
  return (
    <div className='Title'>
      {props.titleName}
    </div>
  )
}
