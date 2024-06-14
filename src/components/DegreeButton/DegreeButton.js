import './DegreeButton.css';
import DegreIcon from './../../images/DegreeIcon.png';
import { activeFullScreen } from '../../App';

function DegreeButton(props) {
    return (
        <button onClick={() => activeFullScreen(props.degree)} class="spinner">
            <div class="spinner1">
                <img src={DegreIcon}></img>
                <h3>{props.title}</h3>
                <p>{props.university}</p>
                <p>{props.year}</p>
            </div>
        </button>
    )
}

export default DegreeButton;