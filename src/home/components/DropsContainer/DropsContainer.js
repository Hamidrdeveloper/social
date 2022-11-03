//React & React Native
import React from 'react';

//Componentes
import ButtonDrop from '../ButtonDrops/ButtonDrops';
import DropsCounter from '../DropsCounter/DropsCounter';

//Styled components
import {DropsContainerView} from './DropsContainer.styles';

const DropsContainer = () => {
  return (
    <DropsContainerView>
      <DropsCounter />
      <ButtonDrop />
    </DropsContainerView>
  );
};

export default DropsContainer;
