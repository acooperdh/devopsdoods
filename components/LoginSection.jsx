import styles from '../styles/HomePage.module.css'
import Link from 'next/link'
function LoginSection(){
	return (
		<div className={styles.loginSection}>
			<Link href='/login' passHref>
				<button> Login </button>
			</Link>
			<Link href='/signup' passHref>
				<button> Sign up </button>
			</Link>
		</div>
	)
}

export default LoginSection;