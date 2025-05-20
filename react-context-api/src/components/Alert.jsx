import React from 'react'
import { useAlertContext } from '../context/AlertContext'

const Alert = () => {
    const { alertData } = useAlertContext()
    return (
        <div className='alert'>{alertData.message}</div>
    )
}

export default Alert