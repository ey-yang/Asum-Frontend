import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import HostApplyForm from '../../components/host/HostApplyForm';
import { changeField, initializeForm, apply } from '../../modules/host/host';
import axios from 'axios';
import { withRouter } from 'react-router-dom';



const HostApplyContainer = ({ history }) => {

    const dispatch = useDispatch();
    const { form, host, hostError, user } = useSelector(({ host, user }) => ({
        form: host.apply,
        host: host.host,
        hostError: host.hostError,
        user: user.user,
    }));

    const onChange = e => {
        const { value, name } = e.target;
        console.log(value, name);
        dispatch(
            changeField({
                form: 'apply',
                key: name,
                value,
            })
        )
    };

    // const onChangeImage = e => {
    //     const value = e.target.files[0];
    //     const name = e.target.name;
    //     console.log(value, name);
    //     dispatch(
    //         changeField({
    //             form: 'apply',
    //             key: name,
    //             value
    //         })
    //     )
    // };

    // const uploadBusinessImage = e => {
    //     if (e.target !== null) {
    //         setBusinessSuccess('등록 완료');
    //     }
    //     const value = e.target.files[0];
    //     const name = e.target.name;
    //     console.log(value, name);
    //     dispatch(
    //         changeField({
    //             form: 'apply',
    //             key: name,
    //             value
    //         })
    //     )
    // }

    // const uploadBankImage = e => {
    //     if (e.target !== null) {
    //         setBankSuccess('등록 완료');
    //     }
    //     const value = e.target.files[0];
    //     const name = e.target.name;
    //     console.log(value, name);
    //     dispatch(
    //         changeField({
    //             form: 'apply',
    //             key: name,
    //             value
    //         })
    //     )
    // }

    const onChecked = e => {
        const { checked, name } = e.target;
        console.log(checked, name);
        dispatch(
            changeField({
                form: 'apply',
                key: name,
                value: checked
            })
        )
    };


    const onSubmit = e => { //form 보내기 함수
        // e.preventDefault();
        //host_image,
        const {  host_name, host_phone, business_type, about, contract, personal_information } = form;
            
            // if (contract === false || personal_information === false) {
            //     alert('파트너 약관과 개인정보 수집 및 이용에 대한 동의가 필요합니다.');
            // } else if (business_license === null || bank_account === null) {
            //     alert('사업자등록증 사본과 통장 사본이 필요합니다.');
            // } else if (host_image === null) {
            //     alert('사진 업로드가 필요합니다.')
            // } else {console.log(e,'전송완료')};
            
            //host_image,
            dispatch(apply({  host_name, host_phone, business_type, about, contract, personal_information }));
               
    };

    useEffect(() => {
        dispatch(initializeForm('apply'));
    }, [dispatch]);

    useEffect(() => {
        if (hostError) {
            console.log('오류발생');
            console.log(hostError);
            return;
        }
        if (host) {
            console.log('성공');
            alert('신청되었습니다. 입력해주신 번호로 연락드리겠습니다.')
            history.push('/');
            console.log(host);
        }
    }, [host, hostError]);


    const [hostImage, setHostImage] = useState(null);
    const onChangeImage = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setHostImage(reader.result);
                }
            }
            console.log(e.target.files[0])
        reader.readAsDataURL(e.target.files[0])
        const formData = new FormData();
        formData.append('images',e.target.files[0]);
        
        return axios.post("/api/host/upload", formData).then(res => {
            alert('성공')
          }).catch(err => {
            alert('실패')
          })
    };

    
    const [businessSuccess, setBusinessSuccess] = useState(null);
    const uploadBusinessImage = (e) => {
        const formData = new FormData();
        formData.append('images', e.target.files[0]);
        
        return axios.post("/api/host/upload", formData).then(res => {
            alert('성공')
            setBusinessSuccess('등록 완료')
          }).catch(err => {
            alert('실패')
          })
    };

    const [bankSuccess, setBankSuccess] = useState(null);
    const uploadBankImage = (e) => {
        const formData = new FormData();
        formData.append('images', e.target.files[0]);
        
        return axios.post("/api/host/upload", formData).then(res => {
            alert('성공')
            setBankSuccess('등록 완료');
          }).catch(err => {
            alert('실패')
          })
    };


    
    // useEffect(() => {
    //     if (user) {
    //         history.push('/');
    //     }
    // }, [history, user]);

    // useEffect(() => {
    //     if (user) {
    //         history.push('/');
    //         try {
    //             localStorage.setItem('user', JSON.stringify(user));
    //         } catch (e) {
    //             console.log('localStorage is not working');
    //         }
    //     }
    // }, [history, user]);



    return (
        <>
        <HostApplyForm 
            type="apply"
            form={form}
            onChange={onChange}
            
            onChangeImage={onChangeImage}
            hostImage={hostImage}

            onChecked={onChecked}
            onSubmit={onSubmit}
            uploadBusinessImage={uploadBusinessImage}
            businessSuccess={businessSuccess}
            uploadBankImage={uploadBankImage}
            bankSuccess={bankSuccess}

            user={user}
            hostError={hostError}
        />
        </>
    )
}

export default withRouter(HostApplyContainer);
