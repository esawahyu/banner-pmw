"use client";

import { useState } from "react";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  const [nama, setNama] = useState("Muh Esa Wahyu Pratama Yusuf");
  const [newNama, setNewNama] = useState("");

  function handlerGantiNama() {
    setNama(newNama);
  }

  function handleInputChange(event) {
    setNewNama(event.target.value);
  }

  return (
    <div className="body">
      <div className="banner-container">
        {/* Kartunya */}
        <div className="header-banner-wrapper">
          {/* Foto Profil dan Nama */}
          <div className="profile-header-banner">
            {/* Foto Profil*/}
            <Image
              src="/Assets/genos.png"
              alt="Picture of the author"
              fill
              objectFit="contain"
            />
          </div>
          <div className="content-header-banner">
            {/* Nama dan Kawan2*/}
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
              {/* NIM dan BIO*/}
              <p>D121211010</p>
              <p>Murid Saitama</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
          <div>
            <input type="text" value={newNama} onChange={handleInputChange} />
          </div>
          <div
            className="cta-button"
            style={{
              marginTop: "12px",
            }}
            onClick={handlerGantiNama}
          >
            <p>Ganti Nama</p>
          </div>
        </div>
      </div>
    </div>
  );
}