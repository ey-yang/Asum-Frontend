import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


/* material-ui 테마 색상 설정 */
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#3bc9db',
      },
    },
  });

const RegisterFormBlock = styled.div`
    h3 {
        color: ${palette.gray[8]};
        font-size: 1.22rem;
        font-weight: 700;
    }
    .styledInput {
        border: none;
        width: 100%;
        margin-top: 1rem;
    }
    .regiTerms {
        margin-top: 1.5rem;
        font-size: 0.75rem;
    }
`;

const BirthDayBox = styled.div`
    .Year {
        width: 37%;
        margin-top: 1rem;
    }
    .birthday {
        width: 27.3%;
        margin: 1rem 0rem 0rem 1rem;
    }
`;

const ButtonWidthMarginTop = styled(Button)`
    margin: 1.5rem 0rem 1.3rem 0rem;
`;

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
`;


 const RegisterForm = ({ type, form, onChange, onSubmit, error }) => {


    return (
                <RegisterFormBlock>
                    <h3>회원가입</h3>
                    <ThemeProvider theme={theme}>
                    <form onSubmit={onSubmit} noValidate autoComplete="off">
                    { type === 'register' ? (
                        <div>
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
                        <TextField
                            label="비밀번호 확인 *"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            className="styledInput"
                            color='primary'
                            size='medium'
                            name="passwordConfirm"
                            value={form.passwordConfirm}
                            onChange={onChange}
                        />
                        <TextField 
                            label="이름 *"
                            variant="outlined"
                            className="styledInput"
                            color='primary'
                            size='medium'
                            name="username"
                            value={form.username}
                            onChange={onChange}
                        />
                        <BirthDayBox>
                        <TextField
                            label="생년*"
                            placeholder="ex) 1986"
                            multiline
                            variant="outlined"
                            name="year"
                            value={form.year}
                            onChange={onChange}
                            className="Year"
                        />
                        <TextField
                            label="월*"
                            placeholder="ex) 01"
                            multiline
                            variant="outlined"
                            name="month"
                            value={form.month}
                            onChange={onChange}
                            className="birthday"
                        />
                        <TextField
                            label="일*"
                            placeholder="ex) 20"
                            multiline
                            variant="outlined"
                            name="day"
                            value={form.day}
                            onChange={onChange}
                            className="birthday"
                        />
                        </BirthDayBox>
                        
                        <FormControl variant="outlined" className="styledInput">
                            <InputLabel>
                                성별 *
                            </InputLabel>
                            <Select
                                value={form.gender}
                                onChange={onChange}
                                label="성별"
                                name="gender"
                            >
                                <MenuItem value='female'>여 성</MenuItem>
                                <MenuItem value='male'>남 성</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                    ) : (
                        <div>
                        <TextField 
                            label="이름 *"
                            variant="outlined"
                            className="styledInput"
                            color='primary'
                            size='medium'
                            name="username"
                            value={form.username}
                            onChange={onChange}
                        />
                        <BirthDayBox>
                        <TextField
                            label="생년*"
                            placeholder="ex) 1986"
                            multiline
                            variant="outlined"
                            name="year"
                            value={form.year}
                            onChange={onChange}
                            className="Year"
                        />
                        <TextField
                            label="월*"
                            placeholder="ex) 01"
                            multiline
                            variant="outlined"
                            name="month"
                            value={form.month}
                            onChange={onChange}
                            className="birthday"
                        />
                        <TextField
                            label="일*"
                            placeholder="ex) 20"
                            multiline
                            variant="outlined"
                            name="day"
                            value={form.day}
                            onChange={onChange}
                            className="birthday"
                        />
                        </BirthDayBox>
                        
                        <FormControl variant="outlined" className="styledInput">
                            <InputLabel >
                                성별 *
                            </InputLabel>
                            <Select
                                value={form.gender}
                                onChange={onChange}
                                label="성별"
                                name="gender"
                            >
                                <MenuItem value='female'>여 성</MenuItem>
                                <MenuItem value='male'>남 성</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                    )}
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        <div className="regiTerms">
                            회원가입을 클릭함으로써, 어썸의 <a className="atag" target="_blank" href="https://www.notion.so/029f6ddeb2de49fbbf8b960863127f9f">서비스 이용 약관,</a> <a className="atag" target="_blank" href="https://www.notion.so/11914de655f44ed3b0082a407ac32d66">개인정보 처리방침</a>에 동의하게 됩니다.
                        </div>
                        <ButtonWidthMarginTop fullWidth cyan>
                            회원가입
                        </ButtonWidthMarginTop>
                    </form>
                    </ThemeProvider>
                </RegisterFormBlock>
    );
 };

 export default RegisterForm;