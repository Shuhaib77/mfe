import "./styles.css";
function App() {
  return (
    <div className="min-h-screen bg-primera-50">
      <header className="bg-primera-600 text-white p-6">
        <h1 className="text-3xl font-bold">Authe Service</h1>
      </header>
      
      <main className="p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-primera-500">
          <h2 className="text-primera-700 text-2xl mb-4">Welcome!</h2>
          <p className="text-primera-600">This uses the shared primera color palette</p>
          
          <button className="mt-4 bg-primera-500 hover:bg-primera-600 text-white px-6 py-2 rounded-lg transition-colors">
            Click Me
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;