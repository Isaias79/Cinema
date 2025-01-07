import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from "../../servicos/api";

function SearchResults() {
    const { query } = useParams();  // Pega a query da URL
    const [results, setResults] = useState([]); // Armazena os resultados

    useEffect(() => {
        async function searchMovies() { // Função para procurar os filmes
            const response = await api.get("search/movie", { // Parâmetros para procurar os filmes
                params: {
                    api_key: "ce2c1fc6ee322eeefa520085c8f3880a",
                    query: query,
                    language: "pt-BR",
                    page: 1
                }
            });
            setResults(response.data.results); // Armazena ou altera o estado com esse novo valor
        }
        searchMovies();
    }, [query]);  // Executa a busca toda vez que a query mudar

    // Por fim os dados são organizados e retornados abaixo
    return (
        <div>
            <h1>Resultados para: {query}</h1>
            {results.map((movie) => (
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.backdrop_path}`} alt={movie.title} />
                </div>
            ))}
        </div>
    );
}

export default SearchResults;
