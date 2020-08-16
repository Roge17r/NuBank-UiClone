// import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import Main from './pages/Main';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#8b10af"
      />

      <Main />
    </>
  );
};

export default App;
