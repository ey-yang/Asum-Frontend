import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import palette from '../../lib/styles/palette';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import Button from '../../components/common/Button';
import { Link, withRouter } from 'react-router-dom';

  const AllBlock = styled.div`
    .imgTitle {
      font-size: 2.2rem;
      font-weight: 60;
    }
    .uploadIcon {
      color: ${palette.cyan[3]};
      font-size: 2.3rem;
      font-weight: 60;
      margin-bottom: 0.3rem;
    }
  `;

  const Title = styled.div`
  margin: 1.2rem 0 1.5rem 3rem;
  font-size: 1.5rem;
  font-weight: 900;
  color: ${palette.gray[7]};
  `;

  const Content = styled.div`
    /* flex: 0 1 50%; */
    margin: 1rem 0 3% 2.5rem;
    border: 1px solid ${palette.gray[3]};
    padding: 10px 0 0 20px;
    width: 990px;
  `;

  const UploadMultipleImageBlock = styled.div`
  /* .app{
    min-height: 100vh;
    max-height: auto;
    background-color: #1e1e1e;
  }
  .heading{
    text-align: center;
    font-family: 'Alice', serif;
    font-size: 2rem;
    font-weight: bold;
    color: #f7f7f7;
    padding-top: 2rem;
  } */
  #file[type="file"] {
    display: none;
  }
  .label-holder {
    width: 950px;
    height: 50px;
    margin-top: 1.5rem;
    display: grid;
    place-items: center;
  }
  .label{
    border: none/* 1px dashed ${palette.cyan[3]} */;
    height: 70px;
    width: 200px;
    /* background-color:#2a3eb1; */
    color: white;
    display: grid;
    place-items: center;
    font-size: 2.5rem ;
    cursor: pointer;
    color: ${palette.gray[6]};
    font-size: 0.85rem;
  }
  .upload {
    color: ${palette.gray[5]};
    font-size: 0.77rem;
    margin-top: -0.3rem;
  }
  .result{
    min-height: 100%;
    max-height: auto;
    width: 990px;
    /* background-color: #272c34; */
    margin-top: 3.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left; 
    
  }
  
  img{
    width: 315px;
    height: 180px;
    object-fit: cover;
    padding: 0.75rem;
    
  }
  .btnBlock {
    width: 940px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .button-holder {
    display: flex;
    width: 300px;
    justify-content: flex-end;
  }
  .button {
    margin: 2.5rem 0 3rem 0.6rem;
    width: 100%;
    height: 2.5rem;
    border-radius: 10px;
    color: white;
    font-weight: 800;
    font-size: 1rem;
    border: none;
    outline: 0;
    box-shadow: none;
    background-color: ${palette.cyan[3]};
    cursor: pointer;
    &:hover {
      background-color: ${palette.cyan[2]};
      outline: 0;
      box-shadow: none;
    }
  }
`;

const UploadMultipleImage = ({ history }) => {

  const [selectedImages, setselectedImages] = useState([])

  const imageHandleChange = (e) => {
      
      if(e.target.files){
        const fileArray = Array.from(e.target.files).map((file)=>URL.createObjectURL(file))
        setselectedImages((prevImages)=>prevImages.concat(fileArray))
      }
      
      const formData = new FormData();
      /* const config = {
        header: { 'content-type': 'multipart/form-data' }
      } */
      formData.append('images', e.target.files[0]);
      axios.post("/api/tours/create/images", formData, /* config */).then(res => {
        console.log('사진등록성공')
      }).catch(err => {
        alert('사진등록실패') 
      })
      /* console.log(Array); */
      /* console.log(selectedImages); */
  }



  /* const TourImages = document.getElementById('files'); 
  const formData = new FormData();



  for( let i=0; i <= TourImages.files.length; i++){
    formData.append('images', TourImages.files[i]);

  }*/
  

  const renderPhotos = (source) => {
    return source.map((photo) => {
      return <img src={photo} key={photo} />
    })
  } 

  const TourImages = selectedImages;

  const onPublish = (e) => {
    e.preventDefault()
    console.log(TourImages)
    history.push(`/host/tours`)
  }

  return (
    <AllBlock>
        <Title>
            투어 상품 만들기
        </Title>
        <Content>
    <UploadMultipleImageBlock>
      <div className="app">
        <div className="heading">
          <div className="imgTitle">대표 사진을 업로드 해주세요.</div>
        </div>
        <div>
          {/* <form encType="multipart/form-data"> */}
          <input 
            type="file"
            multiple
            /* key="images" */
            name="images"
            /* value="images" */
            id="file"
            onChange={imageHandleChange}
          />
          {/* </form> */}
          <div className="label-holder">
            <label htmlFor="file" className="label">
              <AiOutlineCloudUpload className="uploadIcon"/>
              클릭하여 첨부
              <div className="upload">(최대 6장)</div>
            </label>
          </div>
          <div className="result">
            {renderPhotos(selectedImages)}
          </div>
        </div>
        <div className="btnBlock">
        <div className="button-holder">
        {/* <Link to='/register'> */}
        <button type="button" className="button" onClick={onPublish}>
          등 록
        </button>
        {/* </Link> */}
        </div>
        </div>
      </div>
    </UploadMultipleImageBlock>
    </Content>
    </AllBlock>
  )
};

export default withRouter(UploadMultipleImage);