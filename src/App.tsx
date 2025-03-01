import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Layout from './Layouts/Layout';
import Dashboard from './components/Dashboard';
import AppProvider from './context/AppContext';



function App() {

  return (
    <AppProvider>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
      
);
}

export default App
