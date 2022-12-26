import axios from "axios";
import Home from "./Pages/Home";



function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=9581b43c85918b7538634a2656290a0e`

  return (
    <div>
      <Home/>
      {/* <Test/> */}
    </div>
  );
}

export default App;
