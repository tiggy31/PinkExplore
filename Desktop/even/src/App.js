import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import {authorize,getCatgories,searchCatgory} from './api/index'


const App = () => {


  const [cat,setCat] = useState([])
  const [rating,setRating] = useState('')
  const [type,setType] = useState('')
  const [search,setSearch] = useState([])
  const [coordinates,setCoordinates] = useState({})
  const [bounds,setBounds] = useState(null)
  const [childClicked,setChildClicked] = useState('')
  const [isLoading,setLoading] = useState(false)
  const [filteredPlaces,setFilteredPlaces] = useState([])

useEffect(() => {
   navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
        setCoordinates({
          lat: latitude,
          lng: longitude
        })
   })
},[])



  useEffect(() => {
       const filteredPlaces = cat?.businesses?.filter((place) =>Number(place.rating) > rating)
            setFilteredPlaces(filteredPlaces)
            
          
  },[rating])

  

  useEffect(() => {
    if(coordinates.lat && coordinates.lng){
      setLoading(true)
      getCatgories(type,coordinates?.lat,coordinates?.lng)
       .then((data) => {
         console.log(data)
         setCat(data)
         setFilteredPlaces([])
         setLoading(false)
        
       })
    }
                   
  },[type,coordinates,rating])



  // useEffect(() => {
  //           searchCatgory()
  //           .then((data) => {
  //             console.log(data)
             
              
  //           })
          
  // },[])
  return (
    <>
      <CssBaseline />
      <Header  setCoordinates={setCoordinates}/>
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
              rating= {rating}
              type = {type}
              setRating = {setRating}
              setType = {setType}
              cat={filteredPlaces?.length ? filteredPlaces : cat}
              childClicked={childClicked}
              isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Map
          setCoordinates = {setCoordinates}
          coordinates = {coordinates}
          bounds= {bounds}
          setBounds = {setBounds}
          cat={filteredPlaces?.length ? filteredPlaces : cat}
          setChildClicked = {setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;

