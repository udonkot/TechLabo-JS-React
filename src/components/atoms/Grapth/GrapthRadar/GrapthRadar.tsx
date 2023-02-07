import React from 'react'
import { Radar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'

export const options = {
  responsive: true,
  legend: {
    position: 'top' as const
  },
  title: {
    display: true,
    text: 'Chart.js Bar Chart'
  }
}

interface IProps {
  data: any
  title: string
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const GrapthRadar: React.FC<IProps> = (props) => {
  const options = {
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: props.title
      },
      scale: {
        reverse: false,
        gridLines: {
          color: ['black']
        },
        ticks: {
          beginAtoZero: true
        }
      }
    }
  }

  return <Radar options={options} data={props.data} />
}

export default GrapthRadar
