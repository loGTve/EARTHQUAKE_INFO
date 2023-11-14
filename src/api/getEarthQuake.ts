'use client'
import axios from 'axios';
import {useState} from 'react';
import {today, pastDate} from "@/utils/date";
import useEqData from "@/hooks/useEqData";
export const GetEarthQuakeResponse = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_EARTHQUAKE_URL;
    const apiKey = process.env.NEXT_PUBLIC_EARTHQUAKE_API;
    const apiParameter = process.env.NEXT_PUBLIC_EARTHQUAKE_PARMETER_URL;
    const apiParameterDate = process.env.NEXT_PUBLIC_EARTHQUAKE_PARAMETER_DATE;

    const getEarthquakeUrl = (
        apiUrl + apiKey
        + apiParameter + pastDate
        + apiParameterDate + today
        );

    const response = await axios.get(getEarthquakeUrl);
    const datas = response.data.response.body.items.item;

    const markInfo = useEqData(datas);
    return markInfo;
}

/*
const apiUrl = process.env.NEXT_PUBLIC_EARTHQUAKE_URL;
    const apiKey = process.env.NEXT_PUBLIC_EARTHQUAKE_API;
    const apiParameter = process.env.NEXT_PUBLIC_EARTHQUAKE_PARMETER_URL;
    const apiParameterDate = process.env.NEXT_PUBLIC_EARTHQUAKE_PARAMETER_DATE

    const getEarthquakeUrl = (
        apiUrl + apiKey
        + apiParameter + pastDate
        + apiParameterDate + today
        );
    const response = await axios.get(getEarthquakeUrl);

    const isUndefined: string = response.data.response.header.resultMsg;
if(isUndefined == "NO_DATA"){
        console.log("There is No EarthQuake Before 3 Days");
    } else {

        const itemResponse = response.data.response.body.items.item;
        let eqMarkInfo: [number, number, string][] = [];

        for(let i = 0; i < itemResponse.length; i++){
            eqMarkInfo.push([itemResponse[i].lat, itemResponse[i].lon, itemResponse[i].loc]);
        }
        return eqMarkInfo;
    }
}
*/