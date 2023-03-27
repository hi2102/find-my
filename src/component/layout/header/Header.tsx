import { ReactComponent as Setting} from '../../../assets/icons/setting.svg';
import { ReactComponent as Arrow} from '../../../assets/icons/arrow.svg';
import { ReactComponent as RecommendUser } from '../../../assets/icons/recommend.svg';

import styles from './Header.module.css';

export default function Header() {
  return <header className={styles.container}>
    <Setting />
    <div className={styles.user_wrapper}>
      <div>icon2-1</div>
      <Arrow className={styles.arrow}/>
    </div>
    <RecommendUser />
  </header>
}