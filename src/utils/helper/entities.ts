import { decodeHTML } from 'entities';

const htmlDecoding = (str: string): string => {
  return decodeHTML(str);
};

export { htmlDecoding };
