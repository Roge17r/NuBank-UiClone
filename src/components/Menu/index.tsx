import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  QRCode,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

const Menu: React.FC = () => {
  return (
    <>
      <Container>
        <Code>
          <QRCode />
        </Code>

        <Nav>
          <NavItem>
            <Icon name="help-outline" size={20} color="#fff" />
            <NavText>Me ajuda</NavText>
          </NavItem>
          <NavItem>
            <Icon name="person-outline" size={20} color="#fff" />
            <NavText>Perfil</NavText>
          </NavItem>
          <NavItem>
            <Icon name="credit-card" size={20} color="#fff" />
            <NavText>Configurar cartão</NavText>
          </NavItem>
          <NavItem>
            <Icon name="smartphone" size={20} color="#fff" />
            <NavText>Configurações do app</NavText>
          </NavItem>
        </Nav>

        <SignOutButton onPress={() => {}}>
          <SignOutButtonText>Sair do app</SignOutButtonText>
        </SignOutButton>
      </Container>
    </>
  );
};

export default Menu;
