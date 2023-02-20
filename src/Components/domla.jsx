import React from 'react'
import Social from './Social'
import { Routes, Route, Link } from 'react-router-dom'


export default function domla() {

    return (
        <div className='domla'>
            <div className="item_domla">
                <div className="top_domla">
                    <img src="./images/home/gl.png" alt="" />
                    <div className="icone">
                        <a href="https://www.instagram.com/abdurashid.domla/"> <i className="fa-brands fa-square-instagram"></i></a> <a href=" https://www.facebook.com/Chilgijiydamasjidi/"><i className="fa-brands fa-facebook"></i></a> <a href="https://t.me/Abdurashid_domla_rasmiy"><i className="fa-brands fa-telegram"></i></a><a href="https://www.youtube.com/@Abdurashid_domla"><i className="fa-brands fa-youtube"></i></a><a href="https://www.tiktok.com/@chilgijiydamasjidi"><i class="fa-brands fa-tiktok"></i></a>
                    </div>
                </div>
                <div className="main_all_domla">
                    <div className="all_page_item">
                        <div className="left_page">
                            <div className="bottom_page">
                                <div className="domla_img">
                                  </div>
                            </div>
                        </div>
                        <div className="title_domla">
                            <h2>
                                Abdurashid Nuraliyev <br />
                                Chilgijiyda masjidi imom hatibi
                            </h2>
                            <p>
                                1990-yil 25-martda Farg`ona viloyati Furqat
                                tumanida tug`ilgan.  Namangan shahar Hidoya
                                (eski nomi "Mulla Qirgʼiz") oʼrta maxsus islom bilim yurti ni 2010-yilda tamomlagan. Xozirda Toshkent shahar Imom Buxoriy nomidagi Toshkent Islom instituti  2 kurs talabasi (2022-yil).
                            </p>
                            <div className="buutons">
                                <Link to='/Social'><button>Ijtimoiy tarmoqlar</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/Social' element={<Social />} ></Route>
            </Routes>
        </div>
    )
}
