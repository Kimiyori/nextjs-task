import Resume from '@assets//icons/header/Resume.svg';
import Map from '@assets//icons/header/Map.svg';
import Time from '@assets//icons/header/Time.svg';
import Notes from '@assets//icons/header/Notes.svg';
import Friends from '@assets//icons/header/Friends.svg';
import Photo from '@assets//icons/header/Photo.svg';
import Statistics from '@assets/icons/header/Statistics.svg';
import Invoices from '@assets/icons/header/Invoices.svg';
import Schedule from '@assets/icons/header/Schedule.svg';
import { NavLinkProps } from '@/utils/types';
export const bottomLeftHeader: NavLinkProps[] = [
  {
    url: '/',
    img: { src: Resume, alt: 'Resume' },
    name: 'Resume',
  },
  {
    url: '/map',
    img: { src: Map, alt: 'Map' },
    name: 'Map',
  },
  {
    url: '/time',
    img: { src: Time, alt: 'Time' },
    name: 'Time',
  },
  {
    url: '/todo',
    img: { src: Time, alt: 'Time' },
    name: 'ToDo',
  },
];
export const bottomRightHeader: NavLinkProps[] = [
  {
    url: '/notes',
    img: { src: Notes, alt: 'Notes' },
    name: 'Notes',
  },
  {
    url: '/friends',
    img: { src: Friends, alt: 'Friends' },
    name: 'Friends',
  },
  {
    url: '/friends',
    img: { src: Photo, alt: 'Photo' },
    name: 'Photo',
  },
];
export const upperHeader: NavLinkProps[] = [
  {
    url: '/statistics',
    img: { src: Statistics, alt: 'Statistics' },
    name: 'Statistics',
  },
  {
    url: '/invoices',
    img: { src: Invoices, alt: 'Invoices' },
    name: 'Invoices',
  },
  {
    url: '/schedule',
    img: { src: Schedule, alt: 'Schedule' },
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
