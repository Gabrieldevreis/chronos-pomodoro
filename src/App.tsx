import './styles/global.css';
import './styles/themes.css';
import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';
import { Cycles } from './components/Cycles';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Cycles />
      </Container>
    </>
  );
}

export { App };
