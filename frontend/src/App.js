import React, { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('/api/trending').then(r=>r.json()).then(d=>setData(d.items||[]));
  },[]);
  return (
    <div style={{fontFamily:'sans-serif',padding:40,color:'#222'}}>
      <h1>Findalleasy Global AI</h1>
      <p>Akıllı, global, uygun fiyatlı alışveriş platformu.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,200px)',gap:20}}>
        {data.map(i=>(
          <div key={i._id} style={{border:'1px solid #ccc',borderRadius:8,padding:10}}>
            <h4>{i.title}</h4>
            <p>{i.price} {i.currency}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
