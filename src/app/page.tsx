import React from "react";
import {MapComponent} from "@/components/map/initMap";
import {TestInit} from "@/components/map/testInit";

export default function Home() {
  return(
    <div>
      <div>
        <MapComponent/>
        <TestInit/>
      </div>
    </div>
  );
}