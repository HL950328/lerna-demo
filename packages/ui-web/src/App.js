import './App.css';
import './processor.js'
function App() {
  return (
    <div className="App">
      <div>
        <video id="camera" autoPlay playsInline controls/>
      </div>
      <div>
        <video id="camera-chroma" autoPlay playsInline controls/>
      </div>
    </div>
  );
}

export default App;
