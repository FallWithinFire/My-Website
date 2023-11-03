function initMap() {
  const coordinates = { lat: 51.507351, lng: -0.127758 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: coordinates,
  });

  // adds marker for the coordinates
  const marker = new google.maps.Marker({
    position: coordinates,
    map: map,
  });

  // puts a circle around the coordinates
  const circle = new google.maps.Circle({
    strokeColor: "purple",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FFF",
    fillOpacity: 0.5,
    map,
    center: coordinates,
    radius: 800,
  });

  // shows the coordinates of where the viewer clicked
  map.addListener("click", (e) => {
    alert(
      "You clicked the map at " + JSON.stringify(e.latLng.toJSON(), null, 2)
    );
  });
}

window.initMap = initMap;
