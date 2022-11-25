import React from 'react'
import Bolimchalar from './bolimcha'
import Corusel from './Corusel'
import Domla from './domla'

export default function Home() {
    return (
        <>
            <div className="corusel_main_page">
                <Corusel />
            </div>
            <div className="bolimchalar">
                <Bolimchalar />
            </div>
            <div className="domla_main_page">
                <Domla />
            </div>
        </>
    )
}
