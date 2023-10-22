import axios from "axios";
import {today, pastThreeDay} from "@/types/date";

export const getEarthQuakeResponse = async () => {
    const apiUrl = process.env.REACT_APP_EARTHQUAKE_URL;
    const apiKey = process.env.REACT_APP_EARTHQUAKE_API;
    const apiParameter = process.env.REACT_APP_EARTHQUAKE_PARMETER_URL;
    const apiParameterDate = process.env.REACT_APP_EARTHQUAKE_PARAMETER_DATE;
    
    const getEarthquakeUrl = (
        apiUrl + apiKey
        + apiParameter + pastThreeDay
        + apiParameterDate + today
    );

    let response = await axios.get(getEarthquakeUrl);
    console.log(response.data.response.body.items);
    return response.data;
}
