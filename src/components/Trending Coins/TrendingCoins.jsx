import React from 'react';
import useTrendingCoins from '../../hooks/useTrendingCoins';

const TrendingCoins = () => {
  const { trendingCoins, loading, error } = useTrendingCoins(3);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container px-4 py-8  bg-white rounded-lg ">
      <h4 className="mb-4 text-xl font-semibold">Trending Coins (24h)</h4>
      <div className="space-y-4">
        {trendingCoins.map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center rounded-full">
              <img src={coin.item.large} alt={coin.item.name} className="h-8 w-8 mr-2" />
              <div className='flex items-center font-bold'>
                <p className="text-base font-medium">{coin.item.name}</p>
                <p className="text-sm ">({coin.item.symbol.toUpperCase()})</p>
              </div>
            </div>
            <div>
              <p className="text-base font-medium bg-green-200 h-7 w-20 text-darkgreen text-center rounded-lg"><i className="bi bi-caret-up-fill"></i>{coin?.item?.data?.price_change_percentage_24h?.inr.toFixed(2)}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
