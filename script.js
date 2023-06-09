$("document").ready(function(){

    
const apiKey = "5141ef7ef5680f2e404364a539923aec";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city)
  {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

      if(response.status==404){
         $(".error").css("display","block");
         $(".weather").css("display","none");
      }
      else{
         var data = await response.json();

         console.log(data);
         document.querySelector(".city").innerHTML = data.name;
         document.querySelector(".temp").innerHTML =  Math.round( data.main.temp) + "°C";
         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
         document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
   
        if(data.weather[0].main == "Clouds"){
           $(".weather-icon").attr("src","images/weather-images/clouds.png")
        } 
        else  if(data.weather[0].main == "Clear"){
           $(".weather-icon").attr("src","images/weather-images/clear.png")
        } 
        else  if(data.weather[0].main == "Rain"){
           $(".weather-icon").attr("src","images/weather-images/rain.png")
        } 
        else  if(data.weather[0].main == "Drizzle"){
           $(".weather-icon").attr("src","images/weather-images/drizzle.png")
        } 
        else  if(data.weather[0].main == "Mist"){
           $(".weather-icon").attr("src","images/weather-images/mist.png")
   
        } 
   
        $(".weather").css("display","block");
        $(".error").css("display","none");

      }


  }

     $("button").click(function(){
        checkWeather($("input").val());  
     });
    
});