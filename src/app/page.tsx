import styles from './page.module.css';
import Header from '../shared/ui/Header/Header';
import MainTitle from '../pages/Main/ui/MainTitle/MainTitle';
import MainCard from '../pages/Main/ui/MainCard/MainCard';
import './reset.css'

export default function Home() {
  const number: number = 0;
  const title: string = "Applications"
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header applicationsGenerated={number} />
        <div>
          <MainTitle title={title} />
          <MainCard/>
        </div>
      </main>
    </div>
  );
}
