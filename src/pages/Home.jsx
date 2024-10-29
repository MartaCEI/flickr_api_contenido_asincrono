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

    useEffect(() => {
        fetchAllData();
    }, [country, currentPage]);

    const fetchAllData = async () => {
        try {
            const response = await fetch(`${URL}&api_key=${KEY}&tags=${country}&per_page=24&page=${currentPage}&format=json&nojsoncallback=1`);
            const objeto = await response.json();

            setData(objeto.photos);
            console.log("Este es el objeto fotos", objeto.photos);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCountryChange = (newCountry) => {
        setCountry(newCountry);
        setCurrentPage(1);
    }

    const goToNextPage = () => {
        if (currentPage < data.pages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    }

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    }

    const { pages, total, photo } = data;

    return (
        <div>
            <h1>Galería de Fotos</h1>
            <div className="pagination-info">
                <button onClick={() => handleCountryChange("spain")}>España</button>
                <button onClick={() => handleCountryChange("france")}>Francia</button>
                <button onClick={() => handleCountryChange("italy")}>Italia</button>
                <button onClick={() => handleCountryChange("germany")}>Alemania</button>
            </div>
            <div className="pagination-info">
                <p>Total de fotos: {total}</p>
                <p>Página {currentPage} de {pages}</p>
                <button onClick={goToPreviousPage} disabled={currentPage === 1}>Anterior</button>
                <button onClick={goToNextPage} disabled={currentPage === pages}>Siguiente</button>
            </div>
            {photo && photo.length > 0 ? (
                <div className="gallery">
                    {photo.map((foto) => (
                        <div key={foto.id} className="gallery-item">
                            <Photo {...foto} />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay fotos disponibles</p>
            )}
            </div>
    );
}

export default Home;
