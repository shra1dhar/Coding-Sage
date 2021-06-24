import { CodeChefContests } from './interface';

const DEFAULT_CC_CONTEST: CodeChefContests = {
  presentContests: [],
  futureContests: [],
  pastContests: [],
};

enum Contest {
  Present = 'present',
  Future = 'future',
  Past = 'past',
}

export { DEFAULT_CC_CONTEST, Contest };
