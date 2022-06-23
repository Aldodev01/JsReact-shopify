import React from "react";

const Location = () => {
  return (
    <div className="w-screen mb-[60px] relative" id="map">
      <iframe
        width="100%"
        height="500"
        frameBorder="0"
        title="mapFurger"
        scrolling="no"
        marginWidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Jakarta+(Jakarta)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>{" "}
      <script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
        defer
      ></script>
    </div>
  );
};

export default Location;
