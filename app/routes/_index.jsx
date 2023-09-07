import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";
import { getCurso } from "../models/curso.server";
import { getPosts } from "../models/posts.server";
import ListadoGuitarras from "~/components/listado-guitarras";
import Curso from "~/components/curso";
import ListadoPosts from "~/components/listado-posts";
import stylesGuitarras from "../styles/guitarras.css";
import stylesPosts from "../styles/blog.css";
import stylesCurso from "../styles/curso.css";

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Inicio" },
    { description: "Venta de guitarras, cursos de guitarra, blog de música" },
    { viewport: "width=device-width,initial-scale=1" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylesPosts,
    },
    {
      rel: "stylesheet",
      href: stylesCurso,
    },
  ];
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data,
  };
}

function Index() {
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <section className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </section>

      <Curso curso={curso.attributes} />

      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
}
export default Index;
