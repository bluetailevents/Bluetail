import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  const onLogout = () => {
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Bluetail</Link>
      </div>
      <ul>
            <li>
              <Link to='/contact'>
                 Contact
              </Link>
            </li>
            <li>
              <Link to='/about'>
                 About
              </Link>
            </li>
            </ul>
    </header>
  )
}

export default Header