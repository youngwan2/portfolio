import styles from './Header.module.scss'
import Clock from '../Clock'
import { HiBattery100, HiChartBar } from 'react-icons/hi2'

export default function Header() {

    return (
        <header className={styles.Header}>
            <div className={styles.inline_boundary}>
                <Clock />
                <h1>KYW PORTFOLIO</h1>
                <span className={styles.icons}>
                    <HiChartBar />
                    <HiBattery100 className={styles.battery_icon}/>
                </span>
            </div>

        </header>
    )
}