import { useDispatch, useSelector } from 'react-redux';
import { v4 } from 'uuid';

import { RootState } from '../../app/rootReducer';
import styles from '../btnContainer/btnContainer.module.css';
import { setCurrentItem } from './btnContainerSlice';

const BtnContainer = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state: RootState) => state.data);
  const currentJob = useSelector((state: RootState) => state.setCurrentItem);
  return (
    <div className={styles.btnContainer}>
      {jobs.map(({ company }, index) => {
        return (
          <button
            key={v4()}
            className={index !== currentJob ? styles.jobBtn : styles.activeBtn}
            onClick={() => dispatch(setCurrentItem(index))}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
