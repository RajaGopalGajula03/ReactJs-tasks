import React, { useEffect, useState } from 'react';
import './cryptocurrency.css';
import Loader from './Loader';

export default function Currency() {
  const [cryptoList, setCryptoList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getCryptoList();
  }, []);

  const getCryptoList = async () => {
    setLoader(true);
    const response = await fetch('https://apis.ccbp.in/crypto-currency-converter');
    const data = await response.json();
    setCryptoList(data);
    setLoader(false);
  };

  return (
    <div className='crypto-bg'>
      <div className='crypto-list'>
        <h1 className='crypto-heading'>Cryptocurrency Tracker</h1>
        <img className='crypto-image' src='https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png' alt='cryptocurrency'></img>
        <div className='table-div'>
        <table>
          <thead className='w-100'>
            <tr>
              <th className='pl-5'>Coin Type</th>
              <th className=''>USD</th>
              <th className=''>EURO</th>
            </tr>
          </thead>
          <tbody>
            {loader ? (
              <tr>
                <td colSpan="3">
                  <Loader />
                </td>
              </tr>
            ) : (
              cryptoList.map((crypto) => (
                <tr key={crypto.id}>
                  <td className='pl-5 title-text'>
                    <img className='currency-logo' src={crypto.currency_logo} alt='currency-logo' /> {crypto.currency_name}
                  </td>
                  <td className='usd'>{crypto.usd_value}</td>
                  <td className='euro'>{crypto.euro_value}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
