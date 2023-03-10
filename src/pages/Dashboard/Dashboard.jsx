 import { cardsData } from '../../data'
import css from './Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={css.container}>
    
      {/* left side */}
      <div className={css.dashboard}>
        
        <div className={ `${css.dashboardHead} theme-container ` }>
          <div className={css.head}>
            <span> dashboard </span>

            <div className={css.durationButton}>
              <select>
                <option value=''> 1 weak</option>
                <option value=''> 1 month</option>
                <option value=''> 1 year</option>
              </select>
            </div>
          </div>

          <div className={css.cards}>
            {
              cardsData.map((card, index)=>(
                <div className={css.card}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span>{card.change}</span>
                </div>
               
                </div>
              ))
            }
          </div>
        </div>
        
      </div>

      <div className={css.orders}>
        orders
      </div>

    </div>
  )
}

export default Dashboard