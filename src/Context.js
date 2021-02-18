import React, { useState, createContext } from 'react';

export const GlobalZoomLevel = createContext({ 
    state: {level: 8},
    action: {setZoom: () => {}}
});


/*
const GlobalZoomLevelProvider = ({ children }) => {
    const [level, setZoom] = useState(8);

    const value = {
        state: { level },
        action: { setZoom }
    }

    return (
        <GlobalZoomLevelProvider value={value}>{children}</GlobalZoomLevelProvider>
    );

};*/

// const { Consumer: GlobalZoomLevelConsumer } = GlobalZoomLevel;

// export { GlobalZoomLevelProvider };

// export default GlobalZoomLevel;