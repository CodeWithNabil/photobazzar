
// import './App.css';
// import {Routes , Route} from 'react-router-dom';
// import Home from './pages/Home';
// function App() {
//   return (
//     <>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//     </Routes>
//     </>
//   );
// }

// export default App;



// App.js
// App.js
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CustomPage from './pages/CostumPage';
const App = () => {
  return (
    <>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image/:id" element={<CustomPage />} />
        </Routes>
     
    </>
  );
};

export default App;
