import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import SelectBox from '../../../atoms/SelectBox/SelectBox'
import { ConpitencyCloudCheckType } from './ConpitencyCloudCheckType'

const MasterDataList: ConpitencyCloudCheckType[] = [
  {
    grade: 'G5',
    items: [
      {
        category: '役割範囲',
        base: 5
      },
      {
        category: '経営参画',
        base: 2
      },
      {
        category: '統率',
        base: 1
      },
      {
        category: '連携',
        base: 3
      },
      {
        category: '顧客満足',
        base: 9
      },
      {
        category: '業績達成',
        base: 3
      },
      {
        category: '部下育成',
        base: 3
      },
      {
        category: '業務改善',
        base: 4
      },
      {
        category: 'アライメント',
        base: 3
      }
    ]
  },
  {
    grade: 'G4',
    items: [
      {
        category: '役割範囲',
        base: 4
      },
      {
        category: '経営参画',
        base: 1
      },
      {
        category: '統率',
        base: 0
      },
      {
        category: '連携',
        base: 2
      },
      {
        category: '顧客満足',
        base: 6
      },
      {
        category: '業績達成',
        base: 2
      },
      {
        category: '部下育成',
        base: 2
      },
      {
        category: '業務改善',
        base: 2
      },
      {
        category: 'アライメント',
        base: 2
      }
    ]
  }
]

export const ConpitencyCloudCheck: React.FC = () => {
  const [showData, setShowData] = useState<ConpitencyCloudCheckType>()
  const [tableData, setTableData] = useState<JSX.Element[]>()
  const [result, setResult] = useState<string[]>([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ])

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const showData = MasterDataList.find(
      (mData) => e.target.value === mData.grade
    )

    if (showData !== undefined) {
      setShowData(showData)
    }
  }

  const optionList = [
    {
      name: 'SE',
      id: 'G3'
    },
    {
      name: '上級SE',
      id: 'G4'
    },
    {
      name: 'スキルリード',
      id: 'G5'
    },
    {
      name: 'ユニット長',
      id: 'G6'
    },
    {
      name: 'スキルリード',
      id: 'G7'
    }
  ]

  const onBlur = (
    e: React.FocusEvent<HTMLInputElement, Element>,
    idx: number
  ): void => {
    const newArray = result.concat() ?? []
    if (
      showData?.items[idx].base !== undefined &&
      Number.parseInt(e.target.value) > showData?.items[idx].base
    ) {
      newArray[idx] = 'OK'
    } else {
      newArray[idx] = 'NG'
    }
    setResult(newArray)
  }

  useEffect(() => {
    const wrkTableData = showData?.items.map((_item, idx) => (
      <tr key={idx}>
        <td>{idx + 1}</td>
        <td>{_item.category}</td>
        <td>{_item.base}</td>
        <td>
          <input type="text" onBlur={(e) => onBlur(e, idx)} />
        </td>
        <td>{result[idx]}</td>
      </tr>
    ))
    setTableData(wrkTableData)
  }, [showData, result])

  return (
    <div>
      <SelectBox optionList={optionList} onChange={onChange} />

      {tableData != null && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Category</th>
              <th>Base</th>
              <th>input</th>
              <th>result</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </Table>
      )}
    </div>
  )
}
