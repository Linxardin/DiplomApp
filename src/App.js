import { Login } from './Views/Login/Login';
import { Registration } from './Views/Registration/Registration';
import { Creation } from './Views/Creation/Creation';
import { Item } from './Views/Item/Item';
import {Search} from './Views/Search/Search';
import { Navbar } from './Views/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (<>
    <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/creation" element={<Creation />} />
                <Route path="/item" element={<Item />} />
                <Route path="/search" element={<Search />} />
                <Route path="/navbar" element={<Navbar />} />
            </Routes>
    </>);
}

export default App;
