
import React, { useState, useContext, createContext } from 'react';
import Navbar from './Navbar';
import KakaoMap from './KakaoMap';
import TemporaryDrawer from './Drawer';
import InfoBar from './InfoBar';
import { GlobalZoomLevel } from './Context';

// import { GlobalZoomLevelProvider } from './Context';

export const Dragonball = createContext();

const App = () => {
    
    
    const [filter1, setFilter1 ] = useState('');
    const [filter2, setFilter2 ] = useState('');
    const [userInfo, setuserInfo ] = useState('');
    const [zoomlevel, setZoomlevel ] = useState(8);
    const [latitude, setLatitude ] = useState(37.546502);
    const [longitude, setLongitude ] = useState(127.003617);
    const [trackzoomlevel, settrackZoomlevel ] = useState(8);
    const [tracklatitude, settrackLatitude ] = useState(37.546502);
    const [tracklongitude, settrackLongitude ] = useState(127.003617);

    const coords = [
        { lat:37.500701, lng:127.01066, category: "restaurant", user: "Kim", src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"}, 
        { lat:37.600201, lng:127.050167, category: "restaurant", user: "Kim", src: "https://picsum.photos/id/237/200/200"  }, 
        { lat:37.533201, lng:127.022167, category: "restaurant", user: "Wu", src: "https://picsum.photos/id/237/200/200"  }, 
        { lat:37.566201, lng:127.033167, category: "restaurant", user: "Wu", src: "https://picsum.photos/id/137/200/200"   }, 
        { lat:37.512201, lng:127.075167, category: "date", user: "Chang", src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"   }, 
        { lat:37.561201, lng:127.011167, category: "date", user: "Chang", src: "https://picsum.photos/id/637/200/200" }, 
        { lat:37.517201, lng:127.087167, category: "date", user: "Kim", src: "https://picsum.photos/id/237/200/200" }, 
        { lat:37.573201, lng:127.016167, category: "date", user: "Chang", src: "https://picsum.photos/id/237/200/200" }, 
        { lat:37.522201, lng:127.012167, category: "date", user: "Wu", src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png" }, 
        { lat:37.546201, lng:127.116167, category: "cafe", user: "Kim", src: "https://picsum.photos/id/137/200/200" }, 
        { lat:37.561201, lng:127.022167, category: "cafe", user: "Chang", src: "https://picsum.photos/id/217/200/200"  }, 
        { lat:37.582201, lng:127.016167, category: "cafe", user: "Wu", src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"  }, 
        { lat:37.515201, lng:127.051167, category: "cafe", user: "Wu", src: "https://picsum.photos/id/237/200/200" }, 
        { lat:37.516201, lng:127.012167, category: "cafe", user: "Chang", src: "https://picsum.photos/id/237/200/200"  },
    ];

    const menuselect = (e_menuselect) => {
        setFilter1(e_menuselect);
    };

    const userselect = (e_userselect) => {
        setFilter2(e_userselect.text);
    };

    const userinfoselect = (e) => {
        setuserInfo(e);
        console.log(e);
    };

    const zoomselect = (e) => {
      setZoomlevel(e);
    };
    
    const longlatselect = (e) => {
        setLongitude(e.La);
        setLatitude(e.Ma);
    };


    return (
        <div>
            <Dragonball.Provider value={{zoomlevel, setZoomlevel, setLongitude, setLatitude, settrackZoomlevel}}>
                <Navbar menuselect={menuselect} />
                <TemporaryDrawer userselect={userselect} />
                <KakaoMap filter1={filter1} filter2={filter2} setFilter1={setFilter1} setFilter2={setFilter2} coords={coords} userinfoselect={userinfoselect} zoomselect={zoomselect} longlatselect={longlatselect} setLatitude={setLatitude} setLongitude={setLongitude} latitude={latitude} longitude={longitude} zoomlevel={zoomlevel} setZoomlevel={setZoomlevel}/>
                <InfoBar userInfo={userInfo} />
            </Dragonball.Provider>
        </div>
    );
};

export default App;