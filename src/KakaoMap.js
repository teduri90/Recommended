import React, { useContext, useEffect } from 'react';
// import { GlobalZoomLevelProvider } from '../context';
import { GlobalZoomLevel } from './Context';
import { Dragonball } from './App.js';
import Navbar from './Navbar';

const APP_KEY = '0084e0c6e15e687676ff408fc074def6'

const KakaoMap = ({filter1, filter2, coords, setFilter1, setFilter2, userinfoselect, latitude, longitude, longlatselect,zoomselect, setZoomlevel}) => {
    
    const {zoomlevel, settrackZoomlevel} = useContext(Dragonball);
    const filterchange2 = filter1;
    const filterchange1 = filter2;
    
    useEffect(() => {
    const script = document.createElement('script')
    /// script.async = true
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}&autoload=false`
    document.head.appendChild(script)
    script.onload = () => {
        const { kakao } = window
        
        
        kakao.maps.load(() => {
            
            
            let container = document.getElementById('KakaoMapLoad')
            let options = {
                center: new kakao.maps.LatLng(latitude, longitude),
                // center: new kakao.maps.LatLng(latitude, longitude),
                level: zoomlevel,
                // level: zoomlevel,
            };
        const KakaoMapDefault = new kakao.maps.Map(container, options)        
        //console.log(filter1);
        //console.log(filter2);
        //console.log(coords);

        var coordsFilter = coords;

        if(filter1 !== '' && filter2 !== '') {
            coordsFilter = coords.filter(e => e.category === filter1 && e.user === filter2);
            //setFilter1('');
            //setFilter2('');
        } else if (filter1 !== '') {
            coordsFilter = coords.filter(e => e.category === filter1);
            //setFilter1('');
        } else if (filter2 !== '') {
            coordsFilter = coords.filter(e => e.user === filter2);
            //setFilter2('');
        } else {
            coordsFilter = coords;
        }

        coordsFilter.forEach((e) => {
            var imageSrc = 'https://picsum.photos/id/237/200/200', // 마커이미지의 주소입니다    
            imageSize = new kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
            imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            
            var markerImage = new kakao.maps.MarkerImage(e.src, imageSize, imageOption)
                
            const marker = new kakao.maps.Marker({
                map: KakaoMapDefault,
                position: new kakao.maps.LatLng(e.lat, e.lng),
                image: markerImage,
            })

            var content = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            카카오 스페이스닷원' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="img">' +
            '                <img src="https://picsum.photos/id/100/200/200" width="73" height="70">' +
            '           </div>' + 
            '            <div class="desc">' + 
            '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' + 
            '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
            '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>';
            /*
            var customOverlay = new kakao.maps.CustomOverlay({
                map: KakaoMapDefault,
                position: new kakao.maps.LatLng(e.lat, e.lng),
                content: filter1 !== '' ? content : '',
                yAnchord: 1
            })
            */

            // 좌표 변경 확인
            kakao.maps.event.addListener(KakaoMapDefault, 'dragend', function() {
                var latlng = KakaoMapDefault.getBounds(); 
                var centerget = KakaoMapDefault.getCenter();
                var zoomget = KakaoMapDefault.getLevel();
                //console.log(latlng)
                var oaoa = latlng.oa;
                var haha = latlng.ha;
                var qaqa = latlng.qa;
                var papa = latlng.pa;
                var centercenter = centerget;
                var zoomzoom = zoomget;

                //console.log(oaoa);
                //console.log(centercenter);
                //console.log(centercenter.La);
                //console.log(centercenter.Ma);
                //console.log(zoomzoom);
                console.log(zoomlevel);
                zoomselect(zoomzoom);
                longlatselect(centercenter);
                //setNavLatitude(centercenter.La);
                //setNavLongitude(centercenter.Ma);
                // settrackZoomlevel(centercenter);

            })        

            // 클릭 시 관련 정보 표시 // 혹은 페이지 내 정보 검색 후 Info 창 표시
            kakao.maps.event.addListener(marker, 'click', function(mouseEvent) {  
                userinfoselect(marker.position);       
                console.log(marker.position);
            });

        });
    }); // SCRIPT 종료
}},[zoomlevel, filterchange1, filterchange2]);
// WHEN filter are triggered, trigger the saved setting ... 

    return (
        <div id="KakaoMapLoad" style={{ width: '100vw', height: '80vh' }}></div>
        
    );

};

export default KakaoMap;