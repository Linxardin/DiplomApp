import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from './Views/Login/Login';
import { Registration } from './Views/Registration/Registration';
import { Creation } from './Views/Creation/Creation';
import { Item } from './Views/Item/Item';
import { Search } from './Views/Search/Search';
import { Navbar } from './Views/Navbar/Navbar';
import { Admin } from './Views/Admin/Admin';
import { UserProfile } from './Views/UserProfile/UserProfile';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
   
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/creation" element={<Creation />} />
                <Route path="/:apartmentId/:userId" element={<Item />} />
                <Route path="/search" element={<Search />} />
                <Route path="/navbar" element={<Navbar />} />
                <Route path="/user/:userId" element={<UserProfile />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
    
    </BrowserRouter>
);


reportWebVitals();
