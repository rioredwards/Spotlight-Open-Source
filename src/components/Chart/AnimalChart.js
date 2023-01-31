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
import faker from 'faker';
import { animalData } from '../../animalData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const animalSubset = animalData.splice(0, 10);
const labels = animalSubset.map((animal) => animal.animalName);
const coolFactorData = animalSubset.map((animal) => animal.coolFactor);

export const data = {
  labels,
  datasets: [
    {
      label: 'Coolness',
      data: coolFactorData,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

console.log('data', data);

export default function AnimalChart() {
  return <Bar options={options} data={data} />;
}
