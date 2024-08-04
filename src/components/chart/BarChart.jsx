import {Bar} from 'react-chartjs-2'
import {Chart as ChartJs, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'
ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = ({chartDatas,chartOptions}) => {
  return (
    <Bar data={chartDatas} options={chartOptions}/>
  )
}

export default BarChart