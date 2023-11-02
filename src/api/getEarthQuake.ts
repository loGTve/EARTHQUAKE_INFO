import axios from "axios";
import {today, pastThreeDay} from "@/types/date";

export const getEarthQuakeResponse = async () => {
    const apiUrl = process.env.REACT_APP_EARTHQUAKE_URL;
    const apiKey = process.env.REACT_APP_EARTHQUAKE_API;
    const apiParameter = process.env.REACT_APP_EARTHQUAKE_PARMETER_URL;
    const apiParameterDate = process.env.REACT_APP_EARTHQUAKE_PARAMETER_DATE
    
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
    
    return eqMarkInfo;
}