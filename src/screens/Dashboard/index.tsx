import React, { FC } from 'react';
import Codechef from '../Codechef';
import { Contest } from '../Codechef/constants';
import Tabs from '../../components/Tabs';

const Dashboard: FC = () => {
  const tabs = [
    {
      name: 'present',
      title: 'Ongoing',
      child: <Codechef contestType={Contest.Present} />,
    },
    {
      name: 'future',
      title: 'Upcoming',
      child: <Codechef contestType={Contest.Future} />,
    },
    {
      name: 'past',
      title: 'Past',
      child: <Codechef contestType={Contest.Past} />,
    },
  ];
  return <Tabs defaultTab="present" tabs={tabs} />;
};

export default Dashboard;
