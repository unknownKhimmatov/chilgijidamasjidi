import React from 'react'
import FooterBottom from './Components/FooterBottom'
import Home from './Components/Home'
import About from './Components/about'
import { Routes, Route, Link } from 'react-router-dom'
import Donat from './Components/Donat'
import Social from './Components/Social'



export default function Main() {

    const BtnOnclick = () => {
        let res_nav = document.querySelector(".res_nav")
        res_nav.classList.toggle("res_nav_toggle")
        let top_ham = document.querySelector(".top_ham")
        let bottom_ham = document.querySelector(".bottom_ham")
        top_ham.classList.toggle("top_ham_tog")
        bottom_ham.classList.toggle("bottom_ham_tog")

    }



    return (
        <div className='container'>
            <div className="header_main_page">
                <div className='main_header'>
                    <header>
                        <nav>
                            <div className="logo">
                                <img src="./images/logo/hedlogo.png" alt="" />
                            </div>
                            <ul className='main_ul'>
                                <li>
                                    <Link to='/' ><a href="">Asosiy Bo`lim</a></Link>
                                </li>
                                <li>
                                    <Link to='/About' >  <a href="">Biz Haqimizda</a></Link>
                                </li>
                                <li>
                                    <Link to='/About' > <a href="">Ulamolarimiz suhbatlari</a></Link>
                                </li>
                                <div className="button">
                                    <Link to='/Donat' ><button>Hayriya</button></Link>
                                </div>
                            </ul>
                            <div className="res_nav" id='res_nav'>
                                <ul>
                                    <li>
                                        <Link to='/' ><a href="">Asosiy Bo`lim</a></Link>
                                    </li>
                                    <li>
                                        <Link to='/About' >  <a href="">Biz Haqimizda</a></Link>
                                    </li>
                                    <li>
                                        <Link to='/About' > <a href="">Ulamolarimiz suhbatlari</a></Link>
                                    </li>
                                    <div className="button">
                                        <Link to='/Donat' ><button>Hayriya</button></Link>
                                    </div>
                                </ul>
                            </div>
                            <div className="hamburger" >
                                <div className="hamburger_make" onClick={BtnOnclick}>
                                    <div className="item top_ham"></div>
                                    <div className="item bottom_ham "></div>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>

            </div>



            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/About' element={<About />} ></Route>
                <Route path='/Donat' element={<Donat />} ></Route>
                <Route path='/Social' element={<Social />} ></Route>
            </Routes>


            <div className="footer_main_page">
                <div className='footer'>
                    <div className="item_footer">
                        <div className="logo_footer">
                            <img src="./images/logo/YASHIL.png" alt="" />
                            <div className="ul_footer">
                                <li>
                                    <a href="">Biz Haqimizda</a>
                                </li>
                                <li>
                                    <a href="">Dolzarb mavzular</a>
                                </li>
                                <li>
                                    <a href="">Ulamolarimiz suhbatlari</a>
                                </li>
                                <li>
                                    <a href="#" id='gv'>Guvohomani yuklash</a>
                                </li>
                            </div>
                        </div>
                        <div className="right_footer_page">
                            <div className="right_footer">
                                <div className="social">
                                    <h2>Ijtimoiy tarmoqlar</h2>
                                    <div className="icone_footer">
                                        <a href="https://www.instagram.com/abdurashid.domla/"> <i className="fa-brands fa-square-instagram"></i></a> <a href=" https://www.facebook.com/Chilgijiydamasjidi/"><i className="fa-brands fa-facebook"></i></a> <a href="https://t.me/Abdurashid_domla_rasmiy"><i className="fa-brands fa-telegram"></i></a><a href="https://www.youtube.com/@Abdurashid_domla"><i className="fa-brands fa-youtube"></i></a><a href="https://www.tiktok.com/@chilgijiydamasjidi"><i class="fa-brands fa-tiktok"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="boglanish">
                                <h2>
                                    Bog`lanish
                                </h2>
                                <a href='tel' className='tel'>
                                    <p><a href="tel:+998 90 555 09 66">+998 90 555 09 66</a></p>
                                </a>
                                <li>
                                    chilgijiydamasjidi@gmail.com
                                </li>
                            </div>
                            <div className="adddres">
                                <h2>
                                    Manzil
                                </h2>
                                <p className='manzil_p'>
                                    O`zbekiston Respublikasi, Farg`ona viloyati, Furqat tumani, Chilgijiyda MFY Alisher Navoiy ko`chasi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </div>
    )
}
