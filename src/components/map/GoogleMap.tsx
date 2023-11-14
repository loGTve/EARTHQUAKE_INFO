"use client"
import React, { useEffect, useRef, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { MapMark } from '@/components/map/mapComponents/mapMark';
import {GetEarthQuakeResponse} from '@/api/getEarthQuake';

const DEFAULT_CENTER = { lat: 37.603, lng: 127.094 };
const DEFAULT_ZOOM = 6;

const InitMap = () => {
    
    const ref = useRef<HTMLDivElement | null>(null);
    let map;
    
    useEffect(() => {
        if (ref.current) {
             map = new google.maps.Map(ref.current, {
                center: DEFAULT_CENTER,
                zoom: DEFAULT_ZOOM,
            });
              MapMark(map);
            }
    }, [ref]);
    
    return (
            <div
                ref={ref}
                style={{ width: "800px", height: "600px" }}
            />
        );
};

export const GoogleMap = () => {
    const myApiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAP_API;
    
    return(
        <Wrapper apiKey={myApiKey}>
            <InitMap/>
        </Wrapper>
    )
}