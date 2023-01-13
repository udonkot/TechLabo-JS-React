export interface ObjA {
  objAName: string
}

interface ObjB {
  objBName: string
  objBNum: string
}

interface DummyData {
  dataType: string
  objA: ObjA[]
  objB: ObjB[]
}

const testData: DummyData[] = [
  {
    dataType: 'PT',
    objA: [
      {
        objAName: 'PAX'
      }
    ],
    objB: [
      {
        objBName: 'ST',
        objBNum: '2'
      },

      {
        objBName: 'ST',
        objBNum: '6'
      }
    ]
  },
  {
    dataType: 'PT',
    objA: [
      {
        objAName: 'INF'
      }
    ],
    objB: [
      {
        objBName: 'ST',
        objBNum: '1'
      },

      {
        objBName: 'ST',
        objBNum: '4'
      }
    ]
  },
  {
    dataType: 'XX',
    objA: [
      {
        objAName: 'PAX'
      }
    ],
    objB: [
      {
        objBName: 'ST',
        objBNum: '1'
      },

      {
        objBName: 'ST',
        objBNum: '2'
      },
      {
        objBName: 'ST',
        objBNum: '3'
      },

      {
        objBName: 'ST',
        objBNum: '4'
      },
      {
        objBName: 'ST',
        objBNum: '5'
      },

      {
        objBName: 'ST',
        objBNum: '6'
      }
    ]
  }
]

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const checkData = (targetName: string, targetNum: string) => {
  const filterData = testData.filter(
    (data) =>
      data.dataType === 'PT' &&
      data.objA.some((data) => data.objAName === targetName) &&
      data.objB.some((data) => data.objBNum === targetNum) &&
      data.objB.some((data) => data.objBNum === targetNum)
  )
  // eslint-disable-next-line array-callback-return
  // const filterData2 = filterData.some((data) =>
  //   data.objB.some((data) => data.objBNum === targetNum)
  // )
  if (filterData.length > 0) {
    window.alert('target!')
  } else {
    window.alert('not target!')
  }
}

checkData('PAX', '2')
checkData('PAX', '4')
checkData('INF', '1')
checkData('INF', '5')
