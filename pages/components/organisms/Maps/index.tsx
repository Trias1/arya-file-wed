import React from "react";

export default function Maps() {
  return (
    <section id="maps">
      <div className="containers mt-4">
        <div className="card-maps">
          <div className="map-responsive">
            <iframe
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31630.587510698473!2d107.9475996!3d-7.1660922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b321b369666d%3A0x1bac67958eebf466!2sCangkuang!5e0!3m2!1sid!2sid!4v1747460000000!5m2!1sid!2sid"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              title="gmap"
            />
          </div>

          <a
            href="https://www.google.com/maps/place/cangkuang/@-7.1658731,107.9575996,17z/data=!4m6!3m5!1s0x2e68b321b369666d:0x1bac67958eebf466!8m2!3d-7.1660922!4d107.9585639!16s%2Fg%2F11pcmy6g1q!5m1!1e1?entry=ttu"
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
