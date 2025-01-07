import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./paginas/Home/index";
import Detalhes from "./paginas/Detalhes/index";
import SearchResults from './paginas/Procurar/index'; // Componente que criei


// Criando rotas
function RouterApp() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detalhes/:id" element={<Detalhes />}></Route>
            <Route path="/search/:query" element={<SearchResults  />}></Route>
        </Routes>
        </BrowserRouter>
    );
}

export default RouterApp;