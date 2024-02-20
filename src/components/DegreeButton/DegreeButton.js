import './DegreeButton.css';
import DegreIcon from './../../images/DegreeIcon.png';

function DegreeButton(props) {
    return (
        <div class="spinner">
            <div class="spinner1">
                <img src={DegreIcon}></img>
                <h3>{props.title}</h3>
                <p>{props.university}</p>
                <p>{props.year}</p>
            </div>
        </div>
    )
}

export default DegreeButton;