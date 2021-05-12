GetByIpAddress = async () => {
  const ipAddress = await document.getElementById("search").value;
  url = `https://geo.ipify.org/api/v1?apiKey=at_ExfTsjuPHTmDNVCH4pxqis1sRpGLv&ipAddress=${ipAddress}`;
  try {
    const response = await axios.get(url);
    const location = response.data.location.city;
    const timeZone = `UTC ${response.data.location.timezone}`;
    const isp = response.data.isp;
    document.getElementsByClassName("card")[0].innerHTML = `
    <div class="card__chard">
      <p class="card__title">IP ADDRESS</p>
      <p class="card__value">${ipAddress}</p>
    </div>
    <div class="card__chard">
      <p class="card__title">LOCATION</p>
      <p class="card__value">${location}</p>
    </div>
    <div class="card__chard">
      <p class="card__title">TIMEZONE</p>
      <p class="card__value">${timeZone}</p>
    </div>
    <div class="card__chard">
      <p class="card__title">ISP</p>
    <p class="card__value">${isp}</p>
    </div>`;
    SetViewMap(response.data.location.lat, response.data.location.lng);
  } catch (error) {
    console.log(error);
  }
};
SetViewMap = async (lat, lng) => {
  document.getElementById("weathermap").innerHTML =
    "<div id='map' style='width: 100%; height: 100%; z-index: 0'></div>";
  try {
    let mymap = new L.map("map").setView([lat, lng], 13);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiZHJlYW1sb2NrZWQiLCJhIjoiY2tvazY5NjllMDFsNzJvcnNwMDY1d2xnaiJ9.418mA_589_BtsA-nV0afkA",
      }
    ).addTo(mymap);

    const myIcon = L.icon({
      iconUrl: "./images/icon-location.svg",
      iconSize: [30, 39],
    });
    L.marker([lat, lng], { icon: myIcon }).addTo(mymap);
  } catch (error) {
    console.log(error);
  }
};
