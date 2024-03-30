import styles from './Header.module.css'
import { Link } from 'react-router-dom'
// import logo from '../img/logo.svg'
import 'normalize.css';
// import './index.css'

export default function Header() {
    return (
        <header>
            <div className={styles["header-wrap"]}>
                <h1><a href="./"><img className={styles.logo} alt="두근두근 비밀일기" /></a></h1>
                <div>
                    <Link to="/signup" className={"btn-join"}>회원가입</Link>
                </div>
            </div>
        </header>
    )
}