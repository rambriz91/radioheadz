import AuthService from "../utils/auth";

const dropdownOptions = ["LA", "San Diego", "Inland Empire"];

const handleOptionChange = (e) => {
  const selectedOption = e.target.value;
  false && console.log(selectedOption);
  /*  
-   if (selectedOption === "LA") {
      
    } else if (selectedOption === "San Diego") {
      
    } else if (selectedOption === "Inland Empire") {
      
    }

- need to load the new station base on the option selected.

*/
};
const toLoginPage = () => {
  window.location.href = "/login";
};
const toSignupPage = () => {
  window.location.href = "/signup";
};
const toLogOutPage = () => {
  AuthService.logout();
  window.location.href = "/logout";
};

const Header = () => {
  //{ isLoggedIn, login, logout, register }

  return (
    <header>
      <div style={{ marginLeft: "10px" }}>
        <select onChange={handleOptionChange}>
          {dropdownOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <h1 style={{ color: "white" }}>Radioheadz</h1>
      <p style={{ color: "white" }}>
        {/* Changed add free to ad free */}
        Listen ad free from anywhere in the country. 
      </p>
      {AuthService.loggedIn() ? (
        <div>
          <button onClick={toLogOutPage}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={toLoginPage}>Login</button>
          <button onClick={toSignupPage}>Signup</button>
        </div>
      )}
    </header>
  );
};

export default Header;
