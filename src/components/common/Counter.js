import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { FiMinusCircle } from 'react-icons/fi';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const CounterBlock = styled.div`
    display: flex;
    align-items: center;
    .counterBtn {
        cursor: pointer;
        font-size: 2rem;
        color: ${palette.cyan[4]};
        margin: 0rem 0.5rem;
    }
    h3 {
        font-size: 1.2rem;
        padding-top: 8px;
    }

`;

const Counter = React.memo(({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <CounterBlock>
        {number === 1 ?
          <FiMinusCircle className="counterBtn" />
          : <FiMinusCircle className="counterBtn" onClick={onDecrease} />
        }
        {/* <FiMinusCircle className="counterBtn" onClick={onDecrease} /> */}
            <h3>{number}</h3>
        <FiPlusCircle className="counterBtn" onClick={onIncrease} />
      </CounterBlock>
    </div>
  );
});

export default Counter;
