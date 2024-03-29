'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import axios from "axios";

interface DropdownItem {
    name: string;
    code: string;
}


const FormLayoutDemo = () => {
    const [dropdownItem, setDropdownItem] = useState<DropdownItem | null>(null);
    const dropdownItems: DropdownItem[] = useMemo(
        () => [
            { name: 'Option 1', code: 'Option 1' },
            { name: 'Option 2', code: 'Option 2' },
            { name: 'Option 3', code: 'Option 3' }
        ],
        []
    );

    useEffect(() => {
        setDropdownItem(dropdownItems[0]);
    }, [dropdownItems]);

    return (
        <div className="grid">
            <div className="col-20 md:col-10">
                <div className="card p-fluid">
                    <h2>오늘의 날씨</h2>
                    <div className="field" >
                        <label htmlFor="name1">날씨</label>
                       <div style={{ fontSize: '24px' }}>맑음⛅</div>
                    </div>
                    <div className="field">
                        <label htmlFor="email1">강수량</label>
                        <div style={{ fontSize: '24px' }}>1.5mm☔</div>
                    </div>
                    <div className="field">
                        <label htmlFor="age1">풍속</label>
                        <div style={{ fontSize: '24px' }}>서남서 2.8m/s🌀</div>
                    </div>
                    <div className="field">
                        <label htmlFor="age1">기온(체감)</label>
                       <div style={{ fontSize: '24px' }}>9.7℃(8.3℃)🌡</div>
                    </div>
                </div>

                <div className="card p-fluid">
                    <h4>ocean</h4>
                    <div className="formgrid grid">
                        <div className="field col">
                            <label htmlFor="name2">수온</label>
                            <div style={{ fontSize: '24px' }}>13.2 ℃⛱</div>
                        </div>
                        <div className="field col">
                            <label htmlFor="email2">파고</label>
                            <div style={{ fontSize: '24px' }}>1~2.5 m 🌊</div>
                        </div>
                    </div>
                </div>
            </div>

           
                    </div>
    );
};

export default FormLayoutDemo;
