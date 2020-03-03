import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const ModalContext = createContext();


const ModalProvider = (props) => {
    const [idreceta, guardarIdreceta] = useState(null);
    const [informacionReceta, guardarInformaciónReceta] = useState({})

    useEffect(() => {
        const obtenerReceta = async () => {
            if (!idreceta) return;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
            const resultado = await axios.get(url);

            guardarInformaciónReceta(resultado.data.drinks[0])
        }

        obtenerReceta()
    }, [idreceta])

    return (
        <ModalContext.Provider
            value={{
                informacionReceta,
                guardarIdreceta,
                guardarInformaciónReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )

}
export default ModalProvider;