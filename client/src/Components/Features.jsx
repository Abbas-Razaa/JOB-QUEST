import styled from 'styled-components'
import { cardsData } from '../constants/index'


const Container = styled.div`
    
height: 60vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #e2e9ff;
flex-direction: column;

`
const Title = styled.h2`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`
const Span = styled.span`
  color: #1d59ff;
`

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
 
  margin: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
   cursor: pointer;
  }`
  
const ImageContainer = styled.div`
margin-left: 10px;
padding: 10px;
height: 90px;
width: 90px;
justify-content: center;
align-items: center;
background-color: #1d59ff29;

`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px 8px 0 0;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 1rem;
`;



const Features = () => {
  return (
    <div>

      <Container>
        <Title>
          Just 3 Easy Steps to New <br /> <Span> Capabilities</Span>
        </Title>

        <CardList>
          {cardsData.map((card) => (
            <CardContainer key={card.id}>
              <ImageContainer>
                <CardImage src={card.image} alt={card.title} />
              </ImageContainer>

              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </CardContainer>
          ))}
        </CardList>
      </Container>



    </div>
  )
}

export default Features