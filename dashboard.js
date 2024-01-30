(function(){
    const data = [
        { currency: "USD", count: 56.8360 },
        { currency: "JPY", count: 0.3801 },
        { currency: "GBP", count: 69.4138 },
        { currency: "HKD", count: 7.2705 },
        { currency: "CHF", count: 63.1651 },
        { currency: "CAD", count: 41.7758 },
        { currency: "SGD", count: 41.5468 },
        { currency: "AUD", count: 36.0170 },
        { currency: "BHD", count: 151.0792 },
        { currency: "KWD" },
        { currency: "SAR", count: 15.1526 },
        { currency: "BND", count: 41.3955 },
        { currency: "IDR", count: 0.0036 },
        { currency: "THB", count: 1.5683 },
        { currency: "AED", count: 15.4757 },
        { currency: "EUR", count: 60.0245 },
        { currency: "KRW", count: 0.0422 },
        { currency: "CNY", count: 7.7743 },
       
    ];

    new Chart(
      document.getElementById('myChart'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.currency),
          datasets:[
            {
              label: 'PHP Equivalent',
              data: data.map(row => row.count)
            }
          ]
        }
    }
    );
})();