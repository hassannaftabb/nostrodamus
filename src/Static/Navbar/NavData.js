import { FaHome, FaRegAddressCard, FaRegUserCircle } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { SiBitcoinsv } from 'react-icons/si';
import { VscGraphLine } from 'react-icons/vsc';
import { MdFeedback } from 'react-icons/md';
import { FiSettings, FiLogOut, FiLogIn } from 'react-icons/fi';
export const NavBarTheme = {
  color: 'primary',
};

export const LogoData = {
  logoSrc: '/watermarks/logo.png',
  logoAlt: 'logo',
  logoWidth: 200,
  logoHeight: 150,
  href: '/home',
};

export const NavLinksDataPrime = [
  {
    title: 'Home',
    href: '/home',
    color: '',
    icon: <FaHome className="text-2xl mr-2" />,
  },
  {
    title: 'Search',
    href: '/search',
    color: '',
    icon: <BsSearch className="text-2xl mr-2" />,
  },
  {
    title: 'Crypto',
    href: '/crypto',
    color: '',
    icon: <SiBitcoinsv className="text-2xl mr-2" />,
  },
  {
    title: 'Reports',
    href: '/reports',
    color: '',
    icon: <VscGraphLine className="text-2xl mr-2" />,
  },
];

export const NavLinksDataSec = [
  {
    title: 'Feedback',
    href: '/feedback',
    color: '',
    icon: <MdFeedback className="text-2xl mr-2" />,
  },
  {
    title: 'Settings',
    href: '/settings',
    color: '',
    icon: <FiSettings className="text-2xl mr-2" />,
  },
  {
    title: 'Profile',
    href: '/profile',
    color: '',
    icon: <FaRegUserCircle className="text-2xl mr-2" />,
  },
];

export const NavLinksDataOptional = [
  {
    title: 'Logout',
    href: '#',
    color: '',
    icon: <FiLogOut className="text-2xl mr-2" />,
  },
];

export const NavLinksUnLogged = [
  {
    title: 'Login',
    href: '/login',
    color: '',
    icon: <FiLogIn className="text-2xl mr-2" />,
  },
  {
    title: 'SignUp',
    href: '/signup',
    color: '',
    icon: <FaRegAddressCard className="text-2xl mr-2" />,
  },
  {
    title: 'Search',
    href: '/search',
    color: '',
    icon: <BsSearch className="text-2xl mr-2" />,
  },
  {
    title: 'Crypto',
    href: '/crypto',
    color: '',
    icon: <SiBitcoinsv className="text-2xl mr-2" />,
  },
];
