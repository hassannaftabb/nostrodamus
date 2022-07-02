import { FaHome, FaRegUserCircle } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { SiBitcoinsv } from 'react-icons/si';
import { VscGraphLine } from 'react-icons/vsc';
import { MdFeedback } from 'react-icons/md';
import { FiSettings, FiLogOut } from 'react-icons/fi';
export const NavBarTheme = {
  color: 'primary',
};

export const LogoData = {
  logoSrc: '/watermarks/logo.png',
  logoAlt: 'logo',
  logoWidth: 200,
  logoHeight: 150,
};

export const NavLinksDataPrime = [
  {
    title: 'Home',
    href: '/home',
    color: '',
    icon: <FaHome className="text-2xl" />,
  },
  {
    title: 'Search',
    href: '/search',
    color: '',
    icon: <BsSearch className="text-2xl" />,
  },
  {
    title: 'Crypto',
    href: '/crypto',
    color: '',
    icon: <SiBitcoinsv className="text-2xl" />,
  },
  {
    title: 'Reports',
    href: '/reports',
    color: '',
    icon: <VscGraphLine className="text-2xl" />,
  },
];

export const NavLinksDataSec = [
  {
    title: 'Feedback',
    href: '/feedback',
    color: '',
    icon: <MdFeedback className="text-2xl" />,
  },
  {
    title: 'Settings',
    href: '/settings',
    color: '',
    icon: <FiSettings className="text-2xl" />,
  },
  {
    title: 'Profile',
    href: '/profile',
    color: '',
    icon: <FaRegUserCircle className="text-2xl" />,
  },
  {
    title: 'Logout',
    href: '#',
    color: '',
    icon: <FiLogOut className="text-2xl" />,
  },
];
