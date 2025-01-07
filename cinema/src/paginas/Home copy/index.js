import estilo from './home.module.css';
import api from "../../servicos/api";
import {useEffect, useState} from "react";



function Home() {

    const [filmes, setFilmes] = useState([]);
    

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "ce2c1fc6ee322eeefa520085c8f3880a",
                    language: "pt-BR",
                    page: 1
                }
            })
            console.log(response.data.results);
            setFilmes(response.data.results);
        }
        loadFilmes();
    }, []);



    return (
        <div>
            {filmes.map((filme) => (
                <div key={filme.id}>
                    <a href={`/detalhes/${filme.id}`}>
                    <h1>{filme.title}</h1>
                    </a>
                    <p>{filme.id}</p>
                    <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${filme.backdrop_path}`} alt={filme.title}></img>

                    <p>{filme.backdrop_path}</p>
                    <p>{filme.overview}</p>
                    <p>{filme.popularity}</p>
                </div>
            ))}
            <h1 className={estilo.titulo}>Estou na Home</h1>
        </div>
    );
}


export default Home;