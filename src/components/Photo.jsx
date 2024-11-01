
const Photo = ({ id, server, secret, title }) => (
    <>
        <div className="Galeria-div">
            <img className="Galeria-img"
                src={`https://live.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
                alt={title}
            />
        </div>
        <div className="Galeria-div">
            <p className="Galeria-titulo">{title}</p>
        </div>
    </>
);

export default Photo;