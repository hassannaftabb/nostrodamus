import { FaHome } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { SiBitcoinsv } from 'react-icons/si';
import { VscGraphLine } from 'react-icons/vsc';
import { MdFeedback } from 'react-icons/md';

export const QuickBarLinksData = [
  {
    icon: <FaHome className="text-2xl text-gray-700 hover:text-primary " />,
    href: '/home',
  },
  {
    icon: <BsSearch className="text-2xl text-gray-700 hover:text-primary " />,
    href: '/search',
  },
  {
    icon: (
      <SiBitcoinsv className="text-2xl text-gray-700 hover:text-primary " />
    ),
    href: '/crypto',
  },
  {
    icon: (
      <VscGraphLine className="text-2xl text-gray-700 hover:text-primary " />
    ),
    href: '/reports',
  },
];

export const QuickBarButtonData = {
  icon: <MdFeedback className="text-2xl mr-1 " />,
  href: '/feedback',
};
