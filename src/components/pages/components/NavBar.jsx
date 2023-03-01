import React from 'react';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import DrawerItem from './DrawerItems';
 import illustration from '../../../images/ill.jpg';
 import GroupIcon from '@mui/icons-material/Group';
 import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
 import BookOnlineIcon from '@mui/icons-material/BookOnline';
 import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
 import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
 import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
 import LogoutIcon from '@mui/icons-material/Logout';
 import DashboardIcon from '@mui/icons-material/Dashboard';
 import CategoryIcon from '@mui/icons-material/Category';
const Navigation = () => {
    return (
        <nav className=' text-left fixed top-0 left-0  w-2/12  t font-semibold bg-white shadow-xl rounded-lg min-h-screen  '>
            <Link to = "/"> <div className='my-6 mx-10 flex flex-row '>
        <img className="h-16 w-16 shadow-xl rounded-full" src={logo} alt="Logo" height="45"  width="45"/>
        <h3 className="m-5 text-green-900 font-bold  text-lg">HAKIME</h3>
        </div>
        </Link>
            <ul className=''>
                <DrawerItem link="/home" title="Dashboard" icon={<DashboardIcon/>}/ >
                <DrawerItem link="/patient" title="Patients" icon={<GroupIcon/>}/>
                <DrawerItem link="/appointments" title="Appointments" icon={<BookOnlineIcon/>}/>
                <DrawerItem link="/requests" title="Manage billings" icon={<NotificationsActiveIcon/>}/>
                <DrawerItem link="/doctor" title="Manage doctors" icon={<PeopleAltIcon/>}/>
                <DrawerItem link="/ads" title="Manage advertisment" icon={<FeaturedVideoIcon/>}/>
                <DrawerItem link="/catagories" title="Manage catagories" icon={<CategoryIcon/>} />

              
                
              
              
            </ul>
            <DrawerItem link="/" title="logout" icon={<LogoutIcon/>} className="absolute bottom-0 left-0"/>


        </nav>
    );
};
export default Navigation;