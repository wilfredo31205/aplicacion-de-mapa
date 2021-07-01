


import React from 'react'


import  { SocketProvider } from './Context/SocketContext';

import {  MapaPages } from './pages/MapaPages';



export const MapasApp = () => {




    return (

          <SocketProvider>



           <MapaPages/>

              
         </SocketProvider>
                



     
    )
}
