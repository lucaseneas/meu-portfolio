import './ShowInFullScreen.css';
import closeIcon from './../../images/IconMobileMenuClose.png';

function closeFullScreen() {
    const showInFullScreen = document.querySelector('.showInFullScreen');
    showInFullScreen.classList.remove('active');
}

function ShowInFullScreen(props) {
    return (
        <section className='showInFullScreen'>
            <div className='divButton'><img onClick={closeFullScreen} alt='close icon' src={closeIcon} /></div>
            <div className='imgShow'>
                <img alt='img' id='showInFullScreenId'  src={closeIcon}></img>
                <p>{props.src}</p>
            </div>
        </section>
    )
}

export default ShowInFullScreen