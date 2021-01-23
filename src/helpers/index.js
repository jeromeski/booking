import titleize from 'titleize';

export const rentalType = isShared => (isShared ? 'shared' : 'entire');

export const toAllCaps = value => (value ? titleize(value) : '');
