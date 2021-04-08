import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
 
  {
    title: 'Create Program',
    path: '/Createprogram',
    icon: <MdIcons.MdAddCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Update Program',
    path: '/Updateprogram',
    icon: <MdIcons.MdSystemUpdateAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Remove Program',
    path: '/Removeprogram',
    icon: <MdIcons.MdDelete />,
    cName: 'nav-text'
  },
  {
    title: 'View Program',
    path: '/Viewprogram',
    icon: <MdIcons.MdViewList/>,
    cName: 'nav-text'
  },
  {
    title: 'View All Program',
    path: '/Viewprogram',
    icon: <MdIcons.MdViewList/>,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];