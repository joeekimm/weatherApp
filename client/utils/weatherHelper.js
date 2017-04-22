import axios from 'axios';


var grabWeather = function(value, callback){
  var city = value;
  if(city.includes(' ')) {
    city = city.replace(/\s/g, '%20');
  }
  axios.get("https://api.weatherbit.io/v1.0/current/geosearch?city=" + city + "&key=0412017be60d4723a7d9fa494d2c4981")
  .then((response) => {
    callback(JSON.parse(response.request.response));
  })
  .then(axios.post('http://127.0.0.1:8080/weather'))
  .catch((error) => console.log(error));
};

export default grabWeather;
