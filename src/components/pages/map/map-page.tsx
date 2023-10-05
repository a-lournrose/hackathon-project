import React, {useEffect, useRef, useState} from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import Draw from 'ol/interaction/Draw';
import XYZ from 'ol/source/XYZ';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

export const MapPage = () => {
    const [map, setMap] = useState(undefined);
    const mapElement = useRef();
    useEffect(() => {
        const source = new VectorSource();
        const vector = new VectorLayer({
            source: source,
        });
        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
                    })
                }),
                vector
            ],
            view: new View({
                projection: 'EPSG:3857',
                center: [0, 0],
                zoom: 2
            }),
            interactions: [
                new Draw({
                    source: source,
                    type: 'LineString',
                    freehand: true,
                })
            ]
        });
        setMap(initialMap);
    }, [])
    return (
        <div ref={mapElement} className='w-full h-full'></div>
    );
};