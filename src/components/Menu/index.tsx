import React from 'react';

// import QRCode from 'react-native-qrcode-svg';

import {Container, Code} from './styles';

const Menu: React.FC = () => {
  return (
    <>
      <Container>
        <Code>
          {/* <QRCode
            value="https://github.com/roge17r"
            size={80}
            backgroundColor="#fff"
            color="#8b10ae"
          /> */}
        </Code>
      </Container>
    </>
  );
};

export default Menu;
