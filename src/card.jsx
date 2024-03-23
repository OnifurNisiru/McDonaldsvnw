import './App.css'

export default function Card({ imagem, texto }) {
    return (
        <section id='cards'>
        <img src={imagem} alt="img" />
        <h2>{texto}</h2>
        <button>clique</button>
      </section>
    );
  }