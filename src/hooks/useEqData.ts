import React, {useState} from 'react';

export default function useEqData(e: any) {
    let {value, setValue}: any = useState([]);
    
    const updateValue = (newValue: any) => {
        setValue(newValue);
    };
    
    if(value === undefined || null){
        console.log("There is no Data");
        return null;
    }
    else {
        console.log("Data Served");
        const itemResponse = value.data.response.body.items.item;
        let eqMarkInfo: [number, number, string][] = [];

        for(let i = 0; i < itemResponse.length; i++){
            eqMarkInfo.push([itemResponse[i].lat, itemResponse[i].lon, itemResponse[i].loc]);
        }
        return eqMarkInfo;
    }
}