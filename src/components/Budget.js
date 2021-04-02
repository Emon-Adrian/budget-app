import React, {useContext} from 'react'
import {AppContext} from '../components/Context/AppContext'
const Budget = () => {
    const { budget } = useContext(AppContext)
    return (
        <div className="alert alert-secondary">
            <span>Budget: shs.{budget}</span>
        </div>
    )
}

export default Budget
