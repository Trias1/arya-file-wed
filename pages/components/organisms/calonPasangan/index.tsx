import React from "react";
import { FiInstagram } from "react-icons/fi";
import Image from "next/image";

export default function CalonPasangan() {
  return (
    <section id="calon">
      <div className="containers">
        <div className="calon-cards">
          <div className="text-undangan">
            <p className="arabic-text">
              لَسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
            </p>
            <p className="deskripsi">
              Dengan Memohon Rahmat Dan Ridho Allah Subḥānahu Wa Taʿālā, Yang
              Telah Menciptakan Makhluk-Nya Secara Berpasang-Pasangan, Kami
              Bermaksud Menyelenggarakan Pernikahan Kami.
            </p>
          </div>

          <div className="pengantin">
            <Image
              src="/img/laks.png"
              className="rounded-circle "
              layout="responsive"
              width={50}
              height={50}
              alt="Aryatno Prio Agustino"
            />
            <p className="nama-pengantin">Aryatno Prio Agustino</p>
            <p className="orangtua">
              Putra dari Bapak Radi (Alm) & Ibu Sudinah
            </p>
            {/* <a href="https://www.instagram.com/zulfasyapr/" className="sosmed">
              <FiInstagram />
            </a> */}
          </div>

          <div className="icon-cincin">
            <p className="nama-pasangan">Arya 💍 Ratna</p>
          </div>

          <div className="pengantin">
            <Image
              src="/img/prems.png"
              className="rounded-circle"
              layout="responsive"
              width={50}
              height={50}
              alt="Ratna Juita"
            />
            <p className="nama-pengantin">Ratna Juita</p>
            <p className="orangtua">Putri dari Bapak Bono (Alm) & Ibu Hasanah</p>
            {/* <a href="https://www.instagram.com/tzm_1112/" className="sosmed">
              <FiInstagram />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
