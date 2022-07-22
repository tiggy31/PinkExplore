import axios from 'axios'


export const getPlacesData = async(type,sw,ne) => {
    try{

        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
          params: {
            bl_latitude: sw?.lat,
            tr_latitude: ne?.lat,
            bl_longitude: sw?.lng,
            tr_longitude: ne?.lng,
          },
          headers: {
            'X-RapidAPI-Key': '93ebc2627emshe1d4c14676088efp1ed571jsn5d02fc893cb5',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        })

        
        return data
    }catch(error){
      console.log(error)
    }
}

