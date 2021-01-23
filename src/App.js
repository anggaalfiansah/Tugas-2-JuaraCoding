import './App.css';
import Soal from './components/Soal';

function App() {
  return (
    <div className="bg-secondary">
      <div className="container py-5">
        <h1 className="text-center mt-3 py-3 border bg-light border-secondary text-uppercase fw-bolder shadow rounded">Tugas 2</h1>
        <div className="mx-auto my-5 px-5 py-3 border border-secondary bg-light shadow rounded">
          <Soal />
        </div>
      </div>
    </div>
  );
}

export default App;
