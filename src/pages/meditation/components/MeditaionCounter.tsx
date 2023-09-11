import styled from '@emotion/styled';
import { Icon } from '@components/Icon';
import { useState } from 'react';

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  color: ${({ theme }) => theme['white']};
  font-size: 2rem;
`;

const CounterText = styled.div`
  background: none;
  width: 120px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`;

const SetTimeButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
const MeditationCounter = () => {
  const [time, setTime] = useState(0);

  return (
    <CounterContainer>
      <SetTimeButton onClick={() => setTime(time - 5)}>
        <Icon
          name={'chevron_left'}
          size={100}
          color={'white'}
        />
      </SetTimeButton>
      <CounterText>{`${time} 분`}</CounterText>
      <SetTimeButton onClick={() => setTime(time + 5)}>
        <Icon
          name={'chevron_right'}
          size={100}
          color={'white'}
        />
      </SetTimeButton>
    </CounterContainer>
  );
};

export default MeditationCounter;
