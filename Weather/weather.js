let apiKey = "948d1cf38628deee0bbc5ae988e8ebbf";
let city = "chennai";

let temp = document.getElementById("temp");
let cityy = document.getElementById("city");
let speed = document.getElementById("speed");
let humi = document.getElementById("humi");
let inp = document.getElementById("inp-data");
let wdata = document.getElementById("w-data");

function change() {
  city = inp.value;
  inp.value = "";
  getData();
}

async function getData() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const data = await fetch(url);
  const datas = await data.json();
  console.log(datas);
  let sup = document.createElement("sup");
  temp.innerHTML = Math.round(datas.main.temp);
  sup.innerHTML = "o";
  temp.append(sup);
  temp.innerHTML += "C";
  wdata.innerHTML = datas.weather[0].main;
  cityy.innerHTML = datas.name + " " + datas.sys.country;
  speed.innerHTML = datas.wind.speed + " km/h";
  humi.innerHTML = datas.main.humidity + "%RH";
}
getData();
