import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import palette from '../../lib/styles/palette';

const FooterBlock = styled(Layout.Footer)`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .terms {
    width: 50rem;
    margin: 0 0 0.7rem 0;
  }
  .atag {
    color:  ${palette.gray[8]};
    font-weight: 900;
  }
`;

const LilFooter = () => {
    return (
        <FooterBlock>
          <div>
          <div className="terms">
            
            <a className="atag" target="_blank" href="https://www.notion.so/029f6ddeb2de49fbbf8b960863127f9f">이용약관</a> | <a className="atag" target="_blank" href="https://www.notion.so/11914de655f44ed3b0082a407ac32d66">개인정보 처리방침</a>
            
          </div>
          <div>
          상호: 지붕 뚫은 친구들 | 대표: 김선재 | 개인정보관리책임자: 김선재 | 대표 번호: <a className="atag" href="tel:070-8825-0227">070-8825-0227</a> | 이메일: <a className="atag" href="mailto:roofkicker1@gmail.com">roofkicker1@gmail.com</a>
          <br/>
          경기도 고양시 일산동구 정발산로 15, 4층 408호(드림월드빌딩) | 사업자등록번호: 867-23-01167 | 통신판매번호: 2020-고양일산동-2707
          </div>
          </div>
        </FooterBlock>
    );
};

export default LilFooter;