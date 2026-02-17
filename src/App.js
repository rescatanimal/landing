import dog from './rescatanimal-dog.svg';
import cat from './rescatanimal-cat.svg';
import { Instagram, MailOption, Twitter } from 'grommet-icons';
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
  const images = [
    { src: cat, alt: 'Illustrated orange cat with a heart' },
    { src: dog, alt: 'Illustrated dog with a heart' }
  ];
  const selectedImage = images[Math.floor(Math.random() * images.length)];
  return (
    <Grommet theme={theme} full>
      <Header direction="column">
        <Heading>Rescat animal</Heading>
      </Header>
      <Box direction="column" align="center" gap="medium" justify="center">
        <Box>
          <img src={selectedImage.src} style={{maxHeight: "450px"}} alt={selectedImage.alt}/>
        </Box>
        <Box>
          <Text>Has <strong>perdut o trobat un animal</strong>?</Text>
        </Box>
        <Box style={{textAlign: "center"}}>
          <Text>Estem preparant un sistema per poder organitzar tots els animals perduts i així ajudar a trobar-los ❤️.</Text>
        </Box>
      </Box>
      <Footer direction="row" justify="center" align="center" gap="medium" flex={false} pad="large">
        <Anchor href="https://www.instagram.com/terranimal_/"><Instagram size="large" color="plain"/></Anchor>
        <Anchor href="https://twitter.com/terranimal9"><Twitter size="large" color="plain"/></Anchor>
        <Anchor href="mailto:terranimal9@gmail.com"><MailOption size="large" color="plain"/></Anchor>
      </Footer>
    </Grommet>
  );
}

export default App;
