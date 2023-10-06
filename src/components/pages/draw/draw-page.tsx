import { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import Map from 'ol/Map';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import View from 'ol/View';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import TileLayer from 'ol/layer/Tile';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import XYZ from 'ol/source/XYZ';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import VectorLayer from 'ol/layer/Vector';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import VectorSource from 'ol/source/Vector';
import { Draw } from 'ol/interaction';
import 'ol/ol.css'

export const DrawPage = () => {
  const [map, setMap] = useState(undefined);
  const mapElement = useRef();

  const initMap = () => {
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
          }),
        }),
        vector,
      ],
      view: new View({
        projection: 'EPSG:3857',
        center: [0, 0],
        zoom: 2,
      }),
      interactions: [
        new Draw({
          source: source,
          type: 'LineString',
          freehand: true,
        }),
      ],
    });
    setMap(initialMap);
  };

  useEffect(() => {
    !map && initMap();

    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      console.log(map.updateSize);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      map && map.updateSize();
    }, 1000);
  }, [map]);
  return (
    <div className="w-full h-full flex items-start justify-center flex-col">
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/*@ts-ignore*/}
      <div ref={mapElement} className="h-[600px] w-[1000px]"></div>
    </div>
  );
};

