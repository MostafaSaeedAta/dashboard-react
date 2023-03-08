import moment from 'moment/moment'
import css from './Layout.module.css'
import { IoIosSearch } from "react-icons/io";
import Sidebar from '../Sidebar/Sidebar';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


const Layout = () => {

  const { pathname } = useLocation() ;  
  return (
    <div className={css.container}>

       <Sidebar/>  

       { /* make dashboard as first route */ }
       { pathname === '/' && <Navigate to='/dashboard' /> }

      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className='gradient-red'></div>
          <div className='gradient-orange'></div>
          <div className='gradient-blue'></div>
        </div>

        <div className={css.header}>
          <span> { moment().format('dddd, Do  MM YYYY') } </span>

          <div className={css.searchBar}>
            <IoIosSearch size={20} />
            <input type='text' placeholder='search'/>
          </div>

          <div className={css.profile}>
            <img src='profile.png' alt='person image' />
            <div className={css.details}>
              <span> mostafa saeed </span>
              <span> mostafa123233@gmail.com </span>
            </div>
          </div>

        </div>

        <div className={css.content}>
            <Outlet />
        </div>

      </div>

    </div>
  )
}

export default Layout