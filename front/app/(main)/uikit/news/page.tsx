"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CLINET_ID = 'XoQrvN3hV75fuokQmCxd';
const CLINET_PW = 'tnt1sKbqf9';
const BASE_PATH = "/v1/search/news.json?query=고등어";

const NewsPage = () => {
    const [newsList, setNewsList] = useState([])
    useEffect(() => {
        axios.get(`${BASE_PATH}`, {
            params: {
                sort: "sim",
                display: "10",
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
    console.log(newsList)
    return (
        <div className="grid">
            {newsList.map((news, i) => {
                return (
                    <div className="col-12" key={i}>
                        <div  style={{ textAlign: 'center' }} className="card">
                            <Link href={news.link}>
                            <h4 dangerouslySetInnerHTML={{ __html: news.title }} key={i} />
                            <div style={{color:'blue'}} dangerouslySetInnerHTML={{ __html: news.description.substring(0,100) }} />
                            </Link>
                        </div>
                    </div>

                );
            })}
        </div>
    )
}
export default NewsPage;
