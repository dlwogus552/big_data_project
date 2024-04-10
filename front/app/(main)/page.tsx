/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Menu } from 'primereact/menu';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ProductService } from '../../demo/service/ProductService';
import { LayoutContext } from '../../layout/context/layoutcontext';
import Link from 'next/link';
import { Demo } from '@/types';
import { ChartData, ChartOptions } from 'chart.js';
import axios from "axios";
const CLINET_ID = 'XoQrvN3hV75fuokQmCxd';
const CLINET_PW = 'tnt1sKbqf9';
const BASE_PATH = "/v1/search/news.json?query=고등어";
const lineData: ChartData = {
    labels: ['Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct'],
    datasets: [
        {
            label: '생산량 (1,000t)',
            data: [3, 5, 0, 8, 15, 20, 33],
            fill: false,
            backgroundColor: '#2f4860',
            borderColor: '#2f4860',
            tension: 0.4
        },
        {
            label: '가격 (100원)',
            data: [21, 22, 25, 21, 19, 18, 16],
            fill: false,
            backgroundColor: '#00bb7e',
            borderColor: '#00bb7e',
            tension: 0.4
        }
    ]
};

const Dashboard = () => {
    const [products, setProducts] = useState<Demo.Product[]>([]);
    const menu1 = useRef<Menu>(null);
    const menu2 = useRef<Menu>(null);
    const [lineOptions, setLineOptions] = useState<ChartOptions>({});
    const { layoutConfig } = useContext(LayoutContext);

    const [newsList, setNewsList] = useState([])
    useEffect(() => {
        axios.get(`${BASE_PATH}`, {
            params: {
                sort: "sim",
                display: "3",
                start: '1'
            },
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "X-Naver-Client-Id": CLINET_ID,
                "X-Naver-Client-Secret": CLINET_PW,
            }
        }).then((response) => {
            console.log('성공')
            setNewsList(response.data.items)
        }).catch((error) => {
            console.error('오류 발생', error.status)
        })
    }, []);
    const applyLightTheme = () => {
        const lineOptions: ChartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    const applyDarkTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);

    const formatCurrency = (value: number) => {
        return value?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    return (
        <div className="grid">

            <div className="col-12">
                <div className="card mb-0" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
                    <div className="flex justify-content-between mb-3">
                        <div style={{ width: '100%' }}>
                            <img src="/layout/images/themes/고등어.jpg" alt="등어 이미지" style={{ width: '100%', maxHeight: '100%', borderRadius: '10px' }} />
                        </div>
                    </div>
                </div>
            </div>





            {/* 방문자 / 최저가 등등 */}
            <div className="col-12 lg:col-6 xl:col-4">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">이달의 고등어(中) 예측 가격</span>
                            <div className="text-900 font-medium text-xl">2,200원</div>
                        </div>
                        {/* <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-dollar text-xl text-blue-500 text-xl" />
                        </div> */}
                    </div>
                    {/* <span className="text-green-500 font-medium">24 new </span>
                    <span className="text-500">회원가입</span> */}
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-4">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">전월 대비 증감률</span>
                            <div className="text-900 font-medium text-xl">🔽2.64%</div>
                        </div>
                        {/* <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}> */}
                            {/* <i className="pi pi-map-marker text-orange-500 text-xl" /> */}
                        {/* </div> */}
                    </div>
                    {/* <span className="text-green-500 font-medium">%52+ </span>
                    <span className="text-500">since last week</span> */}
                </div>
            </div>
            {/* <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">전일 고등어 소매가격(大)</span>
                            <div className="text-900 font-medium text-xl">3,740원</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-dollar text-xl text-blue-500 text-xl" />
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="col-12 lg:col-6 xl:col-4">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">전월의 고등어(中) 가격</span>
                            <div className="text-900 font-medium text-xl">2,142원</div>
                        </div>
                        {/* <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-dollar text-xl text-blue-500 text-xl" />
                        </div> */}
                    </div>
                    {/* <span className="text-green-500 font-medium">85 </span>
                    <span className="text-500">responded</span> */}
                </div>
            </div>
            {/* 방문자 / 최저가 끝 */}

            {/* 지역별 고등어 생산량 */}
            <div className="col-12 xl:col-6">
                <div className="card">
                    <h5>지역별 고등어 생산량 (2023년 기준)</h5>
                    <DataTable value={products} rows={5} paginator responsiveLayout="scroll">
                        <Column header="Image" body={(data) => <img className="shadow-2" src={`/demo/images/product/${data.image}`} alt={data.image} width="50" />} />
                        <Column field="name" header="Name" sortable style={{ width: '35%' }} />
                        <Column field="price" header="생산량" sortable style={{ width: '35%' }} />
                    </DataTable>
                </div>
                {/* 지역별 고등어 생산량 끝 */}
                {/* 고등어가 가장 많이 잡히는 계절 */}
                <div className="card">
                    <div className="flex justify-content-between align-items-center mb-5">
                        <h5>TOP 3 고등어 수입국 (2015년 ~ 2023년 기준)</h5>
                        <div>
                            {/* <Button type="button" icon="pi pi-ellipsis-v" rounded text className="p-button-plain" onClick={(event) => menu1.current?.toggle(event)} />
                            <Menu
                                ref={menu1}
                                popup
                                model={[
                                    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
                                    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
                                ]}
                            /> */}
                        </div>
                    </div>
                    <ul className="list-none p-0 m-0">
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">노르웨이</span>
                                <div className="mt-1 text-600">365,363,352kg</div>
                            </div>
                            <div className="mt-2 md:mt-0 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                    <div className="bg-orange-500 h-full" style={{ width: '88.71%' }} />
                                </div>
                                <span className="text-orange-500 ml-3 font-medium">88.71%</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">중국</span>
                                <div className="mt-1 text-600">36,394,652kg</div>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                    <div className="bg-cyan-500 h-full" style={{ width: '8.83%' }} />
                                </div>
                                <span className="text-cyan-500 ml-3 font-medium">8.83%</span>
                            </div>
                        </li>
                        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                            <div>
                                <span className="text-900 font-medium mr-2 mb-1 md:mb-0">러시아</span>
                                <div className="mt-1 text-600">9,901,250kg</div>
                            </div>
                            <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem" style={{ height: '8px' }}>
                                    <div className="bg-pink-500 h-full" style={{ width: '2.40%' }} />
                                </div>
                                <span className="text-pink-500 ml-3 font-medium">2.40%</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
                {/* 고등어가 가장 많이 잡히는 계절 끝 */}

            {/* 오른쪽 div */}
                {/* 수입량 변화 */}
            <div className="col-12 xl:col-6">
                <div className="card">
                    <h5>올해의 고등어 생산량 & 가격 예측</h5>
                    <Chart type="line" data={lineData} options={lineOptions} />
                </div>
                {/* 수입량 변화 끝 */}

                {/* Notifications */}
                <div className="card">
                    <div className="flex align-items-center justify-content-between mb-4">
                        <h5>Notifications</h5>
                        <div>
                            {/* <Button type="button" icon="pi pi-ellipsis-v" rounded text className="p-button-plain" onClick={(event) => menu2.current?.toggle(event)} />
                            <Menu
                                ref={menu2}
                                popup
                                model={[
                                    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
                                    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
                                ]}
                                /> */}
                        </div>
                    </div>

                    <span className="block text-600 font-medium mb-3">TODAY</span>
                    <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                    {newsList.map((news, i) => {
                            return (
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                                    <span className="text-900 line-height-3">
                                        <Link href={news.link}>
                                        <span style={{color:'black',fontSize:20}}dangerouslySetInnerHTML={{__html:news.title}}>
                                        </span>
                                        </Link>
                                    </span>
                                </li>
                            )
                        })}
                    </ul>

                    {/* <span className="block text-600 font-medium mb-3">YESTERDAY</span>
                    <ul className="p-0 m-0 list-none">
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-dollar text-xl text-blue-500" />
                            </div>
                            <span className="text-900 line-height-3">
                                <span className="text-700">
                                    {' '}
                                    고등어의 신선도가 떨어지면 이때 히스타민이라는 유해 성분으로 바뀌어 알레르기 등 여러 부작용이 나타날 수 있습니다.
                                </span>
                            </span>
                        </li>
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-question text-xl text-pink-500" />
                            </div>
                            <span className="text-900 line-height-3">
                                <span className="text-700">구매 시 신선한 고등어를 구매하고 잡은 즉시 피를 빼주는 게 좋습니다.</span>
                            </span>
                        </li>
                    </ul> */}
                </div>
                {/* Notifications */}
                {/* md추천 */}
                <div
                    className="px-4 py-5 shadow-2 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                    style={{
                        borderRadius: '1rem',
                        background: 'linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)'
                    }}
                    >
                    <div>
                        <div className="text-blue-100 font-medium text-xl mt-2 mb-3">MD 추천</div>
                        <div className="text-white font-medium text-5xl">고등어를 지금 바로 구입하세요</div>
                    </div>
                    <div className="mt-4 mr-auto md:mt-0 md:mr-0">
                        <Link href="https://search.shopping.naver.com/search/all?query=%EA%B3%A0%EB%93%B1%EC%96%B4" className="p-button font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised">
                            Get Started
                        </Link>
                    </div>
                </div>
                {/* md추천 끝 */}
            </div>
            {/* 오른쪽 div 끝 */}
        </div>
    );
};

export default Dashboard;