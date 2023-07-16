import Resume from '@assets//icons/header/Resume.svg';
import Map from '@assets//icons/header/Map.svg';
import Time from '@assets//icons/header/Time.svg';
import Notes from '@assets//icons/header/Notes.svg';
import Friends from '@assets//icons/header/Friends.svg';
import Photo from '@assets//icons/header/Photo.svg';
import Statistics from '@assets/icons/header/Statistics.svg';
import Invoices from '@assets/icons/header/Invoices.svg';
import Schedule from '@assets/icons/header/Schedule.svg';
export const bottomLeftHeader = [
  {
    url: '/',
    img: { image: Resume, altName: 'Resume' },
    name: 'Resume',
  },
  {
    url: '/map',
    img: { image: Map, altName: 'Map' },
    name: 'Map',
  },
  {
    url: '/time',
    img: { image: Time, altName: 'Time' },
    name: 'Time',
  },
];
export const bottomRightHeader = [
  {
    url: '/notes',
    img: { image: Notes, altName: 'Notes' },
    name: 'Notes',
  },
  {
    url: '/friends',
    img: { image: Friends, altName: 'Friends' },
    name: 'Friends',
  },
  {
    url: '/friends',
    img: { image: Photo, altName: 'Photo' },
    name: 'Photo',
  },
];
export const upperHeader = [
  {
    url: '/statistics',
    img: { image: Statistics, altName: 'Statistics' },
    name: 'Statistics',
  },
  {
    url: '/invoices',
    img: { image: Invoices, altName: 'Invoices' },
    name: 'Invoices',
  },
  {
    url: '/schedule',
    img: { image: Schedule, altName: 'Schedule' },
    name: 'Schedule',
  },
];
export const sideBar = [
  {
    title: 'Main Navigation',
    children: bottomLeftHeader,
  },
  {
    title: 'Secondary navigation',
    children: bottomRightHeader,
  },
  {
    title: 'Tertiary navigation',
    children: upperHeader,
  },
];
