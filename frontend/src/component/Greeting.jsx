import React from "react";

function mood(){
  const h = new Date().getHours();
  if (h < 11) return {emo:"🌞", text:"Günaydın"};
  if (h < 16) return {emo:"🌤️", text:"İyi öğlenler"};
  if (h < 21) return {emo:"🌙", text:"İyi akşamlar"};
  return {emo:"😴", text:"İyi geceler"};
}

export default function Greeting(){
  const {emo, text} = mood();
  return (
    <div className="greeting">
      <span className="emo">{emo}</span>
      <small>{text} — iyi akşamlar/yemek/seyahat fırsatlarını vitrinde bulabilirsiniz.</small>
    </div>
  );
}
