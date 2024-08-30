
import './App.css';
import Lecture from './Lecture.jsx';
import Game from './Game.jsx';



function Debby(){

  return(
    <div>
    <p>I love to code. It gives me so much joy when i code</p>
  </div>
  );

}



function School(){
  return(
    <>
    <h1>All Students Are Welcomed.</h1>
    <p>The Best Time To Learn Is Now.</p>
    </>
  );
}



function App() {
  return (
   <div>
      <Game/>
      <Game/>
      <Game/>
      <Game/>
      <Debby/>
      <School/>
      <Lecture/>
   </div>
  );
}

export default App;
