
import { Timeline } from "./components/Timeline";

function App() {
  return (
      
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-800 text-white py-6 shadow-md">
        <h1 className="text-center text-2xl md:text-3xl font-bold">
          Desarrollo histórico de la IA en los años 40
        </h1>
        <h3 className="text-center text-1xl md:text-2xl font-bold">
          Aplicación web hecha por Iván Delgado
        </h3>
      </header>

      {/* Timeline */}
      <main>
        <Timeline />
      </main>
    </div>
  );
}

export default App;

