import * as React from "react";
//API: AIzaSyDad7pSJlC7CfpruDJ5YuEM0FcI9VEzaEM {map, google }
import { useGoogleMaps } from "react-hook-google-maps";

const Maps = (props) => {
  const { ref } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyDad7pSJlC7CfpruDJ5YuEM0FcI9VEzaEM",
    // NOTE: even if you change options later
    {
      center: { lat: props.lat, lng: props.lng },
      zoom: 15,
    }
  );

  return <div ref={ref} style={{ width: 300, height: 300 }} />;
};

export default Maps;
