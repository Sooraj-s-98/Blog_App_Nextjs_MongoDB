import { Spacer } from '@/components/Layout';
import styles from './Search.module.css';
import SearchList from './SearchList';

export const Search = ({posts}) => {
  return (
    <div className={styles.root}>
      <Spacer size={1} axis="vertical" />
      <SearchList posts={posts} />
    </div>
  );
};
