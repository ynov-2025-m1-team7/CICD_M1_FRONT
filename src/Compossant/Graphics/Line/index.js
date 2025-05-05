import React from 'react';
import './style.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Enregistrer les composants nécessaires
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyLineChart = ({ labels, values }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Visiteur par jour',
        data: values,
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.3, // courbure des lignes
        fill: true, // remplir sous la ligne
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Nombre de visiteurs par jour',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  

  return (
    <div className='Line-Chart-Container'>
        <h2>Volume Jour</h2>
        <Line data={data} options={options} />
    </div>
  );
};

export default MyLineChart;
