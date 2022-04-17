var input = document.querySelector('.city_name');
var main = document.querySelector('#city-name');
var temp = document.querySelector('.temperature');
var desc = document.querySelector('.description');
var sky = document.querySelector('.sky');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
  //My Unique API Key is used
 fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=02be29465d116d56009066eccace8a9c')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Weather Condition - "+descValue;
  temp.innerHTML = "Temperature - "+parseInt(tempValue-273.15)+"\xB0C";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
