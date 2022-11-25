import React from 'react'
export default function Social() {
    return (
        <div id='social_page' className='social_page'>
            <div className="item_social">
                <div className="left_page_social">
                    <div className="img_social">
                        <img src="./images/about/gl.png" alt="" />
                    </div>
                    <div className="social_network">
                        <a className='insta' href="https://www.instagram.com/abdurashid.domla/"> <i className="fa-brands fa-square-instagram"></i> Abdurashid Domla </a> <br />
                        <a className='fakebok' href=" https://www.facebook.com/Chilgijiydamasjidi/"><i className="fa-brands fa-facebook"></i> Chilg`ijida Jome Masjidi </a> <br />
                        <a className='tg' href="https://t.me/Abdurashid_domla_rasmiy"><i className="fa-brands fa-telegram"></i>Abdurashid Domla</a><br />
                        <a className='youtube' href="https://www.youtube.com/@Abdurashid_domla"><i className="fa-brands fa-youtube"></i> Abdurashid Domla </a> <br />
                        <a className='tktk' href="https://www.tiktok.com/@chilgijiydamasjidi"><i class="fa-brands fa-tiktok"></i> Chilg'ijida Jome Masjidi </a> <br />
                    </div>
                </div>
                <div className="right_page">
                    <div className="manzil_social">
                        <h3>
                            O`zbekiston Respublikasi, Farg`ona viloyati, Furqat tumani, Chilgijiyda MFY Alisher  Navoiy ko`chasi
                        </h3>
                    </div>
                    <div className="map">
                        <a href="https://www.google.com/maps/place/Chilgi+Jiyda+Jome'+Masjidi/@40.4548687,70.834074,15z/data=!4m5!3m4!1s0x0:0xbb5690835ed1911c!8m2!3d40.4548158!4d70.8340739"><img src="./images/about/map.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}


