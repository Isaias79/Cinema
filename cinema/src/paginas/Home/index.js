import estilo from './home.module.css';
import api from "../../servicos/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Adicionado para navegação

function Home() {
    const [filmes, setFilmes] = useState([]);
    const [query, setQuery] = useState(""); // Estado para a busca
    const navigate = useNavigate(); // Hook para navegação

    useEffect(() => { // Montando componente
        async function loadFilmes() { // Funcao ṕara carregar os filmes em execução
            const response = await api.get("movie/now_playing", { // Requisição á API
                params: {
                    api_key: "ce2c1fc6ee322eeefa520085c8f3880a",
                    language: "pt-BR",
                    page: 1
                }
            });
            //console.log(response.data.results);
            setFilmes(response.data.results); // Altera estado com o novo valor
        }
        loadFilmes(); // Chama a função para carregar os filmes
    }, []);

    const handleSearchSubmit = (event) => { // Quando o formulário for enviado, executa essa função
        event.preventDefault();
        // Navega para a página de resultados de busca com a query, passado na url
        navigate(`/search/${query}`);
    };

    // Retorna uma lista de filmes
    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="🔎 Pesquisar"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} // Atualiza o estado da query conforme o usuário digita
                />
                <input type="submit" value="Pesquisar" />
            </form>

            {filmes.map((filme) => (
                <div key={filme.id}>
                    <a href={`/detalhes/${filme.id}`}>
                        <h1>{filme.title}</h1>
                    </a>
                    <p>{filme.id}</p>
                    <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${filme.backdrop_path}`} alt={filme.title} />
                    <p>{filme.overview}</p>
                    <p>{filme.popularity}</p>
                </div>
            ))}

            <h1 className={estilo.titulo}>Estou na Home</h1>
        </div>
    );
}

export default Home;
