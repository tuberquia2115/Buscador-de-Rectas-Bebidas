import React, { useContext } from 'react';
import { ModalContext } from '../../context/modalContext'

const Receta = ({ receta }) => {

    const { guardarIdreceta } = useContext(ModalContext)
    const { strDrink, strDrinkThumb, idDrink } = receta;
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{strDrink}</h2>


                <img className="card-img-top" src={strDrinkThumb} alt={`Imagen de ${strDrink}`} />
                <div className="card-body">
                    <button
                        onClick={() => {
                            guardarIdreceta(idDrink)
                        }}
                        type="button"
                        className="btn btn-block btn-primary"
                    >
                        Ver receta
                    </button>

                </div>
            </div>

        </div>
    )
}
export default Receta;