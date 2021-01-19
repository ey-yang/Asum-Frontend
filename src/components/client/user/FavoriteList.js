import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import Favorite from '../../common/Favorite';
import { Link } from 'react-router-dom';
import Tags from '../../common/Tags';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const FavoriteListBlock = styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding-top: 4rem;   */  
`;

const TourListBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  `;

const Tilte = styled.div`
  width: 920px;
  font-size: 1.5rem;
  font-weight: 900;
  color: ${palette.gray[8]};
  margin: 2rem;
`;

const TourListBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 945px;
  .cardBlock {
    
  }
  .card {
    height: 320px;
    width: 220px;
    display: flex;
    flex-direction: column;
    margin: 0rem 0rem 1.8rem 1rem;
  }
  .cardMedia {
    padding-top: 80%;
  }
  .cardContent {
    flex-grow: 1;
  }
  .tourHead {
    font-weight: bold;
    font-size: 0.98rem;
    color: ${palette.gray[7]};
    height: 46px;

    
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .rating {
    display: flex;
    align-items: center;
    margin: -0.3rem 0rem -0.3rem -0.3rem;
    color: #868e96;
    font-size: 0.75rem;
  }
  .tourPrice {
    font-weight: bold;
    font-size: 0.95rem;
    color: #495057;
  }
  .favorite {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: -10%;
    justify-content: space-between;
  }
`;


const FavoriteList = ({ favorites, tours, loading, error, user, tourId }) => {
  console.log(tours);
  // 에러 발생 시
  if (error) {
    return <React.Fragment>에러가 발생했습니다.</React.Fragment>;
  }

  /* const tourId = {tours.id} */

  return (
    <FavoriteListBlock>
      <Tilte>
        나의 관심 여행
      </Tilte>
      <TourListBlock>
      <TourListBox>
      <Grid container spacing={1}>
      {!loading && tours && (
        <>
          {tours.map(tour => (
          <Grid item xs={3} key={tour.id}>
            <div className="cardBlock">
              <Card className="card">
              <Link to={`/tour/${tour.id}`}>
                <CardMedia
                  className="cardMedia"
                  image={`http://128.199.171.26:3000/${tour.Images[0].src}`}/* "https://source.unsplash.com/random" */
                  title="Image title"
                  />
              </Link>
              <CardContent className="cardContent">
                    <Typography
                      gutterBottom
                      variant="caption"
                    >
                      {/* <Tags tags={tour.tags} /> */}
                    </Typography>
              <Link to={`/tour/${tour.id}`}>
                  <Typography gutterBottom  className="tourHead">
                    <div>
                      {tour.title}
                    </div>
                  </Typography>
                  <div className="rating">
                    <StarRateRoundedIcon style={{ color: "#3bc9db" }}/>
                    <div >0(0)</div>
                  </div>
              </Link>
                  <div className="favorite">
                    <Typography className="tourPrice">
                      {Number(tour.price).toLocaleString()} 원
                    </Typography>
                    {<Favorite tourId={tour.id} />}
                  </div>
                </CardContent>
              </Card>
            </div>
        </Grid>
        ))}
        </>
      )}
      </Grid>
      </TourListBox>
      </TourListBlock>
    </FavoriteListBlock>
  );
}

export default FavoriteList;