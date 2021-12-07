import dog from './rescatanimal-dog.svg';
import cat from './rescatanimal-cat.svg';
import { Instagram, MailOption } from 'grommet-icons';
import { Grommet, Footer, Header, Heading, Text, Anchor, Box } from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  const images = [cat, dog];
  const image = images[Math.floor(Math.random() * images.length)];
  return (
    <Grommet theme={theme} full>
      <Header>
        <Box direction="column" align="center" fill="horizontal">
        <Heading>Rescat animal</Heading>
        </Box>
      </Header>
      <Box>
        <img src={image} style={{height: "40vmin"}}/>
      </Box>
      <Box direction="column" align="center">
        <Text>Has <strong>perdut o trobat un animal</strong>?</Text>
        <Text>Estem preparant un sistema per poder organitzar tots els animals perduts i així ajudar a trobar-los ❤️.</Text>
      </Box>
      <Footer direction="row" justify="center" align="center" gap="medium" flex={false} pad="large">
        <Anchor href="https://www.instagram.com/terranimal_/"><Instagram size="large" color="plain"/></Anchor>
        <Anchor href="mailto:terranimal9@gmail.com"><MailOption size="large" color="plain"/></Anchor>
      </Footer>
    </Grommet>
  );
}

export default App;
