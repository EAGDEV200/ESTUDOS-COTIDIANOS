import "./Filme.css";
import Assistido from "../Assistido/assistido";



const filmes = [{
  "nome": "Gigantes de aço",
  "duracao": "2H30",
  "foto": "gigantes.png",
  "ano": 2010,
  "genero": "Ação/Nerd",
  "assistido": false,

 
},
{
  "nome": "Tarzan",
  "duracao": "2H30",
  "foto": "tarzan.png",
  "ano": 2014,
  "genero": "Ação/Nerd",
  "assistido": true,
  
 
},
{
  "nome": "Chucky",
  "duracao": "2H30",
  "foto": "chucky.png",
  "ano": 2015,
  "genero": "Ação/Nerd",
  "assistido": true,
  
}
]



export default function Filme() {
  return (
    <div className="container text-center">
      <div class="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <p>{filme.nota}</p>
                <Assistido javisto={filme.assistido}/>
                <a
                  href={`/detalhes/${filme.nome}`}
                >
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}