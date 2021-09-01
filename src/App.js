//styled-components
import styled from 'styled-components'

//logical component
import Navigation from './components/navigation/navigation'
import PublicRoutes from './routes'
function App() {
  return (
    <Container>
      <Navigation />
      <PublicRoutes />
    </Container>

  );
}

export default App;

const Container = styled.div`
width: 100%;
height: 100%;
`
