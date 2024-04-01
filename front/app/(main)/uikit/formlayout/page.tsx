'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';

const FormLayoutDemo = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://apis.data.go.kr/6260000/BusanWindInfoService/getWindInfo', {
                    params: {
                        serviceKey: 'jmhj4AySTfuqupZqy%2FHnxlkTQs%2BiGPx391UTg2b1LoaAHtc6FzkpEnmerQYc5Oxvkb2klHsgnoTKB3nI0XllFg%3D%3D',
                        numOfRows: 5,
                        pageNo: 1
                    }
                });

                const parser = new xml2js.Parser({ explicitArray: false });
                parser.parseString(response.data, (err, result) => {
                    if (err) {
                        console.error('Error parsing XML:', err);
                        return;
                    }
                    const items = result.response.body.items.item;
                    setWeatherData(items);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
<div className="grid">
    {/* 위쪽 3개 */}
    <div className="col-20 md:col-10">
        <div className="card p-fluid">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {weatherData.slice(0, 3).map((item, index) => (
                    <div key={index} style={{ flex: '0 0 33.33%', maxWidth: '33.33%', marginBottom: '20px' }}>
                        <div style={{ backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
                            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{item.siteName}🌊</h1>
                            <p>상태: {item.sttusNm}</p>
                            <p>1분 평균 풍속: {item.windSpeed1m} m/s</p>
                            <p>10분 평균 풍속: {item.windSpeed10m} m/s</p>
                            <p>돌풍 풍속: {item.windSpeedGust} m/s</p>
                            <p>1분 평균 풍향: {item.windDirection1m} 도</p>
                            <p>10분 평균 풍향: {item.windDirection10m} 도</p>
                            <p>돌풍 풍향: {item.windDirectionGust} 도</p>
                            <p>관측 시간: {item.obsrDt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>

    {/* 아래쪽 두개  */}
    <div className="col-20 md:col-10">
        <div className="card p-fluid">
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {weatherData.slice(3).map((item, index) => (
                    <div key={index} style={{ flex: '0 0 50%', maxWidth: '50%', marginBottom: '20px' }}>
                        <div style={{ backgroundColor: '#f9f9f9', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
                            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{item.siteName}🌊</h1>
                            <p>상태: {item.sttusNm}</p>
                            <p>1분 평균 풍속: {item.windSpeed1m} m/s</p>
                            <p>10분 평균 풍속: {item.windSpeed10m} m/s</p>
                            <p>돌풍 풍속: {item.windSpeedGust} m/s</p>
                            <p>1분 평균 풍향: {item.windDirection1m} 도</p>
                            <p>10분 평균 풍향: {item.windDirection10m} 도</p>
                            <p>돌풍 풍향: {item.windDirectionGust} 도</p>
                            <p>관측 시간: {item.obsrDt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>

    );
};

export default FormLayoutDemo;