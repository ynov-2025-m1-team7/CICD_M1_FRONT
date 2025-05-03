import React from 'react';
import './style.css'; // Importer le fichier CSS pour le style
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Enregistrer les composants nécessaires de Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const MyPieChart = () => {
  // Données du graphique
  const data = {
    labels: ['JavaScript', 'Python', 'Java', 'C++'],
    datasets: [
      {
        data: [40, 25, 20, 15], // Valeurs des sections du graphique
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Couleurs des sections
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Couleurs des bordures
        borderWidth: 1, // Épaisseur des bordures des secteurs
      },
    ],
  };

  // Options du graphique
  const options = {
    responsive: true, // Pour rendre le graphique responsive
    plugins: {
      legend: {
        position: 'top', // Position de la légende
      },
      tooltip: {
        callbacks: {
          // Personnalisation des tooltips
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          },
        },
      },
    },
  };

  return (
    <div className='Pie-Chart-Container'>
      <h2>Graphique Circulaire avec Chart.js</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default MyPieChart;
