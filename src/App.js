import React from 'react';
import CategoriasProvider from './context/categoriasContext';
import RecetasProvider from './context/recetasContext';
import ModalProvider from './context/modalContext';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import ListaRecetas from './components/ListaRecetas/ListaRecetas';


function App() {
  return (
    <RecetasProvider>
      <CategoriasProvider>
        <ModalProvider>

            <Header />
            <div className="container mt-5">
              <div className="row">
                <Formulario />
              </div>
              <ListaRecetas />
            </div>

        </ModalProvider>
      </CategoriasProvider>
    </RecetasProvider>
  );
}

export default App;
