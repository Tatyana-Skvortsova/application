import type { ButtonType } from '@/shared/ui/Button';

export const buttonsContent = {
  home: {
    size: 'smallHome',
    variant: 'filled',
    iconSrc: '/home.svg',
    iconAlt: '',
    href: '/',
  },
  mainTitleCreate: {
    label: 'Create New',
    size: 'small',
    variant: 'filled',
    iconSrc: '/plus.svg',
    iconAlt: 'plus',
  },
  mainCardCreate: {
    label: 'Create New',
    size: 'middle',
    variant: 'filled',
    iconSrc: '/plus.svg',
    iconAlt: 'plus',
  },
} as const satisfies Record<string, ButtonType>;

export type ButtonTypeKey = keyof typeof buttonsContent;

export type pageContentType = {
  title: string;
  mainCard: {
    header: string;
    description: string;
  };
};

export const pageContent = {
  title: 'Applications',
  mainCard: {
    header: 'Hit your goal',
    description:
      'Generate and send out couple more job applications today to get hired faster',
  },
} as const satisfies pageContentType;

export type pageContentTypeKey = keyof typeof pageContent;

export type logoContentType = {
  logomarc: string;
  logotype: string;
  logomarcAlt: string;
  logotypeAlt: string;
  widthlogomarc?: number;
  heightlogomarc?: number;
  widthlogotype?: number;
  heightlogotype?: number;
  prioritylogomarc?: boolean;
  prioritylogotype?: boolean;
  filllogomarc?: boolean;
  filllogotype?: boolean;
};

export const logoContent = {
  logomarc: '/logomarc.svg',
  logotype: '/logo.svg',
  logomarcAlt: 'Logomarc',
  logotypeAlt: 'Logotype',
  widthlogomarc: 44,
  heightlogomarc: 44,
  widthlogotype: 122,
  heightlogotype: 22,
  prioritylogomarc: true,
  prioritylogotype: true,
  filllogomarc: false,
  filllogotype: false,
} as const satisfies logoContentType;

export type logoContentTypeKey = keyof typeof logoContent;

export type generatedContentType = {
  variant?: 'circles' | 'rectangles' | 'single';
  showLeftLabel?: boolean;
  showBottomLabel?: boolean;
};

export const generatedContent = {
  header: {
    variant: 'circles',
    showLeftLabel: true,
    showBottomLabel: false,
  },
  mainCard: {
    variant: 'rectangles',
    showLeftLabel: false,
    showBottomLabel: true,
  },
} as const satisfies Record<string, generatedContentType>;

export type generatedContentTypeKey = keyof typeof generatedContent;
