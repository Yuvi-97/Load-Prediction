import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import jsonData from '../../Arrays/data.json'
import './BarChartComponent.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const BarChartComponent = () => {
    const [selectedYear, setSelectedYear] = useState(2024); // Initialize with a default year
    const [chartData, setChartData] = useState({ datasets: [] });
    const [error, setError] = useState('');

    const fetchDataForYear = (year) => {
        const yearData = jsonData.find(item => item.year === year);
        if (!yearData) {
            setError('Data not available for selected year');
            setChartData({ datasets: [] }); // Clear chart data
        } else {
            setError(''); // Clear error message

            const categories = [
                { label: 'Domestic', value: yearData.domestic },
                { label: 'Non-Domestic', value: yearData.nonDomestic },
                { label: 'Industrial', value: yearData.industrial },
                { label: 'Public Utilities', value: yearData.publicUtilities },
                { label: 'Others', value: yearData.others },
                { label: 'Agricultural', value: yearData.agricultural } // Always keep agricultural last
            ];

            // Sort categories to ensure Agricultural is the least
            categories.sort((a, b) => {
                if (a.label === 'Agricultural') return 1;
                if (b.label === 'Agricultural') return -1;
                return b.value - a.value;
            });

            setChartData({
                labels: categories.map(cat => cat.label),
                datasets: [{
                    label:`Data for ${year}`,
                    data: categories.map(cat => cat.value),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            });
        }
    };

    // Handle changes in year selection
    useEffect(() => {
        fetchDataForYear(selectedYear);
    }, [selectedYear]);

    return (
        <>
        <Header/>
        <div className='asd'>
            <h1>Yearly Data Chart</h1>
            <label>Year: </label>
            <input
                type="number"
                min={2018}
                max={2040}
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
            />
            {error && <p>{error}</p>}
            {!error && chartData.datasets.length > 0 && (
                <div className="chart-container">
                    <Bar
                        data={chartData}
                        options={{
                            scales: {
                                y: {
                                    beginAtZero: true
                                },
                                x: {
                                    type: 'category'
                                }
                            }
                        }}
                    />
                </div>
            )}
        </div>
        <Footer/>
        </>
    );
};

export default BarChartComponent;