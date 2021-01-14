import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import axios from 'axios';
import { RepeatOneSharp } from '../../../node_modules/@material-ui/icons/index';
import { dispatch } from '../../../node_modules/rxjs/internal/observable/range';
import { useDispatch, useSelector } from 'react-redux';


const CyanCheckbox = withStyles({
  root: {
    color: '#adb5bd', 
    '&$checked': {
      color: '#66d9e8',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);



const CheckboxLabels = ({ tourId }) => {
  /* const { tourId } = match.params; */
  /* console.log(tourId); */
  const [Favorited, setFavorited] = useState(); 

  let body = {
    tourId
  }

  useEffect(() => {

    //좋아요 리스트에 해당 상품이 추가되어 있을때 정보를 가지고 오는 api
    axios.post('/api/favorites/read', body)
      .then(response => {
        if (response.data.success) {
          console.log(response.data);
          setFavorited(response.data.favorited)
        } else {
          alert('정보를 가져오는데 실패 했습니다.')
        }
      })
  }, [])



  

  /* const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }; */

  /* const dispatch = useDispatch();
  const deleteTour = tourId => axios.delete(`/api/favorites/remove/${tourId}`) */

  const onClick = () => {  
    console.log("온클릭됩니당")

    if(Favorited) {
      axios.post(`/api/favorites/remove`, body)
        .then(response => {
          if(response.data.success) {
            setFavorited(!Favorited)
          } else {
            alert('좋아요 리스트에서 지우는 걸 실패했습니다.')
          }
        })
    } else {

      axios.patch('/api/favorites', body)
        .then(response => {
          if(response.data.success) {
            setFavorited(!Favorited)
          } else {
            alert('좋아요 리스트에 추가하는 걸 실패했습니다.')
          }
        })
      };

      /* axios.post(`/api/favorites/remove`, body)
        .then(response => {
          if(response.data.success) {

          } else {
            alert('좋아요 리스트에서 지우는 걸 실패했습니다.')
          }
        }) */


    /* if(favorited) {
      //좋아요 되있는 상태에서 클릭하면 좋아요 리스트에서 삭제되는 api
      axios.post('/api/removeFromFavorite', variables)
        .then(response => {
          if(response.data.success) {

          } else {
            alert('좋아요 리스트에서 지우는 걸 실패했습니다.')
          }
        })
    } else {
      //좋아요 리스트에 추가하는 api
      axios.post('api/tours/:tourId/like', variables)
        .then(response => {
          if(response.data.success) {

          } else {
            alert('좋아요 리스트에 추가하는 걸 실패했습니다.')
          }
        })
    } */
  }

  return (
    /* <button onClick={onClick}>
      {Favorited ? "not favorite": "add to favorite" }
    </button> */

    <div onClick={onClick}>
      {Favorited ? <FormControlLabel
        checked={true}
        control={<CyanCheckbox defaultChecked icon={<FavoriteBorder fontSize="small" />}
        checkedIcon={<Favorite fontSize="small" />} name="checkedA" />}
        
      /> : <FormControlLabel
      checked={false}
        control={<CyanCheckbox icon={<FavoriteBorder fontSize="small" />}
        checkedIcon={<Favorite fontSize="small" />} name="checkedB" />}
        />
      }
   </div>
  );
}

export default CheckboxLabels;