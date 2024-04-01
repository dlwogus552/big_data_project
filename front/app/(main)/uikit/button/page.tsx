'use client';
import React, { useState } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Button } from 'primereact/button';
import styles from './index.module.scss';
import { classNames } from 'primereact/utils';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

const ButtonDemo = () => {
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);
    const [loading4, setLoading4] = useState(false);

    const onLoadingClick1 = () => {
        setLoading1(true);

        setTimeout(() => {
            setLoading1(false);
        }, 2000);
    };

    const onLoadingClick2 = () => {
        setLoading2(true);

        setTimeout(() => {
            setLoading2(false);
        }, 2000);
    };

    const onLoadingClick3 = () => {
        setLoading3(true);

        setTimeout(() => {
            setLoading3(false);
        }, 2000);
    };

    const onLoadingClick4 = () => {
        setLoading4(true);

        setTimeout(() => {
            setLoading4(false);
        }, 2000);
    };

    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh'
        },
        {
            label: 'Delete',
            icon: 'pi pi-times'
        },
        {
            label: 'Home',
            icon: 'pi pi-home'
        }
    ];

    return (
        <div className="col-12">
        <div className="card mb-0"  style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <div className="flex justify-content-between mb-3">                
                <div style={{width: '100%'}}>
                <a href="https://public.tableau.com/app/profile/.82985567/viz/kgTOP10/1?publish=yes">
                    <img src="/layout/images/themes/국가별 고등어 수입량.png" alt="국가별 고등어 수입량" style={{ width: '100%', maxHeight: '100%', borderRadius: '10px' }} />
                </a>    
                </div>         
            </div>
        </div>
        </div>
    );
};

export default ButtonDemo;
