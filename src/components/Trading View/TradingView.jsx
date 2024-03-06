import React, { useEffect, useRef, memo } from 'react';

function TradingView() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "height": "500",
        "autosize": true,
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "D",
        "timezone": "Asia/Kolkata",
        "theme": "light",
        "style": "2",
        "locale": "en",
        "enable_publishing": false,
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "gridColor": "rgba(17, 85, 204, 0.06)",
        "hide_top_toolbar": true,
        "hide_legend": true,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);

    return () => {
      container.current.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full lg:w-1/3" ref={container} style={{ height: "100%", width: "100%" }}>
      <h1 className='text-2xl bg-white font-bold p-2'>Bitcoin Price Chart (USD)</h1>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

export default memo(TradingView);
