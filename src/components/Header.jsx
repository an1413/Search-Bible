import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'
// import logo from '../img/logo.svg'
import 'normalize.css';
import { useLogout } from '../hooks/useLogout';
import useAuthContext from '../hooks/useAuthContext';
// import './index.css'

export default function Header() {
    const {logout} = useLogout();
    const { user } = useAuthContext();
	const location = useLocation();

    return (
        <div>
            {/* 만약 유저 상태가 null, 즉 로그아웃 이라면 */}
            {!user && (
                <>
                    {
                        location.pathname === "/signup" ? (
                            <Link to="/login" className='btn-join'>로그인</Link>
                        ) : (<Link to="/signup" className='btn-join'>회원가입</Link>)
                    }
                </>
            )}
            {/* 만약 유저의 상태가 존재한다면 */}
            {user &&
                <>
                    <p className='hello'>환영합니다 <strong>{user.displayName}</strong>님!</p>
                    <Link to="/" className='btn-logout' onClick={logout}>로그아웃</Link>
                </>
            }
        </div>
    )
}