import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth' //apwirte
import { logout } from '../store/authSlice'  // for store updatation

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => { // in appwrite every reducers is a promise so we can use "then" block for dispatch to update the store.
        authService.logOut().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button
            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn
