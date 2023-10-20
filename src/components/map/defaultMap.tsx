import React from 'react';
import {getEarthQuakeResponse} from "@/api/getEarthQuake";

export function DefaultGoogleMap() {
    getEarthQuakeResponse();
    return null;
    
}