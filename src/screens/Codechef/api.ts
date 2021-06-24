import axios from 'axios';
import { extractCCContests } from './helper';

const fetchContests = async () => {
  const URI = 'https://www.codechef.com/api/list/contests/all?sort_by=END&sorting_order=desc&offset=0';
  const response = await axios.get(URI);
  return extractCCContests(response);
};

export { fetchContests };
