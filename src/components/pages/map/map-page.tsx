import React, {useEffect, useRef, useState} from 'react';
import {LatLngExpression} from "leaflet";
import 'leaflet/dist/leaflet.css';
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import XYZ from 'ol/source/XYZ'

export const MapPage = () => {
    const [map, setMap] = useState(undefined);
    const mapElement = useRef();
    useEffect(() => {
        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
                    })
                }),
            ],
            view: new View({
                projection: 'EPSG:3857',
                center: [0, 0],
                zoom: 2
            }),
            controls: []
        });
        setMap(initialMap);
    }, [])
    return (
        <div ref={mapElement} className='w-full h-full'></div>
    );
};