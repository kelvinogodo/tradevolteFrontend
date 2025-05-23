import React from 'react'
import './plan.css'
import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
const Plan = () => {
    const navigate = useNavigate()
    const [withdrawMethods,setWithdrawalMethods] = useState([
      {
        id:1,
        min:'500',
        max:'3,000',
        image:'/btc.png',
        method:'BTC',
        type:'basic plan',
        percent:'15',
        duration:'20 day(s)'
      },
      {
        id:2,
        min:'3,100',
        max:'10,000',
        image:'/bnb.png',
        method:'USDT',
        type:'forex/crypto plan',
        percent:'30',
        duration:'25 day(s)'
      },
      {
        id:3,
        min:'10,100',
        max:'40,000',
        image:'/tron.png',
        method:'tether(TRC20)',
        type:'agro-tech plan',
        percent:'35',
        duration:'30 day(s)'
      },
      {
        id:4,
        min:'40,100',
        max:'90,000',
        image:'/tron.png',
        method:'tether(TRC20)',
        type:'gold-stock plan',
        percent:'45',
        duration:'35 day(s)'
      },
      {
        id:5,
        min:'90,100',
        max:'200,000',
        image:'/tron.png',
        method:'tether(TRC20)',
        type:'oil and gas plan',
        percent:'55',
        duration:'40 day(s)'
      },
      {
        id:6,
        min:'200,100',
        max:'500,000',
        image:'/tron.png',
        method:'tether(TRC20)',
        type:'real estate plan',
        percent:'65',
        duration:'42 day(s)'
      },
      ])
  return (
          <div className='plan-section'>
              <div className="why-choose-us-text-container">
                  <div className="header" data-aos="fade-up">
                      <span className="header-line"></span>
                      <h2>our plans</h2>
                  </div>
                  <h1 data-aos="fade-up">choose an investment plan</h1>
                  <p data-aos="fade-up">choose an investment plan of your choice, but remember , the bigger the investment the bigger the return</p>
              </div>
              <div className="plan-card-container">
              {
            withdrawMethods.map((withdrawmethod) => (
              <div class="pack-container" key={withdrawmethod.id} data-aos="fade-up">
            <div class="pack-header">
              <p class="title">
                {withdrawmethod.type}
              </p>
              <div class="price-container">
                <span>%</span>{withdrawmethod.percent}
                <span>/week</span>
              </div>
            </div>
            <div>
              <ul class="lists">
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                    Instant withdrawal
                  </p>
                </li>
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                    {withdrawmethod.duration} duration
                  </p>
                </li>
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                     referral commission - 10%
                  </p>
                </li>
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                    minimum deposit - ${withdrawmethod.min}
                  </p>
                </li>
                <li class="list">
                  <span>
                    <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>
                  </span>
                  <p>
                    maximum deposit - ${withdrawmethod.max}
                  </p>
                </li>
              </ul>
            </div>
                <div class="buttons-container" onClick={navigate('/login')}>
                  <Link to='/login'>
                    <button type="button">
                    Invest Now
                    </button>
                  </Link>
            </div>
          </div>
          ))}
          </div>
        </div>
      )
    }

export default Plan
