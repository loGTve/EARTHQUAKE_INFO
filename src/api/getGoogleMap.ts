import { Loader } from "@googlemaps/js-api-loader";
import { envPath } from "@/utils/envPath";
import dotenv from 'dotenv';


dotenv.config({path: envPath});

export const loader = new Loader({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_API,
    version: process.env.REACT_APP_GOOGLE_MAP_VERSION,
});

export let map: google.maps.Map;

//{map}을 document.getElementById를 안쓰게 수정.
loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    map = new Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 10,
    });
});