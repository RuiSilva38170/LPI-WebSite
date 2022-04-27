import React, { useState, useEffect } from "react";
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';


function DataMapa() {
    const [coordenadas, setCoordenadas] = useState([])

    setInterval(() => {
        axios.get('http://127.0.0.1:5000/mapa')
            .then(res => {
                console.log(res)
                setCoordenadas(res.data.coordenadas)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, 30000)


    return (   
        <div>  

            <MapContainer center={[41.1579448,-8.6291053]} zoom={7}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            {coordenadas.map(coordenada => (
                <Marker position={[coordenada.latitude, coordenada.longitude]}></Marker>
            ))}
            
            </MapContainer>
        </div>
    );


}


export default DataMapa;