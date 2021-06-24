import { IContestData } from '../../components/ContestCard';

export interface CodeChefContests {
  presentContests: IContestData[];
  futureContests: IContestData[];
  pastContests: IContestData[];
}
