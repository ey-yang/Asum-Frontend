import React, { useState } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Upload, Modal, Form, Row, Col, Input, Button, Radio, Select } from 'antd';
import 'antd/dist/antd.css';

const ImgTest = () => {

    const uploadButton = (
        <div>
          <PlusOutlined />
          <div >사진 업로드</div><div style={{ fontSize: '0.7rem' }}>(최대 12장)</div>
        </div>
    );

    function getBase64(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
    }

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
        setFileList(fileList);
        console.log(fileList)
    }

    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);
    
    
    
    return (
        <>
            <Upload
                listType="picture-card"
                name= "images"//우선 네임값 잡고
                fileList={fileList}
                action= "/api/host/upload"
                // method="post"
                // customRequest={()=>(console.log('ㅎㅎ'))}
                onPreview={handlePreview}
                onChange={handleChange}
                /* value={form.images} */
                multiple
            >
                {fileList >= 12 ? null : uploadButton}
            </Upload>
            <Modal
                visible={previewVisible}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>

        </>
    )
}

export default ImgTest;