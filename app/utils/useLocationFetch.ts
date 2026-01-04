export default function useGetUserCurrentLocation() {
  const options = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;

    localStorage.setItem("latitude", crd.latitude);
    localStorage.setItem("longitude", crd.longitude);
    return crd;
  }

  function error(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.error("User denied the request for geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.error("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.error("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.error("An unknown error occurred.");
        break;
    }
  }

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
}
