import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};


interface IProps {
  dataList: number[],
  labelList: string[],
  title: string
  labelName: string

}

const GrapthBar: React.FC<IProps> = (props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  }

  const data = {
    labels: props.labelList,
    datasets: [{
      label: props.labelName,
      data: props.dataList,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }]
  }

  return <Bar options={options} data={data} />;
}

export default GrapthBar;