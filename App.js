import React from 'react';
import EstudianteForm from './components/EstudianteForm';
import EstudianteList from './components/EstudianteList';
import NotasForm from './components/NotasForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Aplicación de Gestión Académica</h1>
      </header>

      <section>
        <h2>Gestión de Estudiantes</h2>
        {/* Componente para agregar un estudiante */}
        <EstudianteForm />
        
        {/* Componente para mostrar la lista de estudiantes */}
        <EstudianteList />
      </section>

      <section>
        <h2>Gestión de Notas</h2>
        {/* Componente para agregar o gestionar notas */}
        <NotasForm />
      </section>
    </div>
  );
}

export default App;
