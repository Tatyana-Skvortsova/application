'use client';

import styles from './page.module.css';
import Header from '../widgets/ui/header/Header';
import MainTitle from '../widgets/ui/main-title/MainTitle';
import MainCard from '../widgets/ui/main-card/MainCard';
import './reset.css';
import { pageContent, buttonsContent } from '@/shared/config/main-page-data';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <div>
          <MainTitle
            title={pageContent.title}
            button={buttonsContent.mainTitleCreate}
          />
          <MainCard
            header={pageContent.mainCard.header}
            description={pageContent.mainCard.description}
            button={buttonsContent.mainCardCreate}
          />
        </div>
      </main>
    </div>
  );
}
