import React from 'react';
import { useTranslation } from 'react-i18next';
import { DateRangeProps } from '../interfaces';

export const DateRange: React.FC<DateRangeProps> = ({ startDate, endDate }) => {
  const { i18n } = useTranslation();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const month = date.toLocaleString(i18n.language, { month: 'long' });
    const year = date.getFullYear().toString();
    return `${month} ${year}`;
  };

  const formatDateInMonths = (startDate: string, endDate?: string): string => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const years = end.getFullYear() - start.getFullYear();
    const months = end.getMonth() - start.getMonth();

    let formattedString = `${formatDate(startDate)} - ${formatDate(endDate || new Date().toISOString())} ·`;

    if (years > 0) {
      formattedString += ` ${years} ${i18n.language === 'en' ? 'yrs' : 'años'}`;
    }

    if (months > 0) {
      formattedString += ` ${months} ${i18n.language === 'en' ? 'mos' : 'meses'}`;
    }

    return formattedString;
  };

  return <span>{formatDateInMonths(startDate, endDate)}</span>;
};

