import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../../context/categoriasContext'
import { RecetasContext } from '../../context/recetasContext'


const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    })
    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);
    

    const { nombre, categoria } = busqueda;
    const handleChange = e => {
        guardarBusqueda({
            ...busqueda, [e.target.name]: e.target.value
        })
    }
    return (
        <form className="col-12"
            onSubmit={e => {
                e.preventDefault()
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend> Busca bebidas por categoría o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div class="col-md-4">
                    <input
                        onChange={handleChange}
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        value={nombre} />
                </div>
                <div class="col-md-4">
                    <select className="form-control"
                        onChange={handleChange}
                        name="categoria"
                        value={categoria}
                    >
                        <option value="">-- Selecciona Categoría</option>
                        {Array.isArray(categorias) && categorias.map(categoria => (
                            <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    )
}
export default Formulario;