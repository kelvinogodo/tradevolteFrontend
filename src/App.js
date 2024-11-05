import './App.css';
import {IoLogoWhatsapp} from 'react-icons/io'
import { Profiler, useEffect } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home';
import AOS from 'aos'
import 'aos/dist/aos.css'
import GoldPage from './pages/GoldPage'
import RealEsatePage from './pages/Real-EstatePage'
import AgroTechPage from './pages/AgroTechPage'
import Swal from 'sweetalert2';
import Signup from './pages/Signup';
import Userdashboard from './pages/Userdashboard'
import Userdashboardfundaccount from './components/userdashboardfundaccount/Userdashboardfundaccount'
import Userdashboardwithdraw from './components/userdashboardwithdraw/Userdashboardwithdraw';
import Userdashboardreferrals from './components/userdashboardreferrals/Userdashboardreferrals';
import Userdashboardplans from './components/userdashboardplans/Userdashboardplans';
import Userdashboardtransactions from './components/userdashboardtransactions/Userdashboardtransactions';
import Investments from './components/invesments/Investments';
import Profile from './components/profile/Profile'
import VerifyEmail from './pages/VerifyEmail';
import WithdrawalLogs from './components/WithdrawalLogs';
import Checkout from './components/Checkout';
import Admindashboard from './components/admindashboard/Admindashboard';
import Deposit from './components/deposit/Deposit';
import Aboutpage from './pages/Aboutpage';
import Faq from './pages/Faq';
import Buybitcoin from './pages/Buybitcoin';
import Policy from './pages/Policy';
function App() {

    useEffect(() => {
    AOS.init({
      offset: 60,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 100,
    })
      AOS.refresh()
    // duration=1200;
    }, [])

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    const myArray = [
      {
        country: 'pakistan',
        amount:'$1000'
      },
      {
        country: 'Australia',
        amount:'$5700'
      },
      {
        country: 'USA',
        amount:'$10000'
      },
      {
        country: 'Kuwait',
        amount:'$720'
      },
      {
        country: 'Norway',
        amount:'$3200'
      },
      {
        country: 'Brazil',
        amount:'$8500'
      },
      {
        country: 'Russia',
        amount:'$12000'
      },
      {
        country: 'Greece',
        amount:'$100'
      },
      {
        country: 'France',
        amount:'$78000'
      },
      {
        country: 'Ghana',
        amount:'$15000'
      },
    ]
    const num = myArray.length-1
    setInterval(() => {
      Toast.fire({
              icon: 'success',
              title: `An Investor from ${myArray[Math.floor(Math.random() * num)].country} just withdrew ${myArray[Math.floor(Math.random() * num)].amount}...`
            })
    }, 600000);
      try {
        setInterval(async() => {
            await fetch('/api/cron')
        }, 1000 * 60 * 60)
      } catch (error) {
        console.log(error)
      }
  
    const route = 'https://tradevolte.onrender.com'
  return (
    <>
      <section className="error-404">
        <img src="/5203299.jpg" alt="error 404" />
    </section>
    {/* <AnimatePresence exitBeforeEnter>
        <Router>
        <motion.div className="App"
        key={Routes.Route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{duration:0.2}}
        variants={{
          initialState:{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState:{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState:{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }
        }}
        >
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login route={route}/>}/>
            <Route path='/signup' element={<Signup route={route}/>}/>
            <Route path='/dashboard' element={<Userdashboard route={route}/>}/>
            <Route path='/fundwallet' element={<Userdashboardfundaccount route={route}/>}/>
            <Route path='/referrals' element={<Userdashboardreferrals route={route}/>}/>
            <Route path='/withdraw' element={<Userdashboardwithdraw route={route}/>}/>
            <Route path='/plans' element={<Userdashboardplans route={route}/>}/>
            <Route path='/transactions' element={<Userdashboardtransactions route={route}/>}/>
            <Route path='/investments' element={<Investments route={route}/>}/>
            <Route path='/myprofile' element={<Profile route={route}/>}/>
            <Route path='/user/:id' element={<VerifyEmail route={route}/>}/>
            <Route path='/withdrawlogs' element={<WithdrawalLogs route={route}/>}/>
            <Route path='/checkout' element={<Checkout route={route}/>}/>
            <Route path='/admin' element={<Admindashboard route={route}/>}/>
            <Route path='/deposit' element={<Deposit route={route}/>}/>
            <Route path='/about' element={<Aboutpage />}/>
            <Route path='/faq' element={<Faq />}/>
            <Route path='/policy' element={<Policy />}/>
            <Route path='/buybitcoin' element={<Buybitcoin />}/>
            <Route path='/goldstock' element={<GoldPage />}/>
            <Route path='/agrotech' element={<AgroTechPage />}/>
            <Route path='/realestate' element={<RealEsatePage />}/>
          </Routes>
        </motion.div>
      </Router>
      </AnimatePresence>
      <span className="whatsapp-icon">
        <a href="https://api.whatsapp.com/send?phone=+1(704)325-2216" target='blank'><IoLogoWhatsapp  /></a> 
      </span> */}
    </>
  );
}

export default App;         


// <!doctype html><html lang="en"><head><meta charset="utf-8"/><link rel="icon" href="/blacklogo (2).png"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="A one of a kind investment conpany that helps you maximize your capital, easy, fast and very reliable designed to yield profits for peers through investment globally in real estate, gold stock and agro-tech industries.
//     It takes only one more step to experience magic with tradevolte, join us today!"><meta name="keywords" content="bitcoin,trading,crypto,forex,investing,investment,gold stock,real estate"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta itemprop="name" content="tradevolte"><meta itemprop="description" content=""><meta property="og:type" content="website"><meta property="og:title" content="tradevolte"><meta property="og:description" content="A one of a kind investment conpany that helps you maximize your capital, easy, fast and very reliable designed to yield profits for peers through investment globally in real estate, gold stock and agro-tech industries.
//     It takes only one more step to experience magic with tradevolte, join us today!"><meta property="og:image:type" content="/image/png"/><meta property="og:image:width" content="600"/><meta property="og:image:height" content="315"/><meta property="og:url" content="https://www.tradevolte.com"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Poppins:wght@300;400;500;600;700;800;900&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet"><meta name="twitter:card" content="summary_large_image"><link rel="apple-touch-icon" href="/logo192.png"/><link rel="manifest" href="/manifest.json"/><style>.iframe-container{position:fixed;bottom:0;left:0;width:100%;z-index:10}#google_translate_element{position:fixed;bottom:0;left:0;z-index:2}body{font-family:Poppins,serif}.my-page-loader{width:100%;height:100vh;position:fixed;z-index:20000;background-color:#fff}.load-container{position:absolute;top:50%;left:50%;display:flex;gap:.625em;transform:translate(-50%,-50%)}.load-container span{border-radius:50%;height:1.5em;width:1.5em}.load-container span::before{content:"";display:block;border-radius:inherit;height:inherit;width:inherit;background-color:inherit;animation:ripple 1.8s ease-out infinite;animation-delay:inherit;z-index:-1}.load-container span:first-of-type{background-color:#84cdfa}.load-container span:nth-of-type(2){background-color:#5ad1cd;animation-delay:.2s}.load-container span:nth-of-type(3){background-color:#9b59b6;animation-delay:.4s}@keyframes ripple{from{opacity:1;transform:scale(0)}to{opacity:0;transform:scale(3)}}</style><script src="//code.jivosite.com/widget/1UpZ8oLhnn" async></script><script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script><script type="text/javascript">function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:"en"},"google_translate_element")}</script><title>tradevolte</title><script defer="defer" src="/static/js/main.c9cf01b4.js"></script><link href="/static/css/main.9d5b3e70.css" rel="stylesheet"></head><body><div class="my-page-loader" id="this"><div class="load-container" id="load"><span></span> <span></span> <span></span></div></div><div id="root"></div><div id="google_translate_element"><div id=":0.targetLanguage"></div></div><script>window.onload=()=>{document.getElementById("load").style.display="none",document.getElementById("this").style.display="none"}</script></body></html>