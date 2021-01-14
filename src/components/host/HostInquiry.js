import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import palette from '../../lib/styles/palette';

const { TextArea } = Input;

const Title = styled.div`
    margin: 1.2rem 0 1.5rem 3rem;
    font-size: 1.5rem;
    font-weight: 900;
    color: ${palette.gray[8]};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Content = styled.div`
    flex: 0 1 80%;
    margin: 1rem 0 3rem 2.5rem;
    border: 1px solid ${palette.gray[3]};
    width: 1000px;
`;

const HostInquiryBlock = styled.div`
  padding: 2%;
  font-size: 1rem;
  font-weight: 500;
`;

const MainBox = styled.div`
    padding: 15px;
    margin-top: 0.5rem;
    .qa {
        margin-right: 1.5rem;
        font-size: 2rem;
        font-weight: 750;
        color: ${palette.cyan[4]};
    }
    .textarea {
        width: 58rem;
        resize: none;
        /* outline: none; */
        border: 1px solid ${palette.gray[3]};
        font-size: 0.88rem;
        margin: 0.7rem 0 0 0;
        
    }
    .btn {
        margin: 1rem 0 2rem 0;
        width: 13rem;
        height: 2.3rem;
        border-radius: 3px;
        color: white;
        font-weight: 680;
        font-size: 0.9rem;
        border: none;
        outline: 0;
        box-shadow: none;
        background-color: ${palette.cyan[4]};
        cursor: pointer;
        &:hover {
            background-color: ${palette.cyan[2]};
            outline: 0;
            box-shadow: none;
        }
    }
    .btns {
        margin: 1rem 0 2rem 1rem;
        width: 6rem;
        height: 2.3rem;
        border-radius: 3px;
        color: ${palette.gray[7]};
        font-weight: 680;
        font-size: 0.9rem;
        border: none;
        outline: 0;
        box-shadow: none;
        background-color: ${palette.gray[4]};
        cursor: pointer;
        &:hover {
            background-color: ${palette.gray[2]};
            outline: 0;
            box-shadow: none;
        }
    }
`;

const FlexAlignBox = styled.div`
    display: flex;
    align-items:center;
`;

const HostInquiry = () => {



    return (
        <div>
        <Title>
            문의 관리
        </Title>
        <Content>
            <HostInquiryBlock>
                <MainBox>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <FlexAlignBox>
                            <div className="qa">
                                Q
                            </div>
                            <div>안녕하세요. 2월에 여행을 갈것 같은데 1월 이후 투어 스케줄은 언제 나오나요?</div>
                        </FlexAlignBox>
                        <FlexAlignBox>
                            <div style={{fontSize:'0.9rem', fontWeight:'600', marginRight:'1rem'}}>
                                김선희
                            </div>
                            <div style={{fontSize:'0.9rem', color:'#A2A8AE'}}>
                                2020-12-15 18:34
                            </div>
                        </FlexAlignBox>
                    </div>

                    <div style={{marginLeft:'3rem', fontSiz:'0.9rem', color:'#A2A8AE'}}>
                        최남단감귤농장 체험
                    </div>

                    <div style={{marginTop:'1.5rem', display:'flex'}}>
                        <div className="qa">
                            A
                        </div>
                        <TextArea
                            rows="8"
                            className="textarea"    
                        />
                    </div>

                    <div style={{display:'flex', justifyContent:'flex-end', width:'100%'}}>                        
                        <button className='btn'>저장</button>
                    </div>
    
                </MainBox>

                <hr width="100%" color="#DEE2E6" size="1" style={{marginBottom:'2rem'}}/>

                <MainBox>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <FlexAlignBox>
                            <div className="qa">
                                Q
                            </div>
                            <div>현재 모노레일 수리중이라고 되어있던데 혹시 언제부터 체험가능한가요?</div>
                        </FlexAlignBox>
                        <FlexAlignBox>
                            <div style={{fontSize:'0.9rem', fontWeight:'600', marginRight:'1rem'}}>
                                박진구
                            </div>
                            <div style={{fontSize:'0.9rem', color:'#A2A8AE'}}>
                                2020-12-03 10:04
                            </div>
                        </FlexAlignBox>
                    </div>

                    <div style={{marginLeft:'3rem', fontSiz:'0.9rem', color:'#A2A8AE'}}>
                        최남단감귤농장 체험
                    </div>

                    <div style={{marginTop:'1.5rem', display:'flex'}}>
                        <div className="qa">
                            A
                        </div>
                        <div style={{marginTop:'0.8rem'}}>
                            안녕하세요~ <br />
                            모노레일은 내년 2월부터 가능합니다. 꼭 놀러오세요~ 감사합니다 ^^
                        </div>
                    </div>

                    <div style={{display:'flex', justifyContent:'flex-end', width:'100%'}}>
                        <button className='btns'>수정</button>
                        <button className='btns'>삭제</button>
                    </div>
    
                </MainBox>

                {/* <div className="site-card-border-less-wrapper">
                    <Card size="large" title="Card title" bordered={false} style={{ width: '50%' }}>
                    Card contentsssssddddddqdddddddsawewqewqewqewqeqwewqewqewqewqewqewqewqewqwasdasdasdasdasdsadsa
                    <p>Card content</p>
                    <p>Card content</p>
                    </Card>
                </div> */}
            </HostInquiryBlock>
        </Content>
        </div>
    )
}

export default HostInquiry;
