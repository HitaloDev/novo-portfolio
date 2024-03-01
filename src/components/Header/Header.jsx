import logo from '../../assets/Logo Hitalo Dev.png'
import './header.css'
const Header = () => {
  return (
    <header className='header'>
        <a href="">
            <img src={logo} alt="logo hitalo" className='logo'/>
        </a>
        <ul className='lista'>
        <a href="">
                <li>About</li>
            </a>
            <a href="">
                <li>Skills</li>
            </a>
            <a href="">
                <li>Experience</li>
            </a>
            <a href="">
                <li>Projects</li>
            </a>
            <a href="">
                <li>Education</li>
            </a>
        </ul>
        <button className='github-profile'>Github Profile</button>
    </header>
  )
}

export default Header