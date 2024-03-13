// app.js
import React from 'react';

function App() {
  // Función para redirigir al enlace externo
  const redirectToExternalLink = () => {
    window.location.href = "https://sites.google.com/uptc.edu.co/avaecosistemas/inicio";
  };

  return (
    <div className="App" style={{textAlign: 'center', backgroundColor: '#001f3f', color: 'white', fontFamily: 'Cousin', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <header className="App-header">
        <h1 style={{fontSize: '3rem'}}>Aprende sobre ecosistemas en Colombia</h1>
        <p style={{fontSize: '1.5rem'}}>Bienvenido a nuestra plataforma de aprendizaje sobre los maravillosos ecosistemas colombianos.</p>
        {/* Utiliza un elemento <a> con el atributo href para redirigir */}
        <a href="https://sites.google.com/uptc.edu.co/avaecosistemas/inicio" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
          <button style={{padding: '15px 30px', fontSize: '1.5rem', backgroundColor: '#ff5733', border: 'none', borderRadius: '10px', cursor: 'pointer', boxShadow: '0 4px 8px rgba(0,0,0,0.3)', transition: 'background-color 0.3s, transform 0.3s'}}>
            Iniciar
          </button>
        </a>
        <div style={{marginTop: '20px'}}>
          <p style={{fontSize: '1.2rem', marginTop: '10px'}}>¡Diviértete aprendiendo!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
