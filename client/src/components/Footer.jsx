import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

// const PageWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 55vh; 
// `;

const FooterContainer = styled.footer`
background-color: #2d3033;
color: #ffa62e;
padding: 20px;
text-align: center;
position: absolute;
width: 100%;
height: 26%;
bottom: 0;
p{
  margin-bottom: 10px;
  color: #ffa62e;
  font-size: 14px;
}
`

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
`;


const GitHubLink = styled.a`
  color: #ffa62e;
  text-decoration: none;
  justify-content: center;
svg {
  opacity: 0.5;
  transition: opacity 0.3s ease;

}
&:hover svg{
  opacity: 1;
  color: #CA3433;
}  
&:hover{
  text-decoration: none;
}
`;


const Footer = () => {

  const imageStyle = {
    width: 80,
    height: 60,
    padding: 5,
    marginLeft: 10,

  };
  const pgraph = {
    marginBottom: 13,
  };



  return (

    <FooterContainer>
      <AvatarContainer>
        <a href="https://github.com/1014jorge" target="_blank" rel="noopener noreferrer"> <img src="./src/assets/images/JG.png" alt="Jorge's GitHub Repo" style={imageStyle}></img> </a>
        <a href="https://github.com/Sal1316" target="_blank" rel="noopener noreferrer"> <img src="./src/assets/images/SC.png" alt="Sal's GitHub Repo" style={imageStyle}></img> </a>
        <a href="https://github.com/Marc01710" target="_blank" rel="noopener noreferrer"> <img src="./src/assets/images/MH.png" alt="Marc's GitHub Repo" style={imageStyle}></img> </a>
        <a href="https://github.com/rambriz91" target="_blank" rel="noopener noreferrer"> <img src="./src/assets/images/RA.png" alt="Rob's GitHub Repo" style={imageStyle}></img> </a>
        <a href="https://github.com/makandcheese04" target="_blank" rel="noopener noreferrer"> <img src="./src/assets/images/MR.png" alt="Makayla's GitHub Repo" style={imageStyle}></img> </a>
      </AvatarContainer>

      <GitHubLink href="https://github.com/Sal1316/radioheadz" target="_blank" rel="noopener noreferrer" >
        <FaGithub size={65} style={pgraph} />
      </GitHubLink>

      <p>&copy; 2023 RadioHeadz. All rights reserved.</p>

      <p>Please be aware that this app is intended solely for educational purposes, and we kindly request that you refrain from taking legal action against us.</p>
    </FooterContainer>

  );
};

export default Footer;
