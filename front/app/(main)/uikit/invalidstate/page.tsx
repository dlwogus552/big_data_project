"use client";

import type { Demo } from "@/types";
import {
    AutoComplete,
    AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { Calendar } from "primereact/calendar";
import { Chips } from "primereact/chips";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { MultiSelect } from "primereact/multiselect";
import { Password } from "primereact/password";
import { useEffect, useState } from "react";
import { CountryService } from "../../../../demo/service/CountryService";

const InvalidStateDemo = () => {
    const [countries, setCountries] = useState<Demo.Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Demo.Country[]>(
        []
    );
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState<any[]>([]);
    const [value5, setValue5] = useState("");
    const [value6, setValue6] = useState("");
    const [value7, setValue7] = useState(0);
    const [value8, setValue8] = useState(null);
    const [value9, setValue9] = useState(null);
    const [value10, setValue10] = useState("");

    const cities = [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
    ];

    useEffect(() => {
        CountryService.getCountries().then((countries) => {
            setCountries(countries);
        });
    }, []);

    const searchCountry = (event: AutoCompleteCompleteEvent) => {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        const filtered = [];
        const query = event.query;
        for (let i = 0; i < countries.length; i++) {
            const country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        setFilteredCountries(filtered);
    };

    const onCalendarChange = (e: any) => {
        setValue3(e.value!);
    };

    return (
        <div className="col-12">
        <div className="card mb-0"  style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <div className="flex justify-content-between mb-3"> 
                <div style={{width: '100%'}}>
                <a href="https://public.tableau.com/app/profile/.82985567/viz/kgTOP10_17116743538880/2?publish=yes">
                    <img src="/layout/images/themes/국가별 고등어 수출량.png" alt="국가별 고등어 수출량" style={{ width: '100%', maxHeight: '100%', borderRadius: '10px' }} />
                </a>    
                </div>         
            </div>
        </div>
        </div>
    );
};

export default InvalidStateDemo;
