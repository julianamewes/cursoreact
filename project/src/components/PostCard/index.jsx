// O que é um componente react:
// é uma classe que tem um método render, que retorna jsx
// ou uma função que retorna jsx

//props: propriedades que eu passo para o componente PostCard (atributos do jsx que eu passo apra o componente)

import './styles.css';

export const PostCard = ({ title, body, cover, id }) => (             
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
        <h2>{title} {id}</h2>
         <p>{body}</p>
    </div>
  </div>
);