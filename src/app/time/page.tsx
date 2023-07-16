import type { Metadata } from 'next';
import { Time } from '@/components/pageSpecific/time.elements';

export const metadata: Metadata = {
  title: 'Time',
  description: 'Timer page',
};


const TimePage = () => {
  return <Time />;
};
export default TimePage;
