import React from "react";

export default function Vitrin({ items=[], locale }){
  const tips = {
    tr:"Türkiye için fiyat endeksi: benzer",
    en:"Local price index: similar",
    de:"Preisindex lokal: ähnlich",
    ar:"مؤشر الأسعار المحلي: مماثل",
    zh:"本地价格指数：相近"
  }[locale] || "Local price index: similar";

  const dummyIcon = ["▭","⬟","◯","◍","◇","⬢","⬡"];
  const four = items.slice(0,4);

  return (
    <div className="grid">
      {four.map((name, i)=>(
        <div className="card" key={i}>
          <h4>{name}</h4>
          <small>{tips}</small>
        </div>
      ))}
      {four.length===0 && [0,1,2,3].map(i=>(
        <div className="card" key={i}>
          <h4>{["Hotel","Fashion","Food","Flowers"][i]}</h4>
          <small>{tips}</small>
        </div>
      ))}
    </div>
  );
}
