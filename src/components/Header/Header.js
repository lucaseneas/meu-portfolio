import './Header.css';
import logo from './../../images/logo.png';
import iconMobileMenu from './../../images/IconMobileMenu.png';
import iconMobileMenuClose from './../../images/IconMobileMenuClose.png';

function changeMenuIcon(){
    const menuImg = document.querySelector(".headerLogo");
    if(menuImg.src === iconMobileMenu){
        menuImg.setAttribute('src',iconMobileMenuClose);
    }
    else{
        menuImg.setAttribute('src',iconMobileMenu);
    }
}

function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    menuMobile.classList.toggle('active');
    changeMenuIcon();
}

function menuClose(){
    
    document.querySelector(".mobile-menu").classList.remove("active"); 
     changeMenuIcon(); 
}



function Header(props) {
    return (
        <nav >
            <div className='container'>
                <div className='headerLeftDiv'>
                    <ul className='lista'>
                        <li ><a href='#home'>Home</a></li>
                        <li><a href='#projects'>Projetos</a></li>
                        <li><a href='#jobs'>Experiencias</a></li>
                        <li><a href='#awards'>Premiações</a></li>
                    </ul>
                </div>
                <div className='headerCenterDiv'>
                    <img href='#home' src={logo} />
                </div>
                <div className='headerRightDiv'>
                    <ul className='lista'>
                        <li><a href='#courses'>Cursos</a></li>
                        <li><a href='#contact'>Formação</a></li>
                        <li><a href='#about'>Sobre</a></li>
                        <li><a href='#contact'>Contato</a></li>
                    </ul>
                </div>
                <div className='mobile-menu-icon'>
                    <button onClick={menuShow}>
                        <img className='headerLogo' src={iconMobileMenu} alt='mobile menu'></img>
                    </button>
                </div>
                
            </div>
            <div id="idMobileMenu" className='mobile-menu'>
                    <ul>
                        <li><button onClick={menuClose} ><a href='#home'>Home</a></button></li>
                        <li><button onClick={menuClose}><a href='#jobs'>Experiencias</a></button></li>
                        <li><button onClick={menuClose}><a href='#awards'>Premiações</a></button></li>
                        <li><button onClick={menuClose}><a href='#courses'>Cursos</a></button></li>
                        <li><button onClick={menuClose}><a href='#projects'>Projetos</a></button></li>
                        <li><button onClick={menuClose}><a href='#contact'>Formação</a></button></li>
                        <li><button onClick={menuClose}><a href='#about'>Sobre</a></button></li>
                        <li><button onClick={menuClose}><a href='#contact'>Contato</a></button></li>
                    </ul>
                </div>
        </nav>
    )
}

export default Header