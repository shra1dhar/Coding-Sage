import { IContestData } from '../../components/ContestCard';
import { CodeChefContests } from './interface';

const extractCCContests = (res): CodeChefContests => {
  const { present_contests, future_contests, past_contests } = res?.data || {};
  return {
    presentContests: parseContestData(present_contests),
    futureContests: parseContestData(future_contests),
    pastContests: parseContestData(past_contests),
  };
};

const parseContestData = (data): IContestData[] => {
  return (data || []).map(contest => {
    return {
      contestName: contest.contest_name,
      contestStartDate: contest.contest_start_date_iso,
      contestEndDate: contest.contest_end_date_iso,
    };
  });
};

export { extractCCContests };
