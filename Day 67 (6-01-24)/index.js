async function getData(){
    let response=await fetch("https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=89e6763cb86394f164f17f237c0c4f24&units=metric");
    let data=await response.json();
    printData(data)
}
function printData(data){
    
}
getData();