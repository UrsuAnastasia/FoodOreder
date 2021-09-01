//styled-components
import styled from 'styled-components'

//assets
import BooksImage from '../../assets/images/book.jpg'

const HomePage = () => {
  return <Wrapper>
    <Image src={BooksImage} />
  </Wrapper>
}

export default HomePage;

const Wrapper = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    flex-direction:column;
`
const Image = styled.img`
  width:50%;
  height:70%;
`;
