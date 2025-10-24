import React from "react";

const LANGS = ["tr","en","de","ar","zh"];

export default function Header({ locale, setLocale }) {
  return (
    <header className="header">
      <div className="brand">
        <span className="logo" aria-label="snap"></span>
        <span>FindAllEasy</span>
      </div>
      <div className="lang">
        {LANGS.map(l=>(
          <button key={l}
            className={l===locale?"active":""}
            onClick={()=>setLocale(l)}
            title={l.toUpperCase()}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  );
}
