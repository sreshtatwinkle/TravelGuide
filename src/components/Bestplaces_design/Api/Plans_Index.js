import axios from "axios";

const Url = 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng';

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng',
  params: {
    longitude: '109.19553',
    latitude: '12.235588',
  },
  headers: {
    'X-RapidAPI-Key': '6e2144aff4msh222cad2f859ddcep14ddf0jsn7b8037eebccf',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};



export const Getattractiondata = async() =>{
    try{
        const {data:{data}} = await axios.get(Url,options);

        return data;

    }catch(error){
        console.log(error);
    }
}