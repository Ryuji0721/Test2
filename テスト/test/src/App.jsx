import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import storeData from './storeData.json'

function App() {
  const [selectedRegion, setSelectedRegion] = useState('Tohoku');
  const [stores, setStores] = useState(storeData.regions.Tohoku); // 初期の店舗情報（東北）

  // 地域が変更されたときに店舗情報を更新する関数
  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    setStores(storeData.regions[region]); // 地域に対応する店舗データを取得
  };

  return (
    <div className="Tempo">
      <h1>店舗情報</h1>

      <div>
        <h2>{selectedRegion}の店舗</h2>
        <ul>
          {stores.length > 0 ? (
            stores.map((store, index) => (
              <li key={index}>
                <strong>{store.storeName}</strong><br />
                {store.address}<br />
                {store.phoneNumber}
              </li>
            ))
          ) : (
            <p>店舗情報が見つかりません。</p>
          )}
        </ul>
      </div>
      <select value={selectedRegion} onChange={handleRegionChange}>
        <option value="Tohoku">東北</option>
        <option value="Kanto">関東</option>
        <option value="Kansai">関西</option>
      </select>
    </div>
  );
}


export default App
