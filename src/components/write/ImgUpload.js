import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const Tag = styled.div`
  
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const ImgItem = React.memo(({ image, onRemove, onChangeImages }) => (
  <Tag onClick={() => onRemove(image)}>{image}</Tag>
));

// React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리
const ImgList = React.memo(({ images, onRemove }) => (
  <div>
    {images.map(image => (
      <ImgItem key={image} image={image} onRemove={onRemove} />
    ))}
  </div>
));

//잘 못되면 이 위로 다 날려

const ImgUpload = ({ images, onChangeImages }) => {
  const [input, setInput] = useState('');
  // 잘못되면 요 사이꺼 날려 아래
  const [localImages, setLocalImages] = useState([]);

  const insertImage = useCallback(
    image => {
      if (!image) return; // 공백이라면 추가하지 않음
      if (localImages.includes(image)) return; // 이미 존재한다면 추가하지 않음
      const nextImages = [...localImages, image];
      setLocalImages(nextImages);
      onChangeImages(nextImages);
    },
    [localImages, onChangeImages],
  );

  const onRemove = useCallback(
    image => {
      const nextImages = localImages.filter(t => t !== image);
      setLocalImages(nextImages);
      onChangeImages(nextImages);
    },
    [localImages, onChangeImages],
  );

  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      insertImage(input.trim()); // 앞뒤 공백 없앤 후 등록
      setInput(''); // input 초기화
    },
    [input, insertImage],
  );



    // tags 값이 바뀔 때
    useEffect(() => {
      setLocalImages(images);
    }, [images]);
  // 잘못되면 요 사이꺼 날려 위
  
  
  return (
    <div>
    <form onSubmit={onSubmit}>
      <input type="file" multiple name="images" value={input} onChange={onChange} />
    <button type="submit">추가</button>
    </form>
    {/* 잘못되면 요 사이꺼 날려 */}
    <ImgList images={localImages} onRemove={onRemove} />
    {/* 잘못되면 요 사이꺼 날려 */}
    </div>
  )
}

export default ImgUpload;



/*     const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const onChange = e => {
        setInput(e.target.value)
        const formData = new FormData();
        formData.append("images", {images});
        dispatch(
            changeField({
                key: "images",
                value: {images}
            }),
        );
    } */