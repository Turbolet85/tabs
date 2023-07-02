import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setData } from './dataSlice';
import { setIsLoading } from './isLoadingSlice';

export const url = 'https://course-api.com/react-tabs-project';

const Data = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch(setData(response.data));
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [dispatch]);

  return null;
};

export default Data;
