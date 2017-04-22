import React from 'react';
import axios from 'axios';
import WeatherContainer from './WeatherContainer';
import grabWeather from '../utils/weatherHelper';
import InputCity from './InputCity';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state =  {
      city_name: "",
      weather: "",
      temperature: ""
    };
  }

  setWeather(res) {
    console.log(res.data, 'hiiii');
    this.setState({ city_name: res.data[0].city_name,
                    weather: res.data[0].weather.description,
                    temperature: res.data[0].temp});
  }

grabWeather(value, callback){
  console.log(value, 'HIIIIIIII');
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

  render(){
    console.log(this.state.weather);
    return(
      <div>
        <h1>{this.state.weather} {this.state.city_name}</h1>
       
        <InputCity jason={'hi'} grabWeather={this.grabWeather.bind(this)} setWeather={this.setWeather.bind(this)}/>
      </div>
    );
  }
};



export default App;