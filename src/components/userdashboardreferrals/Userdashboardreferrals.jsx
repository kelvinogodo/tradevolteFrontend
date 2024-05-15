import React, {useState,useEffect,useRef}from 'react'
import { useNavigate } from 'react-router-dom'
import {MdOutlineContentCopy,MdOutlineDone} from 'react-icons/md'
import Userdashboardheader from '../userdashboardheader/Userdashboardheader'
import './userdashboardreferrals.css'
const Userdashboardreferrals = ({route}) => {
  const [clipBoard, setClipBoard] = useState(false)
  const [loader,setLoader] = useState(false)
    const copy = ()=>{
        navigator.clipboard.writeText(clipRef.current.value)
    }
    const clipRef = useRef(null)
  const navigate = useNavigate()
  const [userData, setUserData] = useState()
  useEffect(()=>{
    setLoader(true)
    if(localStorage.getItem('token')){
        const getData = async()=>{
            const req = await fetch(`${route}/api/getData`,{
                headers: {
                'x-access-token': localStorage.getItem('token')
                }
            })
            const res = await req.json()
            setUserData(res)

           if (res.status === 'error') {
                    navigate('/login')
          }
          
            setLoader(false)
        }
        getData()
    }
    else{
        navigate('/login')
    }
      
},[])
  return (
    <div>
        <Userdashboardheader route={route}/>
        {
        loader && 
          <div className="wifi-loader-container">
            <div class="loader">
              <span class="l">t</span>
              <span class="o">r</span>
              <span class="a">a</span>
              <span class="d">d</span>
              <span class="i">e</span>
              <span class="n"> </span>
              <span class="g">v</span>
              <span class="d1">o</span>
              <span class="d2">l</span>
              <span class="d3">t</span>
              <span class="d4">e</span>
              <span class="d5">.</span>
              <span class="d6">.</span>
            </div>
        </div>
      }
          {userData && userData.referred.length !== 0 ? 
          <div className="page-swiper-wrapper">
          <div className="page-header">
              <h3>checkout your referral logs</h3>
              <h2>Referral Logs</h2>
              <p>refer more friends to get a <b>100 USD</b> bonus</p>
          </div>
          <div className="transaction-container no-ref">
            <table>
                <thead>
                  <tr>
                    <td>Firstname</td>
                    <td>Lastname</td>
                    <td>Joined At</td>
                    <td>Email</td>
                    <td>commission Earned</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    userData.referred.map(refer =>
                      <tr>
                        <td>{refer.firstname ? `${refer.firstname}` : ' '}</td>
                        <td>{refer.lastname ? `${refer.lastname}` : ' '}</td>
                        <td>{refer.date ? `${refer.date}` : ' '}</td>
                        <td>{refer.email ? `${refer.email}` : ''}</td>
                        <td>{refer.refBonus ? `$${refer.refBonus}` : '$0'} USD</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
              </div>
            </div>
          :
          <div className="page-swiper-wrapper">
          <div className="failure-page no-referral-page">
            <img src="/eadb74787dda41cc6333341e55293432.gif" alt="" className='failure-img'/>
            <p>You haven't referred any user yet, click below to copy your referral link to earn 10% of any deposit made by user</p>
            <div className="click-to-copy-container">
                <input type="text" value={userData ? `https://www.tradevolte.com/user/${userData.username ? userData.username : userData.referral}` : ''} ref={clipRef}/>
                <span className={`clipboard-btn ${clipBoard ? <MdOutlineDone /> : ''}` } onClick={()=>{
                    copy()
                    setClipBoard(!clipBoard)
                }}>
                    {
                        clipBoard ?
                        <MdOutlineDone /> : <MdOutlineContentCopy />
                    }
                </span>
            </div>
          </div>
          </div>
          }
         
    </div>
  )
}

export default Userdashboardreferrals