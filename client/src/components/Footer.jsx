import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 66vh; 
`;


const FooterContainer = styled.footer`
background-color: #232F3E;
color: #fff;
padding: 10px;
text-align: center;
margin-top: 357px;
`

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  
`;


const GitHubLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;


const Footer = () => {

  const imageStyle = {
    width: 80,
    height: 65,
    padding: 10,
  };
  const ghStyle = {
    padding: 20,
  
  };
 

  return (
    <PageWrapper>

      <FooterContainer>
        <AvatarContainer>
          <a href="https://github.com/Sal1316/radioheadz" target="_blank" rel="noopener noreferrer"> <img src="./src/assets/images/Los-Angeles.png" alt="Avatar 1" style={imageStyle}></img> </a>
          <a href="https://github.com/Sal1316/radioheadz" target="_blank" rel="noopener noreferrer"> <img src="./src/assets/images/Los-Angeles.png" alt="Avatar 2" style={imageStyle}></img> </a>
          <a href="https://github.com/Sal1316/radioheadz" target="_blank" rel="noopener noreferrer"> <img src="./src/assets/images/Los-Angeles.png" alt="Avatar 3" style={imageStyle}></img> </a>
          <a href="https://github.com/Sal1316/radioheadz" target="_blank" rel="noopener noreferrer"> <img src="./src/assets/images/Los-Angeles.png" alt="Avatar 4" style={imageStyle}></img> </a>
          <a href="https://github.com/Sal1316/radioheadz" target="_blank" rel="noopener noreferrer"> <img src="./src/assets/images/Los-Angeles.png" alt="Avatar 5" style={imageStyle}></img> </a>
          {/* Going to change the links for avatars to take to individual pages and the images of what we each want for our avatars */}
        </AvatarContainer>


        {/* GitHub Link */}
        <GitHubLink href="https://github.com/Sal1316/radioheadz" target="_blank" rel="noopener noreferrer">
          <FaGithub size={55}/>
        </GitHubLink>


        <p>&copy; 2023 RadioHeadz. All rights reserved.</p> 
        {/* Going to add more of disclaimer */}
        <p>Disclaimer!</p> 
      </FooterContainer>
    </PageWrapper>
  );
};

export default Footer;
