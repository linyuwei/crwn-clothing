import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  // console.log(currentUser)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            <h1>Shop</h1>
          </Link>
          { currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>Sign Out</span>
          ) : (
            <Link className='nav-link' to='/auth'>
              <h1>Sign In</h1>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation