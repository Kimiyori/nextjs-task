import Email from '@assets/icons/resume/contact/Email.svg';
import Phone from '@assets/icons/resume/contact/Phone.svg';
import City from '@assets/icons/resume/contact/City.svg';
import MyProfile from '@assets/icons/resume/nav/MyProfile.svg';
import Balance from '@assets/icons/resume/nav/Balance.svg';
import Connections from '@assets/icons/resume/nav/Connections.svg';
import Friends from '@assets/icons/resume/nav/FriendsNavigation.svg';
import Events from '@assets/icons/resume/nav/Events.svg';
import Settings from '@assets/icons/resume/nav/SettingsNavigation.svg';
import { NavLinkProps } from '@/utils/types';
export const skillsList = [
  {
    title: 'Front-end stack',
    skills: ['JavaScript', 'TypeScript', 'HTML/CSS', 'React', 'Redux'],
  },
  {
    title: 'Back-end stack',
    skills: ['Python', 'Django', 'FastAPI', 'aiohttp'],
  },
  {
    title: 'Data',
    skills: ['PostgreSQL', 'Redis', 'MongoDB'],
  },
  {
    title: 'Development',
    skills: ['GIT', 'Docker', 'Nginx'],
  },
];
export const addresses: NavLinkProps[] = [
  {
    name: 'Rostov-on-Don',
    url: 'https://goo.gl/maps/1omRBkRkp5ek3C8d6',
    img: {
      src: City,
      alt: 'Location',
    },
  },
  {
    name: 'maksimkalin17@gmail.com',
    url: 'mailto:maksimkalin17@gmail.com',
    img: {
      src: Email,
      alt: ' Email',
    },
  },
  {
    name: '+7 (999) 191-22-45',
    url: 'tel:+79991912245',
    img: {
      src: Phone,
      alt: 'Phone',
    },
  },
];

export const sideNavData = [
  {
    url: '/profile',
    img: { src: MyProfile, alt: 'Profile' },
    name: 'My profile',
  },
  {
    url: '/balance',
    img: { src: Balance, alt: 'Balance' },
    name: 'Balance',
  },
  {
    url: '/conn',
    img: { src: Connections, alt: 'Connections' },
    name: 'Connections',
  },
  {
    url: '/bfriends',
    img: { src: Friends, alt: 'Friends' },
    name: 'Friends',
  },
  { url: '/events', img: { src: Events, alt: 'Events' }, name: 'Events' },
  {
    url: '/settings',
    img: { src: Settings, alt: 'Settings' },
    name: 'Settings',
  },
];
