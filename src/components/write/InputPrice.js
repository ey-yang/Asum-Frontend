import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField } from '../../modules/write';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';



const InputPrice = () => {

    const [input, setInput] = useState('');

    const dispatch = useDispatch();
    const price = useSelector(state => state.write.price);

    const onChange = e => {
        setInput(e.target.value)
        const { value, name } = e.target;
        dispatch(
            changeField({
                key: name,
                value
            }),
        );
    }

    return (
        <div>
        가격<input name="price" value={input} onChange={onChange} />
        </div>
    )
}

export default InputPrice;