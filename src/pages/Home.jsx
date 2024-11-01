import { useEffect, useState } from "react";
import Photo from "@/components/Photo";

const Home = () => {
    const KEY = import.meta.env.VITE_API_KEY;
    const URL = import.meta.env.VITE_API_URL;
    const [data, setData] = useState({
        page: null,
        pages: null,
        perpage: null,
        total: null,
        photo: []
    });
    const [country, setCountry] = useState("spain");
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetchAllData();
    }, [country, currentPage]);

    const fetchAllData = async () => {
        try {
            setError(null);
            const response = await fetch(`${URL}&api_key=${KEY}&tags=${country}&per_page=24&page=${currentPage}&format=json&nojsoncallback=1`);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const objeto = await response.json();
            setData(objeto.photos);
            console.log("Este es el objeto fotos", objeto.photos);
        } catch (error) {
            console.error(error);
            setError("Hubo un problema al cargar las fotos. Inténtalo de nuevo más tarde.");
        }
    };

    const handleCountryChange = (newCountry) => {
        setCountry(newCountry);
        setCurrentPage(1);
    };

    const goToNextPage = () => {
        if (currentPage < data.pages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const { pages, photo } = data;

    return (
        <div className="Galeria-main">
            <h1 className="Galeria-h1">Flickr Api - Galería de Fotos</h1>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div className="Galeria-botones">
                <button className="Galeria-btn" onClick={() => handleCountryChange("spain")}>España</button>
                <button className="Galeria-btn" onClick={() => handleCountryChange("france")}>Francia</button>
                <button className="Galeria-btn" onClick={() => handleCountryChange("italy")}>Italia</button>
                <button className="Galeria-btn" onClick={() => handleCountryChange("germany")}>Alemania</button>
            </div>
            <p className="Galeria-paginacion">Página {currentPage} de {pages}</p>
            <div className="Galeria-botones-bajos">
                <button className="Galeria-btn" onClick={goToPreviousPage} disabled={currentPage === 1}>Anterior</button>
                <button className="Galeria-btn" onClick={goToNextPage} disabled={currentPage === pages}>Siguiente</button>
            </div>
            
            {photo && photo.length > 0 ? (
                <div className="Galeria">
                    {photo.map((foto) => (
                        <div key={foto.id} className="Galeria-container">
                            <Photo {...foto} />
                        </div>
                    ))}
                </div>
            ) : (
                !error && <p>No hay fotos disponibles</p>
            )}
        </div>
    );
};

export default Home;