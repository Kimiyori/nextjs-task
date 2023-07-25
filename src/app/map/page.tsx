import type { Metadata } from 'next';
import MapPage from '@/components/pageSpecific/map.elements';

export const metadata: Metadata = {
  title: 'Map',
  description: 'Map page',
};

export default function Map() {
  return <MapPage />;
}
