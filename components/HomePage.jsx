import styles from '../styles/HomePage.module.css'
import LoginSection from '../components/LoginSection'
function HomePage() {
  return (
	<div className={styles.container}>
	  <h1>Welcome!</h1>
	  <LoginSection />
	</div>
  );
}

export default HomePage;