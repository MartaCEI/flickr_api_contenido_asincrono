
const Photo = ({ id, server, secret, title }) => (
    <>
        <img
            src={`https://live.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
            alt={title}
        />
        <div className="gallery-info">
            <p className="gallery-title">{title}</p>
        </div>
    </>
);

export default Photo;