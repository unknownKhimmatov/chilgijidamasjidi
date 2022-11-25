import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import About from './about'
import Donat from './Donat'

export default function bolimcha() {
    return (
        <div className='bolimcha'>
            <div className="item_bolimcha">
                <div className="start_page">
                    <div className="item_one">
                        <div className="img">
                            <img src="./images/home/one.jpg" alt="" />
                        </div>
                        <div className="desc_home">
                            <p>
                                Farg`ona viloyati Furqat tumani Chilgijiyda Jome masjidining rasmiy web sayti. Bu saytda siz masjidimiz haqida ma`lumotlar olishingiz mumkin!
                            </p>
                            <div className="buttons">
                                <Link to='/About' ><button className='about_button'>Ko`prog` o`qish</button></Link>
                                <Link to='/Donat' >  <button id='hayriya'>Hayriya</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="item_one">
                        <div className="img">
                            <img src="./images/home/o3.jpg" alt="" />
                        </div>
                        <div className="desc_home">
                            <p>
                                Fazilatli ustoz Muhammad Odil Hamid tashrifidan lavha
                            </p>
                            <div className="buttons">
                                <Link to='/About' ><button className='about_button'>Ko`prog` o`qish</button></Link>
                                <Link to='/Donat' >  <button id='hayriya'>Hayriya</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="and_page">
                    <div className="item_one">
                        <div className="img">
                            <img src="./images/home/tree.png" alt="" />
                        </div>
                        <div className="desc_home">
                            <p>
                                Qo`qon shahar Saodat masjidi imom hatibi Ibrohimjon domla Qodirov tashrifidan lavha
                            </p>
                            <div className="buttons">
                                <Link to='/About' ><button className='about_button'>Ko`prog` o`qish</button></Link>
                                <Link to='/Donat' >  <button id='hayriya'>Hayriya</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="item_one">
                        <div className="img">
                            <img src="./images/home/four.png" alt="" />
                        </div>
                        <div className="desc_home">
                            <p>
                                Ramazon kechalarida ustozlar tashirifidan lavha
                            </p>
                            <div className="buttons">
                                <Link to='/About' ><button className='about_button'>Ko`prog` o`qish</button></Link>
                                <Link to='/Donat' >  <button id='hayriya'>Hayriya</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path='/Donat' element={<Donat />} ></Route>
                <Route path='/About' element={<About />} ></Route>
            </Routes>

        </div>
    )
}
