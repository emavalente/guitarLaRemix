import { useLoaderData } from "@remix-run/react";
import { getPost } from "../models/posts.server";
import { formatearFecha } from "~/utils/helpers";

export function meta({ data }) {
  if (data?.status === 404) {
    return [
      {
        title: "GuitarLA - Entrada de blog no encontrada",
      },
      {
        description:
          "GuitarLA - Blog de música y venta de guitarras, entrada no encontrada",
      },
    ];
  }
  return [
    {
      title: `GuitarLA - ${data?.titulo}`,
    },
    {
      description: `GuitarLA - venta de guitarras, entrada ${data?.nombre}`,
    },
  ];
}

export async function loader({ request, params }) {
  const { postUrl } = params;

  const post = await getPost(postUrl);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada de blog no encontrada",
    });
  }
  return post?.data[0]?.attributes;
}

function Post() {
  const post = useLoaderData();
  const { titulo, contenido, imagen, createdAt } = post;

  return (
    <article className="post">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`imagen de blog ${titulo}`}
      />
      <div className="contenido">
        <h2>{titulo}</h2>
        <p className="fecha">Publicado el: {formatearFecha(createdAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
}

export default Post;
