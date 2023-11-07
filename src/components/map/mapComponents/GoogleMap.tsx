import React, { useEffect, useRef } from "react";
import { mapMark } from "@/components/map/mapComponents/mapMark";

const DEFAULT_CENTER = { lat: 37.603, lng: 127.094 };
const DEFAULT_ZOOM = 6;

export const GoogleMap = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    let map;
    useEffect(() => {
        if (ref.current) {
             map = new google.maps.Map(ref.current, {
                center: DEFAULT_CENTER,
                zoom: DEFAULT_ZOOM,
            });
              mapMark(map);
            }
    }, [ref]);
    
    return (
        <div
            ref={ref}
            style={{ width: "800px", height: "600px" }}/>
        );
};