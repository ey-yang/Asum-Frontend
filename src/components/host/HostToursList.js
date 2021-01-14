import React, { useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { List, Button, Rate, Image } from 'antd';
import { DeleteOutlined, EyeInvisibleOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AskRemoveModal from '../post/AskRemoveModal';
import palette from '../../lib/styles/palette';


const AllBlock = styled.div`
    
`;
    
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
    width: 700px;
    flex: 0 1 50%;
    margin: 1rem 0 3% 2.5rem;
    border: 1px solid ${palette.gray[3]};
`;

const HostToursListBlock = styled.div`
    font-size: 1rem;
    padding: 4%;
`;

const HostToursList = ({ hostToursList, hostToursListError, loading, onEdit, onRemove }) => {

    const [modal, setModal] = useState(false);
    const [deleteNumber, setDeleteNumber] = useState();

    const onRemoveClick = (e) => {
        console.log(e.target.value)
        setDeleteNumber(e.target.value)
        setModal(true);
    };
    const onCancel = () => {
        setModal(false);
    };
    const onConfirm = () => {
        console.log(deleteNumber);
        setModal(false);
        onRemove(deleteNumber);
    };

    if (hostToursListError) {
        return <Content>
        <HostToursListBlock>
        <div style={{ textAlign: 'center', fontSize: '2rem'}}>
            전산 에러가 발생했습니다. 불편드려 죄송합니다.
        <br/>담당자에게 연락주시면 빠르게 해결해드리겠습니다.
        </div>
        </HostToursListBlock>
        </Content>;
    }


    return (
        <AllBlock>
            <Title>
                상품 관리
                <div /* style={{ textAlign: 'center' }} */>
                    <Link to="/host/tours/create"><Button>새로운 상품 등록하기</Button></Link>
                </div>
            </Title>
        <Content>
        <HostToursListBlock>

        {!loading && hostToursList && (
        <List
        itemLayout="vertical"
        size="large"
        pagination={{
        pageSize: 5, //한페이지에 몇개?
        }}
        dataSource={hostToursList} //데이터소스에 대입하면 밑에부턴 tours.???로 시작하게 된다
        /* footer={} */
        renderItem={tours => (
        <List.Item
            key={tours.title}
            actions={[
            
            <Button ghost style={{color: 'rgba(0, 0, 0, 0.45)'}} value={tours.id} onClick={onEdit}>
            <EditOutlined style={{zIndex: -10}} />
            </Button>,

            

            <Button ghost style={{color: 'rgba(0, 0, 0, 0.45)'}} value={tours.id} onClick={onRemoveClick}>
            <DeleteOutlined style={{zIndex: -10}} />
            </Button>,

            <Rate style={{fontSize: '0.9rem'}} allowHalf disabled defaultValue={tours.rate} />, //평점 0~5까지 별표 반씩 줄어들음
            <span>
                {tours.reviews !== undefined && '후기 '+tours.reviews+'개'}
            </span>, //데이터 베이스에 작성된 후기 갯수 가져오기

            <div style={{fontSize: '0.9rem', marginTop: '1rem'}}>
                {tours.discountRate!==undefined && <b style={{color: 'red'}}> {tours.discountRate + '%'} </b>}
                <b style={{color: 'black'}}> 
                    {Number(tours.price).toLocaleString()+'원'} 
                </b>부터
            </div> //DB에 있는 할인율과 금액가져오기

            ]}
            extra={
            <Image
                width={180}
                height={110}
                src={`http://localhost:3000/${tours.Images[0].src}`}
            />
            }
        >
        <List.Item.Meta
            title={<Link to={`/tour/${tours.id}`}><b>{tours.title}</b></Link>} //해당 게시글이 있는 URL로 보내주기
            // description={<div><CarOutlined />{tours.about}</div>} 
            />
        </List.Item>
        )}
        />
        )}
            
        </HostToursListBlock>
        <AskRemoveModal
            visible={modal}
            onConfirm={onConfirm}
            onCancel={onCancel}
            />
        </Content>
        </AllBlock>
    );
};

export default HostToursList;