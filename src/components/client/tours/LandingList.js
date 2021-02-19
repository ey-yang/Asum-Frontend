import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import palette from '../../../lib/styles/palette';
import { CgSearch } from 'react-icons/cg';
import { DatePicker, Select, Image, Carousel } from 'antd';
import 'antd/dist/antd.css';
import BarResponsive from '../../common/BarResponsive';


const LandingListBlock = styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;    
`;

const ImageBox = styled.div`
    /* width: 920px;
    height: 280px;
    border: 1px solid ${palette.cyan[3]}; */
    margin-bottom: 3rem;
`;

/* const SearchBar = styled(BarResponsive)`
    display: flex;
    flex-direction: row;
    border: 3px solid ${palette.cyan[3]};
    border-radius: 60px;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    .selectBar {
        width: 46.5%;
        border-radius: 60px;
        position: relative;
        font-size: 0.99rem;
        height: 3.8rem;
        padding: 16px 26px 0px 12px;
        
    }
    .datePickBar {
        width: 46.5%;
        font-size: 0.9rem;
        
    }
    .searchBtn {
        width: 50px;
        height: 50px;
        margin-right: 0.3rem;
        border-radius: 60px;
        background: ${palette.cyan[3]};
        border: none;
        padding-left: 13px;
        
    }
    .searchIcon {
        font-size: 1.28rem;
        margin-top: 6px;
        color: white;
        
    }
`; */

const Title = styled.div`
    font-weight: 710;
    width: 930px;
    font-size: 1.3rem;
    margin: 2rem 0 0.3rem 0;
`;

const CarouselBox = styled.div`
    width: 950px;
    height: 410px;
`;

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const { Option } = Select;

const landingimg = require('../../../image/landimg.jpg');

const LandingList = () => {

    /* antd 데이트피커 이벤트 핸들러 */
    function onChange(date, dateString) {
        console.log(date, dateString);
    } 

    return (
        <>
        
        <LandingListBlock>
            
            {/* <SearchBar>
                <Select
                    className="selectBar"
                    bordered={false}
                    placeholder="장소를 선택해주세요."
                    style={{color: "#495057"}}
                >
                    <Option value="jack">함덕</Option>
                    <Option value="lucy">애월</Option>
                    <Option value="Yiminghe">중문</Option>
                </Select>
                    
                <DatePicker 
                    className="datePickBar"
                    onChange={onChange} 
                    placeholder="날짜를 선택해주세요."
                    size= "large"
                    bordered={false}
                />
                <Button className="searchBtn" >
                    <CgSearch className="searchIcon" />
                </Button>
            </SearchBar> */}
            {/* <ImageBox>
                <Image
                    width={950}
                    height={410}
                    src={landingimg} />
            </ImageBox> */}
            <CarouselBox>
                {/* <Carousel autoplay> */}
                    <div>
                    <Image
                    preview={false}
                    width={950}
                    height={410}
                    src={landingimg} />
                    </div>
                    {/* <div>
                    <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>4</h3>
                    </div> */}
                {/* </Carousel> */}
            </CarouselBox>
            <Title>
                추천 푸드투어
            </Title>
            
        </LandingListBlock>
        </>
    );
};

export default LandingList;