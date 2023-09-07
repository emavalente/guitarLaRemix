import Guitarra from "./guitarra";

function ListadoGuitarras({ guitarras }) {
  return (
    <>
      <h1 className="heading">Nuestra Colección</h1>
      {guitarras?.length && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => (
            <Guitarra guitarra={guitarra?.attributes} key={guitarra?.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default ListadoGuitarras;
