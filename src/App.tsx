import './styles/global.css';
import './styles/themes.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Cycles } from './components/Cycles';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>

      <Container>
        <Cycles />
      </Container>
    </>
  );
}

export { App };
