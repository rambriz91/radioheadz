import Logo from '../assets/images/radioheadz-high-resolution-logo-transparent.png';
import AuthService from '../utils/auth';
import { Link } from 'react-router-dom';

const toLoginPage = () => {
  window.location.href = '/login';
};

const toSignupPage = () => {
  window.location.href = '/signup';
};

const toLogOutPage = () => {
  AuthService.logout();
  window.location.href = '/login';
};

const Header = () => {
  return (
    <header>
      <div className='fixed w-full h-[150px] flex justify-between items-center px-4 bg-[#2d3033] text-[#ffa62e]'>
        <div>
          <img src={Logo} alt="Logo" style={{ width: '200px' }} />
        </div>

        <h1 className='text-4xl sm:text-6xl font-oleo-script text-[#ffa62e]' >Radioheadz</h1>
        <p className='text-[#ffa62e] py-4 max-w-[500px]'>
          Listen to your favorite stations while away from home.
        </p>
        {AuthService.loggedIn() ? (
          <div>
            <ul className='list-none'>
              <li>
                <Link className="text-[#ffa62e] hover:text-[#CA3433]" style={{ textDecoration: 'none' }} onClick={toLogOutPage} >
                  Logout
                </Link>
              </li>
            </ul>

          </div>
        ) : (
          <div className='w-[160px] h-[30px] flex justify-between list-none'>
            <ul className='list-none'>
              <li>
                <Link className="text-[#ffa62e] hover:text-[#CA3433]" style={{ textDecoration: 'none' }} onClick={toLoginPage} >
                  Login
                </Link>
              </li>
              <li>
                <Link className="text-[#ffa62e] hover:text-[#CA3433]" style={{ textDecoration: 'none' }} onClick={toSignupPage}>
                  Signup
                </Link>
              </li>
            </ul>

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
