import axios from "axios";

export const getEarthQuakeResponse = async () => {
    const apiUrl = process.env.REACT_APP_EARTHQUAKE_URL;
    const apiKey = process.env.REACT_APP_EARTHQUAKE_API;
    const apiParameter = process.env.REACT_APP_EARTHQUAKE_PARMETER_URL;
    //change apiParameter's date from -3days to today.
    
    let response = await axios.get(`${apiUrl}+${apiKey}+${apiParameter}`);
    console.log(response.data);
    return response.data;
}
