import React from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className="container mt-5">
        <div className="row">
          <Formulario/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
