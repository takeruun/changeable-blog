import SearchField from '@ui/SearchField';
import Profile from './Profile';
import styles from './styles.module.scss';

const Aside: React.FC = () => {
  return (
    <aside>
      <div className={styles.search}>
        <SearchField value={''} />
      </div>
      <div className={styles.profile}>
        <Profile name={'橋本文瑠'} engName={'Takeru Hashimoto'} />
      </div>
    </aside>
  );
};

export default Aside;