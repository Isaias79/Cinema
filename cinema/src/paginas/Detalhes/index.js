import api from "../../servicos/api";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";


function Detalhes(props) {

    const [filme, setFilme] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function loadFilme() {
            const response = await api.get(`movie/${id}`, {
                params: {
                    api_key: "ce2c1fc6ee322eeefa520085c8f3880a",
                    language: "pt-BR",
                    page: 1
                }
            })
            console.log(response.data.title);
            setFilme(response.data);
        }
        loadFilme();
    }, []);

    return (
        <div>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${filme.poster_path}`} alt={filme.title}></img>
            <p>Data de Lançamento: {filme.release_date}</p>
            <p>{filme.overview}</p>
        </div>
    );
}


export default Detalhes;