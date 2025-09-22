import React from "react";

export default function Maps() {
  return (
    <section id="maps">
      <div className="containers mt-4">
        <div className="card-maps">
          <div className="map-responsive">
            <iframe
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.582889858053!2d107.9540651!3d-7.1654575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b321b369666d%3A0x1bac67958eebf466!2s7%C2%B009'55.7%22S%20107%C2%B057'35.3%22E!5e0!3m2!1sid!2sid!4v1747940000000!5m2!1sid!2sid"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              title="gmap"
            />
          </div>

          <a
            href="https://www.google.com/maps/place/7%C2%B009'55.7%22S+107%C2%B057'35.3%22E/@-7.1640896,107.9540651,15.85z/data=!4m4!3m3!8m2!3d-7.1654575!4d107.9598046?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-maps"
          >
            Buka Maps
          </a>
        </div>
      </div>
    </section>
  );
}
