import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { FaBolt, FaChartLine, FaDatabase, FaCloud, FaCalendarDay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';
import './Demand.css'; // Import your CSS file
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Demand = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility
  const [activeChart, setActiveChart] = useState('resourceAdequacyTrend');
  const images = [
    'https://www.india.gov.in/sites/upload_files/npi/files/pm-suryaghar_0.jpg',
    'https://media.gettyimages.com/id/1244355897/photo/new-delhi-india-a-general-view-of-connaught-place-covered-with-smog-due-to-air-pollution.jpg?s=612x612&w=0&k=20&c=qTsz5n4nmy4XcpwmxxPRQEKpHtnpKRyNKwtFMRgvpUg=',
    'https://www.india.gov.in/sites/upload_files/npi/files/Swachhata_Hi_Seva_2024.jpg',
    'https://powermin.gov.in/sites/default/files/styles/slider_1024x422/public/UJALA1.png?itok=YGftv199',
    'https://t4.ftcdn.net/jpg/05/05/12/27/360_F_505122794_wyPGC6YjodmcJqqB9V7cQImqMkpLjPpd.jpg'
    // 'https://powermin.gov.in/sites/default/files/styles/slider_1024x422/public/One_Nation_One_Grid_1.png?itok=SZ8Sprk-',
    // 'https://powermin.gov.in/sites/default/files/styles/slider_1024x422/public/Power_for_All_0.png?itok=QxT4R90b',
    // 'https://power.delhi.gov.in/sites/default/files/styles/home_banner/public/power/banner-images/department_of_power_web_banner.png?itok=UYQrzxvB',
    // 'https://services.india.gov.in/uploads/category/banners/fa5817488630027b_10f4d6e97319f276_electricitywaterandlocalservices.jpg',
  ];
  const [currentIndex,setCurrentIndex]=useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex]);

  const handlePrev = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };
  const subtractDays = (days) => {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString().split('T')[0]; // Returns the date in YYYY-MM-DD format
  };

  const data = [
    { icon: <FaBolt />, label: 'Current capacity*', value: '56,800 MW', color: '#FF5733', iconColor: '#FEC260' }, // Darker Red
    { icon: <FaChartLine />, label: 'Current demand', value: '32,549 MW', color: '#33B5FF', iconColor: '#232D3F' }, // Darker Blue
    { icon: <FaDatabase />, label: 'Current reserves', value: '2,753 MW', color: '#33FF57', iconColor: '#0e561f' }, // Darker Green
    { icon: <FaCloud />, label: 'Forecasted peak (18:45)', value: '39,118 MW', color: '#FF33D1', iconColor: '#BBE1FA' }, // Darker Pink
    { icon: <FaCalendarDay />, label: 'Tomorrow’s forecasted peak', value: '37,611 MW', color: '#FFC300', iconColor: '#481E14' } // Darker Yellow
  ];

  const loadCurveData = {
    today: [
      { time: '00:00', load1: 900, load2: 950, load3: 870 },
      { time: '01:00', load1: 870, load2: 900, load3: 820 },
      { time: '02:00', load1: 850, load2: 880, load3: 800 },
      { time: '03:00', load1: 340, load2: 360, load3: 350 },
      { time: '04:00', load1: 330, load2: 350, load3: 340 },
      { time: '05:00', load1: 1000, load2: 950, load3: 920 },
      { time: '06:00', load1: 980, load2: 940, load3: 900 },
      { time: '07:00', load1: 600, load2: 650, load3: 620 },
      { time: '08:00', load1: 700, load2: 750, load3: 720 },
      { time: '09:00', load1: 1400, load2: 1300, load3: 1350 },
      { time: '10:00', load1: 900, load2: 950, load3: 920 },
      { time: '11:00', load1: 950, load2: 1000, load3: 970 },
      { time: '12:00', load1: 1000, load2: 1050, load3: 1020 },
      { time: '13:00', load1: 1100, load2: 1150, load3: 1130 },
      { time: '14:00', load1: 550, load2: 500, load3: 580 },
      { time: '15:00', load1: 1150, load2: 1200, load3: 1180 },
      { time: '16:00', load1: 1200, load2: 1250, load3: 1230 },
      { time: '17:00',   },
      { time: '18:00',  },
      { time: '19:00',  },
      { time: '20:00',  },
      { time: '21:00',  },
      { time: '22:00',  },
      { time: '23:00',  },
//       load1: 0, load2: 0, load3: 0
// load1: 0, load2: 0, load3: 0
// load1: 0, load2: 0, load3: 0
// load1: 0, load2: 0, load3: 0
// load1: 0, load2: 0, load3: 0
// load1: 0, load2: 0, load3: 0
  ],
    yesterday: [
      { time: '00:00', load1: 850, load2: 900, load3: 820 },
      { time: '01:00', load1: 820, load2: 860, load3: 780 },
      { time: '02:00', load1: 800, load2: 840, load3: 760 },
      { time: '03:00', load1: 310, load2: 330, load3: 320 },
      { time: '04:00', load1: 300, load2: 320, load3: 310 },
      { time: '05:00', load1: 960, load2: 910, load3: 880 },
      { time: '06:00', load1: 940, load2: 900, load3: 860 },
      { time: '07:00', load1: 590, load2: 630, load3: 600 },
      { time: '08:00', load1: 680, load2: 730, load3: 700 },
      { time: '09:00', load1: 1350, load2: 1250, load3: 1300 },
      { time: '10:00', load1: 880, load2: 920, load3: 890 },
      { time: '11:00', load1: 920, load2: 970, load3: 940 },
      { time: '12:00', load1: 970, load2: 1010, load3: 980 },
      { time: '13:00', load1: 1030, load2: 1080, load3: 1060 },
      { time: '14:00', load1: 510, load2: 470, load3: 530 },
      { time: '15:00', load1: 1080, load2: 1130, load3: 1110 },
      { time: '16:00', load1: 1130, load2: 1180, load3: 1160 },
      { time: '17:00', load1: 1180, load2: 1230, load3: 1210 },
      { time: '18:00', load1: 1230, load2: 1280, load3: 1260 },
      { time: '19:00', load1: 1280, load2: 1330, load3: 1310 },
      { time: '20:00', load1: 1380, load2: 1430, load3: 1410 },
      { time: '21:00', load1: 1330, load2: 1380, load3: 1360 },
      { time: '22:00', load1: 1200, load2: 1250, load3: 1230 },
      { time: '23:00', load1: 1050, load2: 1100, load3: 1080 }
    ],
    last7days: [
      { time: subtractDays(6), load1: 870, load2: 920, load3: 850 },
      { time: subtractDays(5), load1: 840, load2: 890, load3: 820 },
      { time: subtractDays(4), load1: 820, load2: 870, load3: 800 },
      { time: subtractDays(3), load1: 340, load2: 360, load3: 350 },
      { time: subtractDays(2), load1: 330, load2: 350, load3: 340 },
      { time: subtractDays(1), load1: 1000, load2: 950, load3: 920 },
      { time: subtractDays(0), load1: 970, load2: 930, load3: 900 }
    ],
    last30days: [
      { time: subtractDays(30), load1: 870, load2: 910, load3: 850 },
      { time: subtractDays(29), load1: 850, load2: 890, load3: 830 },
      { time: subtractDays(28), load1: 820, load2: 860, load3: 810 },
      { time: subtractDays(27), load1: 300, load2: 320, load3: 310 },
      { time: subtractDays(26), load1: 290, load2: 310, load3: 300 },
      { time: subtractDays(25), load1: 940, load2: 900, load3: 870 },
      { time: subtractDays(24), load1: 920, load2: 880, load3: 850 },
      { time: subtractDays(23), load1: 610, load2: 650, load3: 620 },
      { time: subtractDays(22), load1: 690, load2: 740, load3: 710 },
      { time: subtractDays(21), load1: 1400, load2: 1300, load3: 1350 },
      { time: subtractDays(20), load1: 860, load2: 910, load3: 880 },
      { time: subtractDays(19), load1: 910, load2: 960, load3: 930 },
      { time: subtractDays(18), load1: 950, load2: 1000, load3: 970 },
      { time: subtractDays(17), load1: 1000, load2: 1050, load3: 1030 },
      { time: subtractDays(16), load1: 530, load2: 500, load3: 560 },
      { time: subtractDays(15), load1: 1100, load2: 1150, load3: 1130 },
      { time: subtractDays(14), load1: 1140, load2: 1200, load3: 1180 },
      { time: subtractDays(13), load1: 1200, load2: 1250, load3: 1230 },
      { time: subtractDays(12), load1: 1250, load2: 1300, load3: 1280 },
      { time: subtractDays(11), load1: 1300, load2: 1350, load3: 1330 },
      { time: subtractDays(10), load1: 1350, load2: 1400, load3: 1380 },
      { time: subtractDays(9), load1: 1450, load2: 1500, load3: 1480 },
      { time: subtractDays(8), load1: 1400, load2: 1450, load3: 1430 },
      { time: subtractDays(7), load1: 1300, load2: 1350, load3: 1330 },
      { time: subtractDays(6), load1: 1150, load2: 1200, load3: 1180 },
      { time: subtractDays(5), load1: 1100, load2: 1150, load3: 1130 },
      { time: subtractDays(4), load1: 1050, load2: 1100, load3: 1080 },
      { time: subtractDays(3), load1: 1000, load2: 1050, load3: 1020 },
      { time: subtractDays(2), load1: 950, load2: 1000, load3: 970 },
      { time: subtractDays(1), load1: 900, load2: 950, load3: 870 }
    ]
  };
  
  
  const loadCurveData1 = {
    today: [
      { time: '00:00', load1: 700, load2: 750, load3: 680 },
      { time: '01:00', load1: 680, load2: 720, load3: 670 },
      { time: '02:00', load1: 650, load2: 690, load3: 640 },
      { time: '03:00', load1: 600, load2: 640, load3: 590 },
      { time: '04:00', load1: 580, load2: 620, load3: 570 },
      { time: '05:00', load1: 900, load2: 850, load3: 880 },
      { time: '06:00', load1: 880, load2: 830, load3: 860 },
      { time: '07:00', load1: 640, load2: 680, load3: 650 },
      { time: '08:00', load1: 750, load2: 790, load3: 740 },
      { time: '09:00', load1: 1400, load2: 1300, load3: 1350 },
      { time: '10:00', load1: 900, load2: 950, load3: 920 },
      { time: '11:00', load1: 950, load2: 1000, load3: 970 },
      { time: '12:00', load1: 1000, load2: 1050, load3: 1020 },
      { time: '13:00', load1: 1100, load2: 1150, load3: 1120 },
      { time: '14:00', load1: 600, load2: 550, load3: 620 },
      { time: '15:00', load1: 1200, load2: 1250, load3: 1220 },
      { time: '16:00', load1: 1250, load2: 1300, load3: 1270 },
      { time: '17:00',  },
      { time: '18:00',  },
      { time: '19:00',  },
      { time: '20:00',  },
      { time: '21:00',  },
      { time: '22:00',  },
      { time: '23:00',  }
//       load1: 1300, load2: 1350, load3: 1320
// load1: 1350, load2: 1400, load3: 1370
// load1: 1400, load2: 1450, load3: 1420
// load1: 1300, load2: 1350, load3: 1320
// load1: 1200, load2: 1250, load3: 1220
// load1: 1100, load2: 1150, load3: 1130
// load1: 1000, load2: 1050, load3: 1020
    ],
    yesterday: [
      { time: '00:00', load1: 710, load2: 760, load3: 690 },
      { time: '01:00', load1: 690, load2: 730, load3: 670 },
      { time: '02:00', load1: 660, load2: 700, load3: 650 },
      { time: '03:00', load1: 620, load2: 660, load3: 610 },
      { time: '04:00', load1: 600, load2: 640, load3: 590 },
      { time: '05:00', load1: 910, load2: 860, load3: 890 },
      { time: '06:00', load1: 890, load2: 840, load3: 870 },
      { time: '07:00', load1: 650, load2: 690, load3: 660 },
      { time: '08:00', load1: 760, load2: 800, load3: 750 },
      { time: '09:00', load1: 1450, load2: 1350, load3: 1400 },
      { time: '10:00', load1: 910, load2: 960, load3: 930 },
      { time: '11:00', load1: 960, load2: 1010, load3: 980 },
      { time: '12:00', load1: 1010, load2: 1060, load3: 1030 },
      { time: '13:00', load1: 1120, load2: 1170, load3: 1140 },
      { time: '14:00', load1: 620, load2: 570, load3: 640 },
      { time: '15:00', load1: 1220, load2: 1270, load3: 1240 },
      { time: '16:00', load1: 1270, load2: 1320, load3: 1290 },
      { time: '17:00', load1: 1320, load2: 1370, load3: 1340 },
      { time: '18:00', load1: 1370, load2: 1420, load3: 1390 },
      { time: '19:00', load1: 1420, load2: 1470, load3: 1440 },
      { time: '20:00', load1: 1320, load2: 1370, load3: 1340 },
      { time: '21:00', load1: 1220, load2: 1270, load3: 1240 },
      { time: '22:00', load1: 1120, load2: 1170, load3: 1140 },
      { time: '23:00', load1: 1010, load2: 1060, load3: 1030 }
    ],
    last7days: [
      { time: subtractDays(6), load1: 870, load2: 920, load3: 850 },
      { time: subtractDays(5), load1: 840, load2: 890, load3: 830 },
      { time: subtractDays(4), load1: 820, load2: 870, load3: 810 },
      { time: subtractDays(3), load1: 330, load2: 350, load3: 340 },
      { time: subtractDays(2), load1: 320, load2: 340, load3: 330 },
      { time: subtractDays(1), load1: 960, load2: 910, load3: 890 }
    ],
    last30days: [
      { time: subtractDays(30), load1: 870, load2: 910, load3: 840 },
      { time: subtractDays(29), load1: 850, load2: 890, load3: 830 },
      { time: subtractDays(28), load1: 820, load2: 860, load3: 810 },
      { time: subtractDays(27), load1: 300, load2: 320, load3: 310 },
      { time: subtractDays(26), load1: 290, load2: 310, load3: 300 },
      { time: subtractDays(25), load1: 940, load2: 890, load3: 870 },
      { time: subtractDays(24), load1: 920, load2: 880, load3: 850 },
      { time: subtractDays(23), load1: 610, load2: 650, load3: 620 },
      { time: subtractDays(22), load1: 690, load2: 730, load3: 700 },
      { time: subtractDays(21), load1: 1350, load2: 1250, load3: 1300 },
      { time: subtractDays(20), load1: 870, load2: 920, load3: 890 },
      { time: subtractDays(19), load1: 920, load2: 970, load3: 930 },
      { time: subtractDays(18), load1: 970, load2: 1020, load3: 1000 },
      { time: subtractDays(17), load1: 1010, load2: 1060, load3: 1030 },
      { time: subtractDays(16), load1: 1070, load2: 1120, load3: 1090 },
      { time: subtractDays(15), load1: 1120, load2: 1170, load3: 1140 },
      { time: subtractDays(14), load1: 1170, load2: 1220, load3: 1190 },
      { time: subtractDays(13), load1: 1220, load2: 1270, load3: 1240 },
      { time: subtractDays(12), load1: 1270, load2: 1320, load3: 1290 },
      { time: subtractDays(11), load1: 1320, load2: 1370, load3: 1340 },
      { time: subtractDays(10), load1: 1370, load2: 1420, load3: 1390 },
      { time: subtractDays(9), load1: 1420, load2: 1470, load3: 1440 },
      { time: subtractDays(8), load1: 1300, load2: 1350, load3: 1320 },
      { time: subtractDays(7), load1: 1200, load2: 1250, load3: 1220 },
      { time: subtractDays(6), load1: 1100, load2: 1150, load3: 1130 },
      { time: subtractDays(5), load1: 1000, load2: 1050, load3: 1020 },
      { time: subtractDays(4), load1: 900, load2: 950, load3: 920 },
      { time: subtractDays(3), load1: 800, load2: 850, load3: 810 },
      { time: subtractDays(2), load1: 700, load2: 750, load3: 680 },
      { time: subtractDays(1), load1: 600, load2: 650, load3: 620 }
    ]
  };
  
  const loadCurveData2 = {
    today: [
      { time: '00:00', load1: 400, load2: 450, load3: 430 },
      { time: '01:00', load1: 380, load2: 430, load3: 410 },
      { time: '02:00', load1: 350, load2: 410, load3: 390 },
      { time: '03:00', load1: 340, load2: 400, load3: 370 },
      { time: '04:00', load1: 320, load2: 380, load3: 350 },
      { time: '05:00', load1: 310, load2: 360, load3: 340 },
      { time: '06:00', load1: 370, load2: 410, load3: 370 },
      { time: '07:00', load1: 600, load2: 660, load3: 620 },
      { time: '08:00', load1: 710, load2: 770, load3: 730 },
      { time: '09:00', load1: 820, load2: 860, load3: 820 },
      { time: '10:00', load1: 860, load2: 910, load3: 880 },
      { time: '11:00', load1: 900, load2: 960, load3: 930 },
      { time: '12:00', load1: 960, load2: 1020, load3: 1000 },
      { time: '13:00', load1: 1020, load2: 1060, load3: 1040 },
      { time: '14:00', load1: 1070, load2: 1130, load3: 1080 },
      { time: '15:00', load1: 1120, load2: 1180, load3: 1140 },
      { time: '16:00', load1: 1170, load2: 1230, load3: 1190 },
      { time: '17:00',  },
      { time: '18:00',  },
      { time: '19:00',  },
      { time: '20:00',  },
      { time: '21:00',  },
      { time: '22:00',  },
      { time: '23:00',  }
//       load1: 1230, load2: 1280, load3: 1250
// load1: 1270, load2: 1320, load3: 1290
// load1: 1330, load2: 1380, load3: 1340
// load1: 1460, load2: 1510, load3: 1480
// load1: 1390, load2: 1440, load3: 1420
// load1: 1240, load2: 1290, load3: 1270
// load1: 1040, load2: 1090, load3: 1080
    ],
    yesterday: [
      { time: '00:00', load1: 390, load2: 440, load3: 420 },
      { time: '01:00', load1: 370, load2: 420, load3: 400 },
      { time: '02:00', load1: 340, load2: 400, load3: 370 },
      { time: '03:00', load1: 330, load2: 390, load3: 360 },
      { time: '04:00', load1: 310, load2: 380, load3: 340 },
      { time: '05:00', load1: 300, load2: 370, load3: 330 },
      { time: '06:00', load1: 380, load2: 410, load3: 360 },
      { time: '07:00', load1: 600, load2: 650, load3: 610 },
      { time: '08:00', load1: 710, load2: 760, load3: 720 },
      { time: '09:00', load1: 790, load2: 840, load3: 800 },
      { time: '10:00', load1: 850, load2: 900, load3: 850 },
      { time: '11:00', load1: 900, load2: 950, load3: 920 },
      { time: '12:00', load1: 970, load2: 1020, load3: 990 },
      { time: '13:00', load1: 1010, load2: 1060, load3: 1010 },
      { time: '14:00', load1: 1070, load2: 1120, load3: 1080 },
      { time: '15:00', load1: 1110, load2: 1170, load3: 1130 },
      { time: '16:00', load1: 1160, load2: 1210, load3: 1170 },
      { time: '17:00', load1: 1210, load2: 1260, load3: 1230 },
      { time: '18:00', load1: 1260, load2: 1310, load3: 1270 },
      { time: '19:00', load1: 1310, load2: 1360, load3: 1320 },
      { time: '20:00', load1: 1430, load2: 1480, load3: 1440 },
      { time: '21:00', load1: 1380, load2: 1430, load3: 1390 },
      { time: '22:00', load1: 1230, load2: 1280, load3: 1240 },
      { time: '23:00', load1: 1030, load2: 1080, load3: 1050 }
    ],
    last7days: [
      { time: subtractDays(6), load1: 370, load2: 450, load3: 410 },
      { time: subtractDays(5), load1: 400, load2: 430, load3: 450 },
      { time: subtractDays(4), load1: 360, load2: 480, load3: 420 },
      { time: subtractDays(3), load1: 430, load2: 440, load3: 460 },
      { time: subtractDays(2), load1: 450, load2: 470, load3: 480 },
      { time: subtractDays(1), load1: 410, load2: 500, load3: 450 },
      { time: subtractDays(0), load1: 390, load2: 480, load3: 460 }
    ],
    
    last30days: [
      { time: subtractDays(29), load1: 360, load2: 410, load3: 380 },
      { time: subtractDays(28), load1: 400, load2: 430, load3: 420 },
      { time: subtractDays(27), load1: 390, load2: 420, load3: 410 },
      { time: subtractDays(26), load1: 370, load2: 450, load3: 400 },
      { time: subtractDays(25), load1: 410, load2: 460, load3: 430 },
      { time: subtractDays(24), load1: 440, load2: 490, load3: 470 },
      { time: subtractDays(23), load1: 480, load2: 520, load3: 500 },
      { time: subtractDays(22), load1: 460, load2: 500, load3: 480 },
      { time: subtractDays(21), load1: 450, load2: 540, load3: 510 },
      { time: subtractDays(20), load1: 470, load2: 520, load3: 490 },
      { time: subtractDays(19), load1: 460, load2: 550, load3: 530 },
      { time: subtractDays(18), load1: 480, load2: 530, load3: 510 },
      { time: subtractDays(17), load1: 520, load2: 560, load3: 540 },
      { time: subtractDays(16), load1: 510, load2: 570, load3: 550 },
      { time: subtractDays(15), load1: 550, load2: 600, load3: 580 },
      { time: subtractDays(14), load1: 540, load2: 590, load3: 570 },
      { time: subtractDays(13), load1: 580, load2: 620, load3: 610 },
      { time: subtractDays(12), load1: 590, load2: 630, load3: 620 },
      { time: subtractDays(11), load1: 610, load2: 650, load3: 630 },
      { time: subtractDays(10), load1: 620, load2: 660, load3: 640 },
      { time: subtractDays(9), load1: 600, load2: 670, load3: 650 },
      { time: subtractDays(8), load1: 630, load2: 680, load3: 670 },
      { time: subtractDays(7), load1: 640, load2: 690, load3: 680 },
      { time: subtractDays(6), load1: 620, load2: 710, load3: 690 },
      { time: subtractDays(5), load1: 660, load2: 730, load3: 710 },
      { time: subtractDays(4), load1: 670, load2: 720, load3: 700 },
      { time: subtractDays(3), load1: 690, load2: 740, load3: 720 },
      { time: subtractDays(2), load1: 710, load2: 760, load3: 740 },
      { time: subtractDays(1), load1: 730, load2: 780, load3: 760 },
      { time: subtractDays(0), load1: 750, load2: 800, load3: 780 }
    ]    
  };
  

  const loadCurveData3 = {
    today: [
      { time: '00:00', load1: 800, load2: 850, load3: 780 },
      { time: '01:00', load1: 780, load2: 820, load3: 760 },
      { time: '02:00', load1: 750, load2: 790, load3: 740 },
      { time: '03:00', load1: 300, load2: 320, load3: 310 },
      { time: '04:00', load1: 290, load2: 310, load3: 300 },
      { time: '05:00', load1: 950, load2: 900, load3: 880 },
      { time: '06:00', load1: 930, load2: 880, load3: 860 },
      { time: '07:00', load1: 580, load2: 620, load3: 600 },
      { time: '08:00', load1: 690, load2: 730, load3: 710 },
      { time: '09:00', load1: 1400, load2: 1300, load3: 1350 },
      { time: '10:00', load1: 850, load2: 900, load3: 870 },
      { time: '11:00', load1: 900, load2: 950, load3: 920 },
      { time: '12:00', load1: 950, load2: 1000, load3: 980 },
      { time: '13:00', load1: 1050, load2: 1100, load3: 1080 },
      { time: '14:00', load1: 500, load2: 460, load3: 520 },
      { time: '15:00', load1: 1100, load2: 1150, load3: 1130 },
      { time: '16:00', load1: 1150, load2: 1200, load3: 1180 },
      { time: '17:00',  },
      { time: '18:00',  },
      { time: '19:00',  },
      { time: '20:00',  },
      { time: '21:00',  },
      { time: '22:00',  },
      { time: '23:00',  }
//       load1: 1200, load2: 1250, load3: 1230
// load1: 1250, load2: 1300, load3: 1280
// load1: 1300, load2: 1350, load3: 1330
// load1: 1400, load2: 1450, load3: 1430
// load1: 1350, load2: 1400, load3: 1380
// load1: 1250, load2: 1300, load3: 1280
// load1: 1100, load2: 1150, load3: 1130
    ],
    yesterday: [
      { time: '00:00', load1: 820, load2: 870, load3: 800 },
      { time: '01:00', load1: 800, load2: 850, load3: 780 },
      { time: '02:00', load1: 780, load2: 830, load3: 760 },
      { time: '03:00', load1: 310, load2: 330, load3: 320 },
      { time: '04:00', load1: 300, load2: 320, load3: 310 },
      { time: '05:00', load1: 960, load2: 910, load3: 880 },
      { time: '06:00', load1: 940, load2: 900, load3: 860 },
      { time: '07:00', load1: 590, load2: 630, load3: 600 },
      { time: '08:00', load1: 680, load2: 730, load3: 700 },
      { time: '09:00', load1: 1350, load2: 1250, load3: 1300 },
      { time: '10:00', load1: 880, load2: 920, load3: 890 },
      { time: '11:00', load1: 920, load2: 970, load3: 940 },
      { time: '12:00', load1: 970, load2: 1010, load3: 980 },
      { time: '13:00', load1: 1030, load2: 1080, load3: 1060 },
      { time: '14:00', load1: 510, load2: 470, load3: 530 },
      { time: '15:00', load1: 1080, load2: 1130, load3: 1110 },
      { time: '16:00', load1: 1130, load2: 1180, load3: 1160 },
      { time: '17:00', load1: 1180, load2: 1230, load3: 1210 },
      { time: '18:00', load1: 1230, load2: 1280, load3: 1260 },
      { time: '19:00', load1: 1280, load2: 1330, load3: 1310 },
      { time: '20:00', load1: 1380, load2: 1430, load3: 1410 },
      { time: '21:00', load1: 1330, load2: 1380, load3: 1360 },
      { time: '22:00', load1: 1200, load2: 1250, load3: 1230 },
      { time: '23:00', load1: 1050, load2: 1100, load3: 1080 }
    ],
    last7days: [
      { time: subtractDays(6), load1: 860, load2: 910, load3: 840 },
      { time: subtractDays(5), load1: 830, load2: 880, load3: 810 },
      { time: subtractDays(4), load1: 810, load2: 860, load3: 790 },
      { time: subtractDays(3), load1: 320, load2: 340, load3: 330 },
      { time: subtractDays(2), load1: 310, load2: 330, load3: 320 },
      { time: subtractDays(1), load1: 950, load2: 900, load3: 880 }
    ],
    last30days: [
      { time: subtractDays(30), load1: 860, load2: 900, load3: 830 },
      { time: subtractDays(29), load1: 840, load2: 880, load3: 820 },
      { time: subtractDays(28), load1: 810, load2: 860, load3: 790 },
      { time: subtractDays(27), load1: 290, load2: 310, load3: 300 },
      { time: subtractDays(26), load1: 280, load2: 300, load3: 290 },
      { time: subtractDays(25), load1: 930, load2: 880, load3: 860 },
      { time: subtractDays(24), load1: 910, load2: 860, load3: 840 },
      { time: subtractDays(23), load1: 600, load2: 640, load3: 610 },
      { time: subtractDays(22), load1: 680, load2: 720, load3: 690 },
      { time: subtractDays(21), load1: 1300, load2: 1200, load3: 1250 },
      { time: subtractDays(20), load1: 850, load2: 900, load3: 870 },
      { time: subtractDays(19), load1: 900, load2: 950, load3: 920 },
      { time: subtractDays(18), load1: 940, load2: 990, load3: 950 },
      { time: subtractDays(17), load1: 990, load2: 1040, load3: 1000 },
      { time: subtractDays(16), load1: 520, load2: 480, load3: 540 },
      { time: subtractDays(15), load1: 1120, load2: 1170, load3: 1110 },
      { time: subtractDays(14), load1: 1150, load2: 1200, load3: 1160 },
      { time: subtractDays(13), load1: 1180, load2: 1230, load3: 1190 },
      { time: subtractDays(12), load1: 1200, load2: 1250, load3: 1210 },
      { time: subtractDays(11), load1: 1100, load2: 1150, load3: 1130 },
      { time: subtractDays(10), load1: 1050, load2: 1100, load3: 1080 },
      { time: subtractDays(9), load1: 1000, load2: 1050, load3: 1030 },
      { time: subtractDays(8), load1: 950, load2: 1000, load3: 980 },
      { time: subtractDays(7), load1: 900, load2: 950, load3: 930 },
      { time: subtractDays(6), load1: 860, load2: 900, load3: 890 },
      { time: subtractDays(5), load1: 820, load2: 860, load3: 850 },
      { time: subtractDays(4), load1: 780, load2: 820, load3: 810 },
      { time: subtractDays(3), load1: 740, load2: 780, load3: 770 },
      { time: subtractDays(2), load1: 700, load2: 740, load3: 730 },
      { time: subtractDays(1), load1: 950, load2: 900, load3: 880 }
    ]
  };
  const [selectedOption, setSelectedOption] = useState('today');
  const [chartData, setChartData] = useState(loadCurveData[selectedOption]);
  const [chartData1, setChartData1] = useState(loadCurveData1[selectedOption]);
  const [chartData2, setChartData2] = useState(loadCurveData2[selectedOption]);
  const [chartData3, setChartData3] = useState(loadCurveData3[selectedOption]);

  const handleSelectChange = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    setChartData(loadCurveData[newOption]);
  };
  const handleSelectChange1 = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    setChartData1(loadCurveData1[newOption]);
  };
  const handleSelectChange2 = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    setChartData2(loadCurveData2[newOption]);
  };
  const handleSelectChange3 = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    setChartData3(loadCurveData3[newOption]);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.category-nav a');

      let currentSectionId = '';

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) { // Adjust the threshold as needed
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

const openSidebar = (chart) => {
    setIsSidebarOpen(true);
    setActiveChart(chart);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Header />
      <div className="image-slider">
        <div className="slider-wrapper">
          <div
            className="slider-container"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Corrected template literal
          >
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Slide ${index}`} className="slider-image" /> // Corrected template literal for alt
            ))}
          </div>
        </div>

        {/* Left and Right Navigation Buttons */}
        <button className="prev" onClick={handlePrev}>
          <FaChevronLeft size={10} />
        </button>
        <button className="next" onClick={handleNext}>
          <FaChevronRight size={10} />
        </button>

        {/* Optional indicators (dots) */}
        <div className="indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`} // Corrected template literal for className
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>

      <div className="demand-page">
        {/* Main content with categories */}
        <main className="main-content">
          <nav className="category-nav">
            <ul>
              <li id="nav-current"><a href="#current">Current</a></li>
              <li id="nav-demand-trend"><a href="#demand-trend">Demand Trend</a></li>
              <li id="nav-net-demand-trend"><a href="#net-demand-trend">Net Demand Trend</a></li>
              <li id="nav-resource-adequacy-trend"><a href="#resource-adequacy-trend">Resource Adequacy Trend</a></li>
              <li id="nav-7-day-resource-adequacy-trend"><a href="#7-day-resource-adequacy-trend">7-Day Resource Adequacy Trend</a></li>
            </ul>
          </nav>

          {/* Header section */}
          <header className="heade">
            <div className="header-left">
              <p>
                Grid Status: <span className="status-normal">Normal</span>
              </p>
            </div>
            <div className="header-right">
              <a href="#learn-more" className="learn-more">
                Learn more about active alerts, warnings, and emergencies
              </a>
              <a href="#pdf" className="pdf-icon">
                <FaFilePdf size={20} /> {/* Using the PDF icon */}
              </a>
            </div>
          </header>

          {/* Section content */}
          <section id="current">
            <h2 className='curr'>Current</h2>
            <div className='slsl'>
              <div className='leftbl'>
                <div className="overview-capacity-chart">
                  <div className="capacity-chart-bar green" style={{ width: '54.7065%' }}></div>
                  <div className="capacity-chart-bar orange" style={{ width: '3.71912%' }}></div>
                  <div className="capacity-chart-bar gray" style={{ width: '19.8617%' }}></div>
                </div>
                <div className="capacity-chart-labels-container d-flex flex-row justify-content-between mt-2">
                  <div className="capacity-chart-labels">
                    <div className="capacity-chart-label label-current-demand">
                      <div className="capacity-name">Current demand</div>
                      <div className="capacity-number mt-1">32,364 MW</div>
                    </div>
                    <div className="capacity-chart-label label-reserves ver5">
                      <div className="capacity-name">Includes reserves</div>
                      <div className="capacity-number">2,725 MW</div>
                    </div>
                  </div>
                  <div className="capacity-chart-labels me-0">
                    <div className="d-flex flex-row">
                      <div className="capacity-chart-label label-available-capacity-1-4hour">
                        <div className="capacity-name">Available next 1 – 4 hours</div>
                        <div className="capacity-number mt-1"><span className="capacity-number-1hour">13,794 MW</span> – <span className="capacity-number-4hour">23,912 MW</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='rightbl'>
                <div className="data-blocks-container">
                  {data.map((item, index) => (
                    <div className="data-block" key={index}>
                      <div className="icon" style={{ color: item.iconColor }}>{item.icon}</div>
                      <div className="data-content">
                        <h3>{item.value}</h3>
                        <p>{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="demand-trend">
            <h2 className='curr'>Demand Trend</h2>
            <p className='curr'>System demand, measured in megawatts, is tracked and compared to the predicted demand every 5 minutes.</p>
            <div className='demand-trend-bx'>
              <nav className="demand-trend-nav">
                <ul className="demand-trend-menu">
                  {/* Date Select Dropdown */}
                  <li className="demand-trend-menu-item">
                  <select value={selectedOption} onChange={handleSelectChange}>
                      <option value="today">Today</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="last7days">Last 7 Days</option>
                      <option value="last30days">Last 30 Days</option>
                    </select>
                  </li>

                  {/* Option Select Dropdown */}
                  <li className="demand-trend-menu-item">
                    <select>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </li>

                  {/* Download Select Dropdown */}
                  <li className="demand-trend-menu-item">
                    <select>
                      <option value="pdf">Download as PDF</option>
                      <option value="csv">Download as CSV</option>
                      <option value="xlsx">Download as Excel</option>
                    </select>
                  </li>
                </ul>

                {/* Info Icon */}
                <div className="info-icon" onClick={() => openSidebar('demandTrend')}>
                  <AiOutlineInfoCircle />
                </div>
              </nav>

              {/* Graph Content Placeholder */}
              <div className="graph-content">
              <div className="dashboard-item load-curves">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* Add lines for each load */}
                    <Line type="monotone" dataKey="load1" stroke="#007acc" activeDot={{ r: 8 }} name='Day-ahead forecast' />
                    <Line type="monotone" dataKey="load2" stroke="#82ca9d" activeDot={{ r: 8 }} name='Hour-ahead forecast'/>
                    <Line type="monotone" dataKey="load3" stroke="#ff7300" activeDot={{ r: 8 }} name='Demand'/>
                  </LineChart>
                </ResponsiveContainer>
              </div>
              </div>
            </div>
          </section>

          <section id="net-demand-trend">
            <h2 className='curr'>Net Demand Trend</h2>
            <p className='curr'>System demand, excluding wind and solar generation, is monitored in 5-minute increments and compared to both the total system demand and the forecasted demand.</p>
            <div className='demand-trend-bx'>
              <nav className="demand-trend-nav">
                <ul className="demand-trend-menu">
                  {/* Date Select Dropdown */}
                  <li className="demand-trend-menu-item">
                  <select value={selectedOption} onChange={handleSelectChange1}>
                      <option value="today">Today</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="last7days">Last 7 Days</option>
                      <option value="last30days">Last 30 Days</option>
                    </select>
                  </li>

                  {/* Option Select Dropdown */}
                  <li className="demand-trend-menu-item">
                    <select>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </li>

                  {/* Download Select Dropdown */}
                  <li className="demand-trend-menu-item">
                    <select>
                      <option value="pdf">Download as PDF</option>
                      <option value="csv">Download as CSV</option>
                      <option value="xlsx">Download as Excel</option>
                    </select>
                  </li>
                </ul>

                {/* Info Icon */}
                <div className="info-icon" onClick={() => openSidebar('netDemandTrend')}>
                  <AiOutlineInfoCircle />
                </div>
              </nav>

              {/* Graph Content Placeholder */}
              <div className="graph-content">
              <div className="dashboard-item load-curves">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData1}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* Add lines for each load */}
                    <Line type="monotone" dataKey="load1" stroke="#007acc" activeDot={{ r: 8 }} name='Day-ahead forecast' />
                    <Line type="monotone" dataKey="load2" stroke="#82ca9d" activeDot={{ r: 8 }} name='Hour-ahead forecast'/>
                    <Line type="monotone" dataKey="load3" stroke="#ff7300" activeDot={{ r: 8 }} name='Demand'/>
                  </LineChart>
                </ResponsiveContainer>
              </div>
              </div>
            </div>
          </section>

          <section id="resource-adequacy-trend">
            <h2 className='curr'>Resource Adequacy Trend</h2>
            <p className='curr'>This chart compares the system capacity to the total system demand and the forecasted demand, showing the remaining capacity in the system.</p>
            <div className='demand-trend-bx'>
              <nav className="demand-trend-nav">
                <ul className="demand-trend-menu">
                  {/* Date Select Dropdown */}
                  <li className="demand-trend-menu-item">
                  <select value={selectedOption} onChange={handleSelectChange2}>
                      <option value="today">Today</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="last7days">Last 7 Days</option>
                      <option value="last30days">Last 30 Days</option>
                    </select>
                  </li>

                  {/* Option Select Dropdown */}
                  <li className="demand-trend-menu-item">
                    <select>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </li>

                  {/* Download Select Dropdown */}
                  <li className="demand-trend-menu-item">
                    <select>
                      <option value="pdf">Download as PDF</option>
                      <option value="csv">Download as CSV</option>
                      <option value="xlsx">Download as Excel</option>
                    </select>
                  </li>
                </ul>

                {/* Info Icon */}
                <div className="info-icon" onClick={() => openSidebar('resourceAdequacyTrend')}>
                  <AiOutlineInfoCircle />
                </div>
                
              </nav>

              {/* Graph Content Placeholder */}
              <div className="graph-content">
              <div className="dashboard-item load-curves">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData2}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* Add lines for each load */}
                    <Line type="monotone" dataKey="load1" stroke="#007acc" activeDot={{ r: 8 }} name='Day-ahead forecast' />
                    <Line type="monotone" dataKey="load2" stroke="#82ca9d" activeDot={{ r: 8 }} name='Hour-ahead forecast'/>
                    <Line type="monotone" dataKey="load3" stroke="#ff7300" activeDot={{ r: 8 }} name='Demand'/>
                  </LineChart>
                </ResponsiveContainer>
              </div>
              </div>
            </div>
          </section>

          <section id="7-day-resource-adequacy-trend">
            <h2 className='curr'>7-Day Resource Adequacy Trend</h2>
            <p className='curr'>This chart shows the forecasted capacity, the forecasted demand, and the forecasted net demand over the next 7 days.</p>
            <div className='demand-trend-bx'>
              <nav className="demand-trend-nav">
                <ul className="demand-trend-menu">
                  {/* Date Select Dropdown */}
                  <li className="demand-trend-menu-item">
                  <select value={selectedOption} onChange={handleSelectChange3}>
                      <option value="today">Today</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="last7days">Last 7 Days</option>
                      <option value="last30days">Last 30 Days</option>
                    </select>
                  </li>

                  {/* Option Select Dropdown */}
                  <li className="demand-trend-menu-item">
                    <select>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </li>

                  {/* Download Select Dropdown */}
                  <li className="demand-trend-menu-item">
                    <select>
                      <option value="pdf">Download as PDF</option>
                      <option value="csv">Download as CSV</option>
                      <option value="xlsx">Download as Excel</option>
                    </select>
                  </li>
                </ul>

                {/* Info Icon */}
                <div className="info-icon" onClick={() => openSidebar('sevenDayResourceAdequacyTrend')}>
                  <AiOutlineInfoCircle />
                </div>
              </nav>

              {/* Graph Content Placeholder */}
              <div className="graph-content">
              <div className="dashboard-item load-curves">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData3}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* Add lines for each load */}
                    <Line type="monotone" dataKey="load1" stroke="#007acc" activeDot={{ r: 8 }} name='Day-ahead forecast' />
                    <Line type="monotone" dataKey="load2" stroke="#82ca9d" activeDot={{ r: 8 }} name='Hour-ahead forecast'/>
                    <Line type="monotone" dataKey="load3" stroke="#ff7300" activeDot={{ r: 8 }} name='Demand'/>
                  </LineChart>
                </ResponsiveContainer>
              </div>
              </div>
            </div>
          </section>
          <div className='bxdrop'>
          <p>Today's Outlook charts provide a summary of forecasted and actual loads. Please note that the data presented excludes dispatchable pump loads and battery storage currently being charged within the system. This information is intended for informational purposes only and should not be used for determining billing values or for operational planning.</p>
        </div>
        </main>
      </div>

      {/* Sidebar */}
      {/* Sidebar with dynamic content */}
      {/* Sidebar with dynamic content */}
      {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={closeSidebar}>X</button>
          <div className="sidebar-content">
            <h3>Info Sidebar</h3>
            {/* Resource Adequacy Trend Info */}
            {activeChart === 'resourceAdequacyTrend' && (
              <p>This chart compares system capacity with total demand and forecasted demand to show remaining capacity.</p>
            )}
            
            {/* 7-Day Resource Adequacy Trend Info */}
            {activeChart === 'sevenDayResourceAdequacyTrend' && (
              <p>This chart displays the forecasted capacity, demand, and net demand over the next 7 days.</p>
            )}
            
            {/* Demand Trend Info */}
            {activeChart === 'demandTrend' && (
              <p>This chart shows the total system demand over the selected period, helping to analyze demand patterns.</p>
            )}
            
            {/* Net Demand Trend Info */}
            {activeChart === 'netDemandTrend' && (
              <p>This chart highlights the net demand trends by subtracting renewable generation from total demand over the chosen timeframe.</p>
            )}
          </div>
        </div>
      )}


      <Footer />
    </>
  );
};

export default Demand;
