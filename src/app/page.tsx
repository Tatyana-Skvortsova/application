'use client';

import styles from './page.module.css';
import Header from '@/widgets/ui/header/Header';
import MainTitle from '@/widgets/ui/main-title/MainTitle';
import MainCard from '@/widgets/ui/main-card/MainCard';
import {
  pageContent,
  buttonsContent,
  generatedContent,
  logoContent,
} from '@/shared/config/main-page-data';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header
          logo={logoContent}
          homeButton={buttonsContent.home}
          generated={generatedContent.header}
        />
        <div>
          <MainTitle
            title={pageContent.title}
            button={buttonsContent.mainTitleCreate}
          />
          <MainCard
            title={{ order: 'h2', children: pageContent.mainCard.header }}
            description={{ children: pageContent.mainCard.description }}
            button={buttonsContent.mainCardCreate}
            generated={generatedContent.mainCard}
          />
        </div>
      </main>
    </div>
  );
}
