import {getEarthQuakeResponse} from '@/api/getEarthQuake';
export const mapMark = async (map: any) => {
    const markInfo = await getEarthQuakeResponse();
    
    console.table(markInfo);
    for(let i = 0; i < markInfo.length; i++){
        const [lat, lng, location] = markInfo[i];
        new google.maps.Marker({position: { lat: lat, lng: lng}, map: map})
    }
}