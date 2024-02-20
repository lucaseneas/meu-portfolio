import './CardProject.css';

function CardProject(props) {

    return (
        <div class="card">
            <div class='main'>
                <img class='projectImage' src={props.image} alt="project image" />
                <h2>{props.title}</h2>
                <p class='description'>{props.description}</p>
                <div class='technologies'>
                    <p>Tecnologias utilizadas:</p>
                    <div className='technologiesDiv'>
                        <div><img src={props.technologies1}></img></div>
                        <div><img src={props.technologies2}></img></div>
                        <div><img src={props.technologies3}></img></div>
                        <div><img src={props.technologies4}></img></div>
                    </div>
                </div>
                <hr />
                <div class='showMore'>
                    <button>Ver Projeto</button>
                </div>
            </div>
        </div>
          
    )
}

export default CardProject