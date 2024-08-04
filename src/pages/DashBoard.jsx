import { DashboardTemplate } from '../templates/DashboardTemplate';
import dashboard1 from '../assets/dashboard1.png';
import dashboard2 from '../assets/dashboard2.png';
import dashboard3 from '../assets/dashboard3.png';
import eye from '../assets/solar_eye.png';
import setting from '../assets/tabler_setting.png';
import BarChart from '../components/chart/BarChart';
import TableChart from '../components/chart/TableChart';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Dashboard = () => {
  const [showText, setShowText] = useState(false);
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Income',
        data: [],
        backgroundColor: '#144C44',
        barThickness: 35.73,
      },
      {
        label: 'Expenditure',
        data: [],
        backgroundColor: '#6B4925',
        barThickness: 35.73,
      }
    ]
  });
  const [loadingData, setLoadingData] = useState(true);

  const fetchTable = async () => {
    try {
      const response = await axios.get('https://mocki.io/v1/1140e9b9-97f5-480d-b48f-47186fbce911');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoadingData(false);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mocki.io/v1/1b46307b-d5b3-42b4-b3c7-c65b6ce0ef4a');
      const data = response.data;
      setUserData({
        labels: data.labels,
        datasets: [
          {
            label: 'Income',
            data: data.datasets[0].data,
            backgroundColor: '#144C44',
            barThickness: 35.73,
          },
          {
            label: 'Expenditure',
            data: data.datasets[1].data,
            backgroundColor: '#6B4925',
            barThickness: 35.73,
          }
        ]
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoadingData(false);
    }
  };

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the data to display on the current page
  const currentData = useMemo(() => {
    if (!data) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage]);

  const handleNextPage = () => {
    if (data && currentPage * itemsPerPage < data.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(() => {
    fetchTable();
    fetchData();
  }, []);

  const handleShowText = () => {
    setShowText(!showText);
  };

  const chartOptions = useMemo(() => ({
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 10,
            family: 'Poppins',
            weight: '600',
            lineHeight: 1.5,
            letterSpacing: '2.5rem',
          },
          color: '#666',
          usePointStyle: true,
          align: 'center',
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    },
    maintainAspectRatio: false
  }), []);

  return (
    <DashboardTemplate>
      <div className="flex w-[1000px] ml-10 gap-5 my-5">
        <div className="w-[550px] rounded-lg py-2 px-4 bg-[#FFFFFF] shadow-md">
          <p className="text-[#A3A3A3] font-poppins tracking-[0.09rem] leading-[18px] font-semibold">Quick transactions</p>
          <div className="flex mt-5 text-center font-urbanist font-bold text-[16px] leading-[18.2px] gap-5">
            <div className="w-[160px] h-[115px] bg-[#EBF0FF] rounded-lg flex flex-col justify-center items-center">
              <img src={dashboard1} alt="" className="mb-3" />
              <p className="text-[#0F2361]">Transfer to MonieFlex</p>
            </div>
            <div className="w-[160px] h-[115px] bg-[#FFEBF3] rounded-lg flex flex-col justify-center items-center">
              <img src={dashboard2} alt="" className="mb-3" />
              <p className="text-[#63243D]">Transfer to other banks</p>
            </div>
            <div className="w-[160px] h-[115px] bg-[#FFEBF3] rounded-lg flex flex-col justify-center items-center">
              <img src={dashboard3} alt="" className="mb-3" />
              <p className="text-[#63243D]">Airtime <br /> Recharge</p>
            </div>
          </div>
        </div>
        <div className="bg-[#F6F1FF] w-[435px] h-[180px] rounded-lg shadow-md flex flex-col justify-between py-8 px-5 font-urbanist">
          <div className="flex justify-between leading-[14.4px] text-[12px] tracking-[0.09] text-[#A3A3A3]">
            <p>Current Account Balance</p>
            <img src={setting} alt="" className="w-[15px] h-[15px]" />
          </div>
          <div className="flex justify-between">
            <p className="font-[600] text-[38px] leading-[45px] tracking-[0.09] text-[#2E2E2E]">
              {showText ? 'N1234566' : 'N********'}
            </p>
            <button onClick={handleShowText}><img src={eye} alt="" className="w-[20px] h-[20px]" /></button>
          </div>
          <p className="text-[12px] font-[700] leading-[14.4px] tracking-[0.09] text-[#2E2E2E]">Savings Acc: ********3448</p>
        </div>
      </div>
      <div className="w-[1000px] h-[300px] shadow-md rounded-lg py-4 px-6 ml-10 mb-5">
        <BarChart chartDatas={userData} chartOptions={chartOptions} />
      </div>
      <div className="w-[1000px] h-[300px] shadow-md rounded-lg py-4 px-6 ml-10 mb-5 flex justify-between items-center">
        <ChevronLeft
          className={`w-6 h-6 text-gray-600 cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handlePreviousPage}
        />
        <TableChart data={currentData} />
        <ChevronRight
          className={`w-6 h-6 text-gray-600 cursor-pointer ${currentPage * itemsPerPage >= data?.length ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleNextPage}
        />
      </div>
    </DashboardTemplate>
  );
};

export default Dashboard;
