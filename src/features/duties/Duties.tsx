import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 } from 'uuid';

import styles from '../duties/duties.module.css';

interface IDutiesProps {
  duties: string[];
}
const Duties = ({ duties }: IDutiesProps) => {
  return (
    <div>
      {duties.map((duty) => {
        return (
          <div key={v4()} className={styles.jobDesc}>
            <FaAngleDoubleRight className={styles.jobIcon} />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
