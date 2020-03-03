import React from 'react';
import developer from '../../assets/Desarrollador.jpeg';



const Header = () => {



    return (
        <header className="bg-alert text-center">
            <h1>Busca de recetas de bebidas</h1>
            <img alt="developer" src={developer} width="80" height="80" style={{ borderRadius: '50px' }} />
            <p style={{ color: 'white', fontSize: '25px' }}>
                Developer<br />
                <a style={{ color: '#78b5d2' }} href="https://github.com/tuberquia2115?tab=repositories"><i>GITHUB </i></a>
                <span role="img" aria-label="Snowman">&#129299;</span>
            </p>
        </header>
    )

}

export default Header

