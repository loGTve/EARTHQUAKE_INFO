import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

export const GoogleMapWrapper = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAP_API;
    return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};