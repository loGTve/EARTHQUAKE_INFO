import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

export const GoogleMapsWrapper = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API;
    return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};