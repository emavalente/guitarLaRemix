import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";
import { useOutletContext } from "@remix-run/react";

export function meta() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Nosotros" },
    { description: "Venta de guitarras, blog de música" },
    { viewport: "width=device-width,initial-scale=1" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

function Nosotros() {
  const data = useOutletContext();
  console.log(data);

  return (
    <main className="contenedor nosotros">
      <h1 className="heading">Nosotros</h1>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eos
            suscipit illo repellat, iste exercitationem eligendi cum animi
            quidem quis velit. Assumenda, dolore reprehenderit expedita quisquam
            facere autem voluptatibus laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eos
            suscipit illo repellat, iste exercitationem eligendi cum animi
            quidem quis velit. Assumenda, dolore reprehenderit expedita quisquam
            facere autem voluptatibus laudantium.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
