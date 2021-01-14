import React, { useEffect, useCallback, useState, useRef } from 'react';
import HostToursCreateForm from '../../components/host/HostToursCreateForm';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initializeForm, create, updateCreate } from '../../modules/host/hostToursCreate';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module';
import 'quill/dist/quill.snow.css';
import { withRouter } from 'react-router-dom';
import hostToursList, { toursList } from '../../modules/host/hostToursList';


const HostToursCreateContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { form, hostToursCreate, hostToursCreateError, user, orignalCreateId } = useSelector(({ hostToursCreate, user, loading }) => ({
        form: hostToursCreate.form,
        hostToursCreate: hostToursCreate.hostToursCreate,
        hostToursCreateError: hostToursCreate.hostToursCreateError,
        loading:loading['hostToursCreate/CREATE'],
        user: user.user,
        orignalCreateId: hostToursCreate.orignalCreateId,
    }));
    const onChangeField  = useCallback(payload => dispatch(changeField(payload)), [
        dispatch,
    ])

    function getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }
    
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);
    const [dates, setDates] = useState([]);

    const handleCancel = () => {
        setPreviewVisible(false);
    };

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
    };

    const handleChange = ({ fileList }) => {
        
        console.log(fileList)
        setFileList(fileList);

    }

    const onSelect= date => {
            const nextDates = [...dates];
            const index = nextDates.indexOf(date);
            if (index === -1) {
              nextDates.push(date);
            } else {
              nextDates.splice(index, 1);
            }
            setDates(nextDates);
            console.log('Select', date, nextDates);
            dispatch(
                changeField({
                    form: 'form',
                    key: 'closedDays',
                    value: nextDates,
                })
            );
    }


    const children = [];
        for (let i = 10; i < 36; i++) {
        children.push(<Select.Option key={i.toString(36) + i}>{i.toString(36) + i}</Select.Option>);
    }


    const tagsChange = tags => {
        console.log(`selected ${tags}`);
        dispatch(
            changeField({
                form: 'form',
                key: 'tags',
                value: tags,
            })
        );
    }

    
    const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
    const quillInstance = useRef(null); // Quill 인스턴스를 설정
    
    useEffect(() => {
    Quill.register('modules/ImageResize', ImageResize);
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      modules: {
        imageResize: {
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]  
           }   ,
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
            [{ 'size': ['small', false, 'large', 'huge'] }],
           ['bold', 'italic', 'underline', 'strike'],
           [{ list: 'ordered' }, { list: 'bullet' }],
           ['image'],
        ],
      },
    });


    // quill에 text-change 이벤트 핸들러 등록
    // 참고: https://quilljs.com/docs/api/#events

    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        onChangeField({ form: 'form', key: 'about', value: quill.root.innerHTML });
      }
    });
    },[onChangeField]);

    const mounted = useRef(false);
    useEffect(() => {
        if (mounted.current) return;
        mounted.current = true;
        quillInstance.current.root.innerHTML = form.about;
    }, [form.about]);

    



    const onChange = e => {
        const { value, name } = e.target;
        console.log(value, name)
        dispatch(
            changeField({
                form: 'form',
                key: name,
                value
            })
        );
    };




    const onSubmit = async (e) => {

        dispatch(
            changeField({
                form: 'form',
                key: 'image',
                value: fileList,
            })
        );
        const { title, price, image, closedDays, option, tags, refund_type, about } = form;        
        if (orignalCreateId) {
            await dispatch(updateCreate({id: orignalCreateId, title, price, closedDays, option, tags, refund_type, about}));
            alert('수정되었습니다!');
            dispatch(initializeForm('orignalCreateId'));
            // history.push(`/host/tours`);
            return;
        }else {
            dispatch(create({ title, price, closedDays, option, tags, refund_type, about }));
            return;
        }
    }

    
    useEffect(() => {
        return () => {
            dispatch(initializeForm('form'));
        };
    }, [dispatch]);

    useEffect(() => {
        console.log(hostToursCreate,'이놈놈이미어ㅏㅁ')
        if (hostToursCreateError) {
            console.log('오류 발생');
            console.log(hostToursCreateError);
            return;
        }
        if (hostToursCreate) {
            console.log('성공');
            dispatch(initializeForm('hostToursCreate'));
            history.push(`/host/tours/create/img`);
        }
    }, [ hostToursCreate, hostToursCreateError])
    // history,

    return (
        <>
        <HostToursCreateForm
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            previewVisible={previewVisible}
            previewImage={previewImage}
            fileList={fileList}
            handleCancel={handleCancel}
            handlePreview={handlePreview}
            handleChange={handleChange}
            onSelect={onSelect}
            dates={dates}
            children={children}
            tagsChange={tagsChange}
            quillElement={quillElement}

            user={user}
            />
        </>
    )
}

export default withRouter(HostToursCreateContainer);
