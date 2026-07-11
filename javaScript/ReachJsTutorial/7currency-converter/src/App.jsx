import { useState } from 'react'
import bgImage from './assets/bg.jpg'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/userCurrencyInfo.js'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      {/* Google Flex Font — Roboto Flex (variable weight) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');
        * {
          font-family: 'Roboto Flex', sans-serif;
        }
      `}</style>

      <div
        className="w-full min-h-screen flex flex-wrap lg:flex-nowrap justify-center items-center gap-10 bg-cover bg-no-repeat px-6 py-10"
        style={{
          backgroundImage: 'url("https://img.magnific.com/premium-photo/abstract-glowing-candlestick-forex-chart-with-index-grid-dark-background-invest-trade-finance-ans-stock-market-concept-3d-rendering_670147-7364.jpg?semt=ais_hybrid&w=740&q=80")'
        }}
      >
        {/* LEFT SIDE — Finance Illustration */}
        <div className="hidden lg:flex w-full max-w-xl items-center justify-center">
          <svg
            viewBox="0 0 500 420"
            className="w-full h-auto drop-shadow-2xl"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="coinGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFD966" />
                <stop offset="100%" stopColor="#F5A623" />
              </linearGradient>
              <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4F7CFF" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
              <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>

            {/* Floating platform / shadow */}
            <ellipse cx="250" cy="390" rx="170" ry="18" fill="#000" opacity="0.08" />

            {/* Bar chart */}
            <rect x="60" y="230" width="34" height="120" rx="6" fill="url(#barGrad)" opacity="0.85" />
            <rect x="105" y="190" width="34" height="160" rx="6" fill="url(#barGrad)" />
            <rect x="150" y="140" width="34" height="210" rx="6" fill="url(#barGrad)" opacity="0.95" />

            {/* Trend line with arrow */}
            <polyline
              points="60,220 105,180 150,130 200,90 260,60"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polygon points="260,60 245,66 255,78" fill="#0EA5E9" />

            {/* Credit card */}
            <g transform="translate(230,190) rotate(-8)">
              <rect x="0" y="0" width="170" height="105" rx="14" fill="url(#cardGrad)" />
              <rect x="18" y="24" width="34" height="24" rx="4" fill="#FFD966" />
              <rect x="18" y="70" width="80" height="8" rx="4" fill="#ffffff" opacity="0.8" />
              <rect x="18" y="84" width="50" height="6" rx="3" fill="#ffffff" opacity="0.5" />
              <circle cx="145" cy="30" r="14" fill="#ffffff" opacity="0.25" />
            </g>

            {/* Coin stack */}
            <g>
              <ellipse cx="380" cy="300" rx="46" ry="14" fill="url(#coinGrad)" />
              <ellipse cx="380" cy="284" rx="46" ry="14" fill="url(#coinGrad)" />
              <ellipse cx="380" cy="268" rx="46" ry="14" fill="url(#coinGrad)" />
              <ellipse cx="380" cy="252" rx="46" ry="14" fill="#FFE28A" />
              <text x="380" y="258" textAnchor="middle" fontSize="16" fontWeight="700" fill="#8A5A00">$</text>
            </g>

            {/* Currency exchange arrows */}
            <g transform="translate(330,90)">
              <circle cx="0" cy="0" r="42" fill="#ffffff" opacity="0.9" />
              <path d="M -18 -6 A 20 20 0 1 1 -18 6" stroke="#4F7CFF" strokeWidth="4" fill="none" strokeLinecap="round" />
              <polygon points="-18,-14 -18,2 -4,-6" fill="#4F7CFF" />
              <text x="0" y="6" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1E3A8A">₹ $</text>
            </g>

            {/* Small floating dots for depth */}
            <circle cx="40" cy="80" r="6" fill="#4F7CFF" opacity="0.5" />
            <circle cx="430" cy="180" r="8" fill="#34D399" opacity="0.5" />
            <circle cx="90" cy="130" r="4" fill="#F5A623" opacity="0.6" />
          </svg>
        </div>

        {/* RIGHT SIDE — Converter Box */}
        <div className="w-full max-w-md">
          <div className="w-full border border-white/40 rounded-2xl p-6 backdrop-blur-md bg-white/30 shadow-2xl ">
            <h1 className="text-xl font-semibold text-amber-300 mb-4 tracking-tight ">
              Currency Converter
            </h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-blue-600 text-white px-3 py-1 shadow-lg hover:bg-blue-700 transition-colors"
                  onClick={swap}
                >
                  ⇅ swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium px-4 py-3 rounded-lg shadow-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App