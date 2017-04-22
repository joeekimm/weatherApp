import React from 'react';
import { Form, FormGroup, Button, ControlLabel, FormControl } from 'react-bootstrap/lib';



var InputCity = function(props){

  console.log('props ', props.setWeather, props.grabWeather);
let cityInfo = {
  city: '',
}
//  console.log(JSON.stringify(props.grabWeather));
  return (
    <div>
      
        <input onChange={(input) => cityInfo.city = input.target.value }/>
       

    <Button type="submit" onClick={
      (e) => {

      e.preventDefault();
      props.grabWeather(cityInfo.city, props.setWeather);
     
      }}
      >
    </Button>
      
    </div>
  );
};


export default InputCity;