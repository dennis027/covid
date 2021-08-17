"use strict";

function initMap() {
  const componentForm = [
    'location',
    'locality',
    'administrative_area_level_1',
    'country',
    'postal_code',
  ];

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: {
      lat: 37.4221,
      lng: -122.0841
    },
    mapTypeControl: false,
    fullscreenControl: true,
    zoomControl: true,
    streetViewControl: true
  });
  const marker = new google.maps.Marker({
    map: map,
    draggable: false
  });
  const autocompleteInput = document.getElementById('location');
  const autocomplete = new google.maps.places.Autocomplete(autocompleteInput);
  autocomplete.addListener('place_changed', function () {
    marker.setVisible(false);
    const place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert('No details available for input: \'' + place.name + '\'');
      return;
    }
    renderAddress(place);
    fillInAddress(place);
  });

  function fillInAddress(place) { // optional parameter
    const addressNameFormat = {
      'street_number': 'short_name',
      'route': 'long_name',
      'locality': 'long_name',
      'administrative_area_level_1': 'short_name',
      'country': 'long_name',
      'postal_code': 'short_name',
    };
    const getAddressComp = function (type) {
      for (const component of place.address_components) {
        if (component.types[0] === type) {
          return component[addressNameFormat[type]];
        }
      }
      return '';
    };
    document.getElementById('location').value = getAddressComp('street_number') + ' ' +
      getAddressComp('route');
    for (const component of componentForm) {
      // Location field is handled separately above as it has different logic.
      if (component !== 'location') {
        document.getElementById(component).value = getAddressComp(component);
      }
    }
  }

  function renderAddress(place, lat, lng) {
    map.setCenter(place.geometry.location);
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var lat = place.geometry.location.lat(),
      lng = place.geometry.location.lng();
    console.log(lat, lng);


    // document.getElementById("coordinates").innerHTML = (lat+ "," +lng);
    document.getElementById("coordinates").value = (lat + "," + lng);
  }
}

function store() {
  refreshPage()
  var address = document.getElementById("location").value;
  var coordinates = document.getElementById("coordinates").value;
  var locality = document.getElementById("locality").value
  localStorage.setItem("address", address);
  localStorage.setItem("coordinates", coordinates);
  localStorage.setItem("locality", locality);

  var storedlocation = localStorage.getItem("address")
  var storedcoord = localStorage.getItem("coordinates");
  var storedcity = localStorage.getItem("locality")

  document.getElementById("coordinates").value = (storedcoord);
  document.getElementById("location").value = (storedlocation)
  document.getElementById("locality").value = (storedcity)
}

function refreshPage() {
  location.reload();
}
