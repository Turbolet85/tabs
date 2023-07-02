import { useSelector } from 'react-redux';

import { RootState } from '../../app/rootReducer';
import Duties from '../duties/Duties';
import styles from '../jobInfo/job.module.css';

const JobInfo = () => {
  const jobs = useSelector((state: RootState) => state.data);
  const currentJob = useSelector((state: RootState) => state.setCurrentItem);
  const { company, dates, duties, title } = jobs[currentJob];
  return (
    <article>
      <h3>{title}</h3>
      <span className={styles.jobCompany}>{company}</span>
      <p className={styles.jobDate}>{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
