import { formatearFecha } from "../utils/helpers";
import { Link } from "@remix-run/react";

function Post({ post }) {
  const { titulo, contenido, imagen, url, createdAt } = post;
  return (
    <article className="post">
      <img
        src={imagen.data.attributes.formats.small.url}
        alt={`imagen blog ${titulo}`}
        className="imagen"
      />
      <div className="contenido">
        <h3 className="">{titulo}</h3>
        <p className="fecha">Publicado el: {formatearFecha(createdAt)}</p>
        <p className="resumen">{contenido}</p>
      </div>
      <Link to={`/blog/${url}`} className="enlace">
        Leer Post
      </Link>
    </article>
  );
}

export default Post;
