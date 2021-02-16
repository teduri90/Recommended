/*
import React, { useEffect, useState } from 'react'

const APP_KEY = '0084e0c6e15e687676ff408fc074def6'

const KakaoMap = () => {

  
  
  const coords = [
    { lat:37.500701, lng:127.01066, category: "restaurant" }, 
    { lat:37.600201, lng:127.050167, category: "restaurant" }, 
    { lat:37.533201, lng:127.022167, category: "restaurant" }, 
    { lat:37.566201, lng:127.033167, category: "restaurant" }, 
    { lat:37.512201, lng:127.075167, category: "hospital" }, 
    { lat:37.561201, lng:127.011167, category: "hospital" }, 
    { lat:37.517201, lng:127.087167, category: "hospital" }, 
    { lat:37.573201, lng:127.016167, category: "hospital" }, 
    { lat:37.522201, lng:127.012167, category: "hospital" }, 
    { lat:37.546201, lng:127.116167, category: "cafe" }, 
    { lat:37.561201, lng:127.022167, category: "cafe" }, 
    { lat:37.582201, lng:127.016167, category: "cafe" }, 
    { lat:37.515201, lng:127.051167, category: "cafe"}, 
    { lat:37.516201, lng:127.012167, category: "cafe" },
  ];

  const [coordsFilter, setCoorsFilter] = useState(coords);

  const onClickRestaruant = (i) => {
    setCoorsFilter(coords.filter(e => e.category === "restaurant"));
    i.preventDefault();
  };

  const createMap = () => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false`
    document.head.appendChild(script)
    script.onload = () => {
      const { kakao } = window
      kakao.maps.load(() => {
        let container = document.getElementById('Mymap')
        let options = {
          center: new kakao.maps.LatLng(37.546502, 127.003617),
          level: 8,
        };
        
        const createdMap = new kakao.maps.Map(container, options)

        for (var i=0; i<coordsFilter.length; i++){
          let marker = new kakao.maps.Marker({
            map: createdMap,
            position: new kakao.maps.LatLng(coordsFilter[i].lat, coordsFilter[i].lng),
          })
        };
      
      })
    }
  }

  useEffect(() => {createMap()}, [coordsFilter]);

  return (
        <div>
        <div id="Mymap" style={{ width: '100vw', height: '80vh' }}></div>
        <button onClick={onClickRestaruant}> ++</button>
        </div>
   );
};
  
export default KakaoMap; */
  

  /*
  const [map, setMap] = useState(null)
  const [markerArr, setMarkerArr] = useState([])
  const [locationArr, setLocationArr] = useState([])

  const getLocation = async id => {
    const data = await fetch(`http://localhost:3000/data${id}.json`)
    const dataJSON = await data.json()
    setLocationArr(dataJSON.location)
  }

  const createMap = () => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false`
    document.head.appendChild(script)
    script.onload = () => {
      const { kakao } = window
      kakao.maps.load(() => {
        let container = document.getElementById('Mymap')
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        }
        const createdMap = new kakao.maps.Map(container, options)
        setMap(createdMap)
      })
    }
  }

  const createMarker = () => {
    const { kakao } = window
    const tempArr = []
    locationArr.forEach(e => {
      tempArr.push(
        new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(e.mapY, e.mapX),
        })
      )
    })
    setMarkerArr(tempArr)
  }

  const deleteMarker = () => markerArr.forEach(e => e.setMap(null))

  useEffect(() => {
    getLocation(1) // location 정보 fetch
    createMap()
  }, [])

  // marker 생성 + 표시
  useEffect(() => map && locationArr.length && createMarker(), [map,locationArr,])

  return (
    <div className="App">
      <div
        onClick={() => getLocation(2)}
        style={{ ...divBtnOpt, backgroundColor: 'red', left: '100px' }}
      />
      <div
        onClick={deleteMarker}
        style={{ ...divBtnOpt, backgroundColor: 'blue', left: '150px' }}
      />
      <div id="Mymap" style={{ width: '100vw', height: '100vh' }}></div>
    </div>*/
