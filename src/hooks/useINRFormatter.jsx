import { useState, useEffect } from 'react';

const useINRFormatter = (amount) => {
  const [formattedAmount, setFormattedAmount] = useState('');

  const formatINR = (amount) => {
    if (amount !== undefined) {
      const strAmount = amount.toString();
      if (amount >= 100000) {
        const formatted = strAmount.slice(0, -5) + ',' + strAmount.slice(-5, -3) + ',' + strAmount.slice(-3);
        return formatted;
      } else {
        const formatted = strAmount.slice(0, -3) + ',' + strAmount.slice(-3);
        return formatted;
      }
    } else {

      return '';
    }
  };

  useEffect(() => {
    const formatted = formatINR(amount);
    setFormattedAmount(formatted);
  }, [amount]);
  return formattedAmount;
};

export default useINRFormatter;
