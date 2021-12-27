const API_KEY_WEATHER = '7c80216fbac9de2aecb35261d97fbb3d';
const URL = "https://api.openweathermap.org/data/2.5/weather?";
const CITY = 'q=Tokyo'; 

$.ajax({
    url: URL + CITY + ',jp&units=metric&appid=' + API_KEY_WEATHER,
    type: "GET",
    success: function(data) {

        let htmltext = "";  // 表示するHTML   HTML to be shown

        let weather = data.weather[0].main;   //電気
        let city = data.name;   // 都市名
        let maxTemp = data.main.temp_max; //最高気温
        let minTemp = data.main.temp_min; //最低気温
        let temp_now = data.main.temp; //現在の気温
        let dateObj = new Date();    //Dateオブジェクト作成  make a Date object
        dateObj.setTime(Number(data.dt) * 1000); //取得したdtをセット set "dt" to the object
        let month = dateObj.getMonth();  // 月を取り出し。ただし1月が0  Jan. is 0.
        let date = dateObj.getDate();    // 日を取り出し
        let hours = dateObj.getHours();  // 時を取り出し
        let minutes = dateObj.getMinutes();  // 分を取り出し
        let humidity = data.main.humidity//現在の湿度


        // 以下でHTMLを作成   build HTML below


        
        
        var body = document.getElementById( 'midashi2' );
        if (weather=="Rain"){

            if ( temp_now> 35) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(150, 0, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(120, 100, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(0, 0, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(0, 200, 255, 0.6)) ,url(rainy_01.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(255, 255, 255, 0.6)) ,url(rainy_01.png)';
                }
                
            }
            if ( temp_now> 30) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(150, 0, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(120, 100, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(0, 0, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(0, 200, 255, 0.6)) ,url(rainy_01.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(255, 255, 255, 0.6)) ,url(rainy_01.png)';
                }
                
            }
            else if ( temp_now> 25) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(150, 0, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(120, 100, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(0, 0, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(0, 200, 255, 0.6)) ,url(rainy_01.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(255, 255, 255, 0.6)) ,url(rainy_01.png)';
                }
                
            }
            else if ( temp_now> 20) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(150, 0, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(120, 100, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(0, 0, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(0, 200, 255, 0.6)) ,url(rainy_01.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(255, 255, 255, 0.6)) ,url(rainy_01.png)';
                }
                
            }
            else {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(150, 0, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(120, 100, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(0, 0, 255, 0.6)) ,url(rainy_01.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(0, 200, 255, 0.6)) ,url(rainy_01.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(255, 255, 255, 0.6)) ,url(rainy_01.png)';
                }
                
            }
        }
        else if (weather=="Clouds"){

            if ( temp_now> 35) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(150, 0, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(120, 100, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(0, 0, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(0, 200, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(255, 255, 255, 0.6)) ,url(cloudy_02.png)';
                }
                
            }
            if ( temp_now> 30) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(150, 0, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(120, 100, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(0, 0, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(0, 200, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(255, 255, 255, 0.6)) ,url(cloudy_02.png)';
                }
                
            }
            else if ( temp_now> 25) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(150, 0, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(120, 100, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(0, 0, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(0, 200, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(255, 255, 255, 0.6)) ,url(cloudy_02.png)';
                }
                
            }
            else if ( temp_now> 20) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(150, 0, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(120, 100, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(0, 0, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(0, 200, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(255, 255, 255, 0.6)) ,url(cloudy_02.png)';
                }
                
            }
            else {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(150, 0, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(120, 100, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(0, 0, 255, 0.6)) ,url(cloudy_02).png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(0, 200, 255, 0.6)) ,url(cloudy_02.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(255, 255, 255, 0.6)) ,url(cloudy_02.png)';
                }
                
            }
        }
        else if (weather=="Clear"){

            if ( temp_now> 35) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(150, 0, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(120, 100, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(0, 0, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(0, 200, 255, 0.6)) ,url(sunny_01.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(255, 255, 255, 0.6)) ,url(sunny_01.png)';
                }
                
            }
            if ( temp_now> 30) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(150, 0, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(120, 100, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(0, 0, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(0, 200, 255, 0.6)) ,url(sunny_01.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(255, 255, 255, 0.6)) ,url(sunny_01.png)';
                }
                
            }
            else if ( temp_now> 25) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(150, 0, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(120, 100, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(0, 0, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(0, 200, 255, 0.6)) ,url(sunny_01.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(255, 255, 255, 0.6)) ,url(sunny_01.png)';
                }
                
            }
            else if ( temp_now> 20) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(150, 0, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(120, 100, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(0, 0, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(0, 200, 255, 0.6)) ,url(sunny_01.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(255, 255, 255, 0.6)) ,url(sunny_01.png)';
                }
                
            }
            else {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(150, 0, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(120, 100, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(0, 0, 255, 0.6)) ,url(sunny_01.png)';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(0, 200, 255, 0.6)) ,url(sunny_01.png)';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(255, 255, 255, 0.6)) ,url(sunny_01.png)';
                }
                
            }
        }
        else {
            htmltext += '<h4>' + weather + '</h4>';
            if ( temp_now> 35) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(150, 0, 255, 0.6)) ';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(120, 100, 255, 0.6)) ';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(0, 0, 255, 0.6)) ';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(0, 200, 255, 0.6)) ';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 0, 0, 0.6), rgba(255, 255, 255, 0.6)) ';
                }
                
            }
            if ( temp_now> 30) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(150, 0, 255, 0.6)) ';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(120, 100, 255, 0.6)) ';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(0, 0, 255, 0.6)) ';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(0, 200, 255, 0.6)) ';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 165, 0, 0.6), rgba(255, 255, 255, 0.6)) ';
                }
                
            }
            else if ( temp_now> 25) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(150, 0, 255, 0.6)) ';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(120, 100, 255, 0.6)) ';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(0, 0, 255, 0.6)) ';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(0, 200, 255, 0.6)) ';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(255, 255, 0, 0.6), rgba(255, 255, 255, 0.6)) ';
                }
                
            }
            else if ( temp_now> 20) {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(150, 0, 255, 0.6)) ';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(120, 100, 255, 0.6)) ';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(0, 0, 255, 0.6)) ';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(0, 200, 255, 0.6)) ';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 0, 0.6), rgba(255, 255, 255, 0.6)) ';
                }
                
            }
            else {
                if(humidity > 80){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(150, 0, 255, 0.6)) ';
                }
                else if (humidity > 70){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(120, 100, 255, 0.6)) ';
                }
                else if (humidity > 60){
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(0, 0, 255, 0.6)) ';
                }
                else if (humidity > 50) {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(0, 200, 255, 0.6)) ';
                }
                else {
                    body.style.background = '-webkit-linear-gradient(0deg, rgba(0, 255, 255, 0.6), rgba(255, 255, 255, 0.6)) ';
                }
                
            }
        }


        document.getElementById("weather2").innerHTML = htmltext;


    }
});
