'use client'
import { signIn, useSession } from 'next-auth/react'
import styles from './loginpage.module.css'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
  const { data, status } = useSession()
  const router = useRouter()
  // console.log(data, status)
  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>
  }
  if (status === 'authenticated') {
    router.push('/')
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn('google')}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>singn in the github</div>
        <div className={styles.socialButton}>singn in the facebook</div>
      </div>
    </div>
  )
}

export default LoginPage
