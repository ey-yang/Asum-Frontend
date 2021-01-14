import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
    const dispatch = useDispatch();
    const { title, about } = useSelector(({ write }) => ({
        title: write.title,
        about: write.about,
    }));
    const onChangeField = useCallback(payload => 
        dispatch(changeField(payload)), [
            dispatch,
        ]);
        // 언마운트될 때 초기화
        useEffect(() => {
            return () => {
                dispatch(initialize());
            };
        }, [dispatch]);
        return <Editor onChangeField={onChangeField} title={title} about={about} />;
};

export default EditorContainer;