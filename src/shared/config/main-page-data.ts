import type { ButtonSize, ButtonVariant } from '@/shared/ui/Buttons';

export type ButtonData = {
  label: string;
  size: ButtonSize;
  variant: ButtonVariant;
  iconSrc: string;
  iconAlt: string;
};

export const buttonsContent = {
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
} as const satisfies Record<string, ButtonData>;

export type ButtonDataKey = keyof typeof buttonsContent;

export const pageContent = {
  title: 'Applications',
  mainCard: {
    header: 'Hit your goal',
    description:
      'Generate and send out couple more job applications today to get hired faster',
  },
} as const;
