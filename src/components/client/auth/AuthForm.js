import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';




/* material-ui 테마 색상 설정 */
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#3bc9db',
      },
    },
  });

/**
 * 회원가입 또는 로그인 폼을 보여 줍니다.
 */
const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        font-size: 1.22rem;
        font-weight: 700;
        margin-bottom: -0.5rem;
    }
    .styledInput {
        border: none;
        width: 100%;
        margin-top: 1rem;
    }
    .loginBtn {
        font-size: 1.15rem;
        color: white;
        font-weight: 800;
    }
    .kakaoBtn {
        border: none;
        background: #FEE500;
        margin-top: 1rem;
        height: 51px;
        border-radius: 4px;
        /*padding: 13px 0px 0px 90px;*/
        padding: 2px 0px 0px 65px;
        outline: none;
        cursor: pointer;
        width: 100%;
        
    }
    .kakao {
        color: black;
        font-size: 0.97rem;
        font-weight: bold;
        
    } 
}
`;

const kakaoLogo = require('../../../image/kakao_login_medium_narrow.png');

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌
 */
const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    font-weight: 550;
    font-size: 0.96rem;
    a {
        color: ${palette.gray[6]};
        text-decoration: underline;
        &:hover {
            color: ${palette.gray[9]};
        }
    }
    
`;

const ButtonWidthMarginTop = styled(Button)`
    margin-top: 1rem;
    
`;

const textMap = {
    login: '로그인',
    registerSelect: '회원가입',
};

/**
 * 에러를 보여 줍니다.
 */
const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
 
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                { type === 'login' ? (
                    <div>
                        <ThemeProvider theme={theme}>
                                <TextField
                                    label="Email *"
                                    variant="outlined"
                                    className="styledInput"
                                    color='primary'
                                    size='medium'
                                    name="email"
                                    value={form.email}
                                    onChange={onChange}
                                />
                                <TextField 
                                    label="비밀번호 *"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                    className="styledInput"
                                    color='primary'
                                    size='medium'
                                    name="password"
                                    value={form.password}
                                    onChange={onChange}
                                />
                        </ThemeProvider>        
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        <ButtonWidthMarginTop cyan fullWidth className="loginBtn">
                            로그인
                        </ButtonWidthMarginTop>
                        <div className="kakaoBtn">
                            <a href= "https://kauth.kakao.com/oauth/authorize?client_id={b29cbd1c84933c11dd0ea256ce5c56f1}&response_type=code&redirect_uri=https://localhost.com" className="kakao">
                                <img src={kakaoLogo} />
                            </a>
                        </div>
                        
                    </div>
                ) : (
                    <div>
                        <Link to='/register'>
                            <ButtonWidthMarginTop fullWidth cyan>
                                이메일로 회원가입
                            </ButtonWidthMarginTop>
                        </Link>
                        <div className="kakaoBtn">
                        <a href= "https://kauth.kakao.com/oauth/authorize?client_id={b29cbd1c84933c11dd0ea256ce5c56f1}&response_type=code&redirect_uri=https://localhost.com" className="kakao">
                            <img src={kakaoLogo} />
                        </a>
                        </div>
                    </div>
                )}
                
            </form>
            <Footer>
                {type === 'login' ? (
                    <div>
                    <div>아직 회원이 아니세요?</div>
                    <Link to="/registerSelect">회원가입</Link>
                    </div>
                ) : (
                    <div>
                        <div>이미 회원이신가요?</div>
                        <Link to="/auth/login">로그인</Link>
                    </div>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;