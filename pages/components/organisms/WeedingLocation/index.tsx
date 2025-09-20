import React from "react";
import { BsClock } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

export default function WeedingLocation() {
  return (
    <div id="weddingDate">
      <div className="containers mt-4">
        <div className="card">
          <h2 className="section-titles">Save The Date</h2>

          <div className="card-body">
            <p className="card-subtitle">
              Insya Allah akan diselenggarakan pada:
            </p>

            <div className="save-the-date">
              <span className="day">Rabu</span>
              <div className="date-container">
                <span className="date">8</span>
                <hr className="date-line" />
              </div>
              <span className="month">Oktober</span>
              <span className="year">2025</span>
            </div>

            {/* ✅ Hanya card-wed yang dibungkus oleh card-duo */}
            <div className="card-duo">
              <div className="card-wed">
                <h3 className="card-title">Akad Nikah</h3>
                <div className="event-detail">
                  <BsClock className="icon" />
                  <h4>09.30 - 10.30 WIB</h4>
                </div>
              </div>

              <div className="card-wed">
                <h3 className="card-title">Walimah</h3>
                <div className="event-detail">
                  <BsClock className="icon" />
                  <h4>11.00 - Selesai </h4>
                </div>
              </div>
            </div>

            <div className="event-detail">
              <GoLocation className="icon" />
              {/* <h4>cangkuang</h4> */}
              <h4>
              Kp. Cangkuang Rt 02/04, Desa Bagendit, Kec. Banyuresmi, Kab. Garut
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
