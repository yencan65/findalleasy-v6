import React, { useMemo, useState } from "react";
import { smartPlaceholders } from "../utils/geoPlaceholders.js";

export default function SearchBar({ locale }){
  const [q,setQ] = useState("");

  const placeholder = useMemo(()=>{
    return smartPlaceholders(locale);
  },[locale]);

  return (
    <div className="searchRow">
      <div className="search" title="Akıllı arama">
        <input
          value={q}
          onChange={(e)=>setQ(e.target.value)}
          placeholder={placeholder}
        />
        <button className="iconBtn" title="Sesli arama (demo)">🎙️</button>
        <button className="iconBtn" title="Görsel arama (demo)">🖼️</button>
      </div>
      <button className="btn" onClick={()=>alert(`Ara: ${q||placeholder}`)}>
        Ara
      </button>
    </div>
  );
}
