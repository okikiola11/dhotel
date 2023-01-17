import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./components/Home/Home";
import CreateHotel from "./components/CreateHotel/CreateHotel";
import HotelDetails from "./components/HotelDetails/HotelDetails";

const App = () => {

  return (
    <div className="container-fluid mx-auto">
      <Header />
      
      <Routes>   
          <Route path='/' element={<Home />} />                        
          <Route 
            path='/create' 
            element={<CreateHotel/>}
          /> 
          <Route path='/hotels/:id' element={<HotelDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
