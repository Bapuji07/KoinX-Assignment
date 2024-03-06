import React, { useEffect, useState } from 'react';
import TradingView from '../Trading View/TradingView';
import useINRFormatter from '../../hooks/useINRFormatter'

const Chart = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const INRFormatter = useINRFormatter(bitcoinData?.inr)

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true');
        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    };

    fetchBitcoinPrice();
  }, []);

  return (
    <div className="container px-4 py-8 lg:w-2/3 w-full lg:left-0">
      <h4 className="mb-4">Cryptocurrencies&gt;<b>Bitcoin</b></h4>
      {bitcoinData && (
        <div>
          <div className='bg-white space-x-4 p-5 flex items-center '>
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="" style={{ height: '30px' }} /> <span className='text-3xl font-semibold'>Bitcoin</span><span>BTC</span><span className='bg-gray-600 p-1 text-white text-center rounded-lg'>Rank #1</span>
          </div>
          <div className=" flex bg-white rounded-md p-4 ">
            <div>
              <p className="text-2xl font-bold mb-2">${bitcoinData.usd.toLocaleString()}</p>
              <p className="text-sm font-semibold mb-2">₹{INRFormatter}</p>
            </div>
            <div className='flex'>
              <p className="text-m ml-7 bg-green-200 h-7 w-20 text-darkgreen text-center rounded-lg "><i className="bi bi-caret-up-fill"></i>{bitcoinData.usd_24h_change.toFixed(2)}% </p><span className='text-m'>(24H)</span>
            </div>
          </div>
          <TradingView />

        </div>

      )}
    </div>
  );
};

export default Chart;
