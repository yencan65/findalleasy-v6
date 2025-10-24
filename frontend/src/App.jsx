import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Greeting from "./components/Greeting.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Vitrin from "./components/Vitrin.jsx";
import Footer from "./components/Footer.jsx";
import AssistantFab from "./components/AssistantFab.jsx";

export default function App(){
  const [locale, setLocale] = useState(navigator.language?.slice(0,2) || "en");
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    // İlk yüklemede vitrin önerilerini çek
    fetch("/api/suggestions",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ locale })
    }).then(r=>r.json()).then(d=> setCards(d.items || []));
  },[locale]);

  return (
    <div className="container">
      <Header locale={locale} setLocale={setLocale}/>
      <section className="hero">
        <div className="slogan">
          <span> { /* canlı kısım */ } </span>
          <strong className="accent">
            {/* kısa ve yaşayan, vizyona uygun */}
            {/* dil dosyalarıyla yönetiliyor */}
            {/* i18n yoksa fallback: */}
            {{"tr":"Yazman yeterli, gerisini biz hallederiz.",
              "de":"Schreib es – wir erledigen den Rest.",
              "ar":"اكتب فقط، ونحن نتولى الباقي.",
              "zh":"你只需输入，其余交给我们。",
              "en":"Just type it — we handle the rest."}[locale] || "Just type it — we handle the rest."}
          </strong>
        </div>

        <SearchBar locale={locale} />

        <Greeting />

        <Vitrin items={cards} locale={locale}/>
      </section>

      <Footer />

      <AssistantFab onClick={()=>alert("🫰 Akıllı Asistan: Önerileri vitrine yansıttım!")} />
    </div>
  );
}
