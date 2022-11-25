import React from 'react'
import DolzarbMAvzu from './DolzarbMAvzu'
import Ulamolarimiz from './UlamolarSuhbati'

export default function about() {
    return (
        <>
            <div className='about'>
                <div className="main_about_page">
                    <img className='about_main_img' src="./images/about/about.jpg" alt="" />
                    <img className='about_main_img resImg' src="./images/about/resabout.png" alt="" />
                    <div className="title_about">
                        <h2 className='title_res'>
                            Chilgijiyda Jome masjidi
                        </h2>
                        <p>
                            Chilgijiyda Jome masjidi -  Farg`ona viloyati Adliya boshqarmasi tomonidan diniy tashkilotni 2019 yil 10-iyul kuni  214-son bilan davlat ro`yxatidan o`tkazilgan.  Faoliyatning asosiy maqsadi O`zbekiston Respublikasi fuqarolarining Islom diniga e`tiqod qilish ehtiyojini qondirish, ibodatlarni birgalikda ado etishga imkon yaratishdir. Hozirgi kunda imom vazifasida Nuraliyev Abdurashid faoliyat yuritmoqda (2022).
                        </p>
                    </div>
                </div>
                <DolzarbMAvzu />
                <Ulamolarimiz />
            </div>
        </>
    )
}
