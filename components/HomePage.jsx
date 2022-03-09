import styles from '../styles/HomePage.module.css'
import LoginSection from '../components/LoginSection'
import { Heading } from '@chakra-ui/react'

function HomePage() {
  return (
	<div className={styles.container}>
	  <Heading size="2xl"> Login in / Sign up </Heading>
	  <LoginSection />
	  <div className={styles.spacer}> </div>
	</div>
  );
}

export default HomePage;