import { useSelector } from 'react-redux';

import styles from '../app/app.module.css';
import BtnContainer from '../features/btnContainer/BtnContainer';
import Data from '../features/data/Data';
import JobInfo from '../features/jobInfo/JobInfo';
import { RootState } from './rootReducer';

const App = () => {
  const isLoading = useSelector((state: RootState) => state.isLoading);
  return (
    <main>
      <Data />
      {isLoading ? (
        <section className={styles.jobsCenter}>
          <div className={styles.loading}></div>
        </section>
      ) : (
        <section className={styles.jobsCenter}>
          <BtnContainer />
          <JobInfo />
        </section>
      )}
    </main>
  );
};

export default App;
