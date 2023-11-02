"use client"
import {GoogleMapsWrapper} from "@/components/map/mapWrapper";
import {GoogleMaps} from "@/components/map/mapComponent";

export const MapComponent = () => {
    return(
        <GoogleMapsWrapper>
            <GoogleMaps/>
        </GoogleMapsWrapper>
    )
}