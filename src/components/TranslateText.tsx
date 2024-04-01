import React from 'react';
import { useTranslation } from 'react-i18next';
import { TranslateTextProps } from '../interfaces';

export const TranslateText: React.FC<TranslateTextProps> = ({ text }) => {
  const { t } = useTranslation();

  return <>{t(text)}</>;
};
