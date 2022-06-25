import React from 'react'

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/image-2.jpg"
          className="card-img"
          alt="Background"
          
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">ROPAS DE NUEVA TEMPORADA</h5>
            <p className="card-text lead fs-2">
              CONSULTA LAS NUEVAS TENDENCIAS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home