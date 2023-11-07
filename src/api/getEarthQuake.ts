import axios from "axios";
import {today, pastThreeDay} from "@/types/date";

export const getEarthQuakeResponse = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_EARTHQUAKE_URL;
    const apiKey = process.env.NEXT_PUBLIC_EARTHQUAKE_API;
    const apiParameter = process.env.NEXT_PUBLIC_EARTHQUAKE_PARMETER_URL;
    const apiParameterDate = process.env.NEXT_PUBLIC_EARTHQUAKE_PARAMETER_DATE
    
    const getEarthquakeUrl = (
        apiUrl + apiKey
        + apiParameter + pastThreeDay
        + apiParameterDate + today
        );

    const response = await axios.get(getEarthquakeUrl);

    const itemResponse = response.data.response.body.items.item;
    
    let eqMarkInfo: [number, number, string][] = [];
    
    for(let i = 0; i < itemResponse.length; i++){
        eqMarkInfo.push([itemResponse[i].lat, itemResponse[i].lon, itemResponse[i].loc]);
    }
    console.table(eqMarkInfo);
    
    return eqMarkInfo;
}