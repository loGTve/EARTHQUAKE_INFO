import {GetEarthQuakeResponse} from '@/api/getEarthQuake';

export const MapMark = async (map: any) => {
    const markInfo = await GetEarthQuakeResponse();
    
    if(markInfo == undefined){
        return null;
    } else {
        for(let i = 0; i < markInfo.length; i++){
            const [lat, lng, location] = markInfo[i];
            new google.maps.Marker({position: { lat: lat, lng: lng}, map: map})
        }
    }
}