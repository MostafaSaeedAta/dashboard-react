import moment from 'moment/moment'
import css from './Layout.module.css'
import { IoIosSearch } from "react-icons/io";


const Layout = () => {
  return (
    <div className={css.container}>

      <div className=''>sidebar</div>

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
        </div>
      </div>

    </div>
  )
}

export default Layout