// import AuthService from '../utils/auth';

// const dropdownOptions = ['LA', 'San Diego', 'Inland Empire'];

// const handleOptionChange = (e) => {
//   const selectedOption = e.target.value;
//   false && console.log(selectedOption);
//   /*  
// -   if (selectedOption === "LA") {

//     } else if (selectedOption === "San Diego") {

//     } else if (selectedOption === "Inland Empire") {

//     }

// - need to load the new station base on the option selected.

// */
// };
// const toLoginPage = () => {
//   window.location.href = '/login';
// };
// const toSignupPage = () => {
//   window.location.href = '/signup';
// };
// const toLogOutPage = () => {
//   AuthService.logout();
//   window.location.href = '/login';
// };

// const Header = () => {
//   //{ isLoggedIn, login, logout, register }

//   return (
//     <header>
//       <div style={{ marginLeft: '10px' }}>
//         <select onChange={handleOptionChange}>
//           {dropdownOptions.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>
//       <h1 style={{ color: "white" }}>Radioheadz</h1>
//       <p style={{ color: "white" }}>
//         {/* Changed add free to ad free */}
//         Listen ad free from anywhere in the country. 
//       </p>
//       {AuthService.loggedIn() ? (
//         <div>
//           <button onClick={toLogOutPage}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <button onClick={toLoginPage}>Login</button>
//           <button onClick={toSignupPage}>Signup</button>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


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
            <button className='border-2 px-6 py-3 my-2 flex items-center' onClick={toLogOutPage}>Logout</button>
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
            {/* <button className='group border-1 px-1 py-1 my-1 flex  hover:bg-[#CA3433]' onClick={toLoginPage}>Login</button>
            <button className='group border-1 px-1 py-1 my-1 flex  hover:bg-[#CA3433]' onClick={toSignupPage}>Signup</button>
            */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
