import styled, { keyframes, css } from 'styled-components'
import { popularJobCategoriesData } from '../constants/index'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';



const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
const Container = styled(motion.div)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
 /* background-color: #eaf0ff; */
    flex-direction: column;
    animation: ${fadeInAnimation} 0.6s ease;   
          margin-bottom: 20px;

`;

const Wrapper = styled.div`
    width: 90%;
`;

const Title = styled.h2`
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 480px) {
        font-size: 30px;
        margin-top: 40px;
    }
`;

const Span = styled.span`
    color: #1d59ff;
`;

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const hoverEffect = css`
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background-color: #3b70ff;
  color: white;
  cursor: pointer;
`;

const CardContainer = styled.div`
    background-color: rgb(248, 248, 248);
    position: relative;
    display: flex;
    flex-direction: column;
    width: calc(50% - 20px); /* Two cards per row on mobile */
    max-width: 160px; /* Limit maximum width */
    height: 200px; /* Adjust height for mobile */
    justify-content: center;
    align-items: center;
    margin: 10px;
    overflow: hidden;
    transition: transform 0.3s ease, background-color 0.32s ease;

    ${({ isActive }) => isActive && hoverEffect}
    @media (max-width: 768px) {
        width: calc(50% - 20px); /* Two cards per row on tablet devices */
    }

    @media (min-width: 768px) {
        width: calc(33.33% - 20px); /* Three cards per row on desktop */
        max-width: 200px; /* Adjust maximum width for desktop */
        height: 220px; /* Adjust height for desktop */
    }
`;

const ImageContainer = styled.div`
    padding: 10px;
    height: 60px; /* Adjust height for smaller image */
    width: 60px; /* Adjust width for smaller image */
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: white;
    margin-top: 10pX; /* Adjust margin */
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%; /* Ensure circular shape */
`;

const CardContent = styled.div`
    padding: 10px;
    text-align: center; /* Center align content */
`;

const CardTitle = styled.h3`
    font-size: 14px; /* Decrease font size */
    margin: 5px 0;
`;

const CardDescription = styled.p`
    font-size: 12px; /* Decrease font size */
    margin: 5px 0;
`;

const JobCategories = () => {

    const [activeCard, setActiveCard] = useState(0);



    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCard((prevActiveCard) => (prevActiveCard + 1) % popularJobCategoriesData.length);
        }, 3000); // Change card every 1 second
        return () => clearInterval(interval);
    }, []);

    return (
        <Container
            initial={{ opacity: 0 }} // Initial animation state
            animate={{ opacity: 1 }} // Animation on mount
            transition={{ duration: 0.6 }} // Animation duration
        >
            <Title>
                Popular Job <Span>Categories</Span>
            </Title>
            <Wrapper>
                <CardList>
                    {popularJobCategoriesData.map((card, index) => (
                        <CardContainer key={card.id} isActive={index === activeCard}>
                            <ImageContainer>
                                <CardImage src={card.image} alt={card.title} />
                            </ImageContainer>
                            <CardContent>
                                <CardTitle>{card.title}</CardTitle>
                                <CardDescription>{`Vacancies: ${card.vacancies}`}</CardDescription>
                            </CardContent>
                        </CardContainer>
                    ))}
                </CardList>
            </Wrapper>
        </Container>
    );
};

export default JobCategories;
