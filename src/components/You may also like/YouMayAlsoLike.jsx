import React, { useRef } from 'react';
import useTrendingCoins from '../../hooks/useTrendingCoins';

const YouMayAlsoLike = () => {
    const { trendingCoins, loading, error } = useTrendingCoins(15);
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 200;
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 200;
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="relative pb-15 bg-white px-4 p-2 rounded-md ">
            <h1 className='text-2xl font-bold my-4'>You may also like</h1>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center" onClick={scrollLeft}>
            <i className="bi bi-chevron-left"></i>
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full h-8 w-8 flex items-center justify-center" onClick={scrollRight}>
            <i className="bi bi-chevron-right"></i>
            </button>
            <div ref={scrollContainerRef} className="overflow-x-hidden whitespace-nowrap">
                {trendingCoins.map((coin) => (
                    <div key={coin.item.id} className="inline-block mr-4 border-2 h-40 w-56 rounded-md p-3">
                        <div className='flex items-center space-x-2'>
                            <img src={coin.item.large} alt={coin.item.name} className="h-8 w-8 rounded-full" />
                            <p className="text-sm font-semibold">{coin.item.symbol.toUpperCase()}</p>
                            <p className={`text-sm rounded-md ${coin?.item?.data?.price_change_percentage_24h?.inr >= 0 ? '+ text-green-500 bg-green-300' : '- text-red-500 bg-red-300'}`}>
                                {coin?.item?.data?.price_change_percentage_24h?.inr.toFixed(2)}%
                            </p>
                        </div>
                        <p className="text-l mt-2 font-bold">{coin.item.data.price}</p>
                        <img src={coin.item.data.sparkline} alt={coin.item.name} className="mt-2 h-16" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouMayAlsoLike;
