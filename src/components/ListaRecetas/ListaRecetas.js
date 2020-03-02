import React, { useContext } from 'react';
import { RecetasContext } from '../../context/recetasContext'
import Receta from '../Receta/Receta';


const ListaRecetas = () => {
    const { recetas } = useContext(RecetasContext);

    if (recetas.length === 0) return null;
    return (
        <div className="row mt-5">
            {Array.isArray(recetas) && recetas.map(receta => (
                <Receta
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}

        </div>
    )
}
export default ListaRecetas;