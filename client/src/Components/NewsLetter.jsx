import styled from 'styled-components'
import subscribe from '../assets/benefits/subscribe.jpg'

const Container = styled.div`


background: #396afc;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2948ff, #396afc);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2948ff, #396afc); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

overflow: hidden;
  /* Center the container horizontally */
`;

const Wrapper = styled.div`
margin: 0 auto; 
width: 100%;
  height: 70vh;
max-width: 60%; /* Set max-width to 70% */
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;

  @media (max-width: 768px){
    height: 60%;
    width: 60%;
  }
`;


const ImgContainer = styled.div`
height: 80%;
    flex: 1;
    @media (max-width: 768px){
    display: none;
  }
`

const Image = styled.img`
height: 100%;

 
`
const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 50px;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 50px;
    color: white;
    @media (max-width: 768px){
    font-size: 40px;
  }
`
const Desc = styled.p`
    margin: 30px 0px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 3px;
    color: white;

`
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const Input = styled.input`
  flex: 1;
  height: 50px;
  padding: 0 20px;
  border: none;
  border-radius: 25px 0 0 25px;
  font-size: 16px;
`;

const Button = styled.button`
  height: 50px;
  padding: 0 20px;
  border: none;
  border-radius: 0 25px 25px 0;
  font-size: 16px;
  background-color: #ff4081; 
 
  color: white;
  cursor: pointer;

  &:hover{
    background-color: #ff2f75;
  }
`;


const NewsLetter = () => {
  return (
    
      <Container>
          
          <Wrapper>
              

              <InfoContainer>
                  <Title>SUBSCRIBE NEWSLETTER</Title>
                  <Desc>Subscribe to our NewsLetter Now! </Desc>
                  <FormContainer>
                      <Input type="email" placeholder="Enter your email" />
                      <Button>Subscribe</Button>
                  </FormContainer>

              </InfoContainer>

              <ImgContainer>
              <Image src={subscribe}/>
              </ImgContainer>
</Wrapper>

      </Container>
      
      
  )
}

export default NewsLetter
