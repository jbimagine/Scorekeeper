import React from 'react';
import styled from 'styled-components/macro';

import Icon from '../icons/index';

export const HeaderHeight = 80;

const MainCntnr = styled.div `
  height: ${HeaderHeight}px;
  width: 100vw;
  ${'' /* background: blue; */}
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  box-sizing: border-box;
  color: #FFF;
  font-size: 24px;
`;

const TitleCntnr = styled.div `
  ${'' /* background: red; */}
  display: grid;
  justify-items: center;
  align-content: center;
`;

const Title = styled.div `
`;

const SettingsCntnr = styled.div `
  ${'' /* background: purple; */}
  display: grid;
  grid-template-columns: ${props=> props.gridColumns ? props.gridColumns: '1fr 1fr'};
  justify-items: center;
  align-items: center;
`;

const IconCntnr = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: ${props=> props.justifyContent ? props.justifyContent : 'center'};
    align-items: center;
    ${'' /* &:last-child {
        background: brown;
    } */}
`;

export default class HeaderContent extends React.Component {
  render() {
    return (
        <MainCntnr>
          <SettingsCntnr >
          <IconCntnr justifyContent= 'flex-start'><Icon name='roundsIcon'/></IconCntnr>
          <IconCntnr><Icon name='settingsIcon'/></IconCntnr>
          </SettingsCntnr>
          <TitleCntnr>
            <Title>Scorekeeper</Title>
          </TitleCntnr>
          <SettingsCntnr>
          <IconCntnr onClick = {() => this.props.resetPlayersCount()} ><Icon name='resetIcon'/></IconCntnr>
          <IconCntnr justifyContent= 'flex-end' onClick = {() => this.props.incrementPlayers()} ><Icon name='plusIcon' /></IconCntnr>
          </SettingsCntnr>
        </MainCntnr>
      );
  }
}