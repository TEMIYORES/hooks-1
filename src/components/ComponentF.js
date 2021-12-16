import React, {useContext} from 'react'
import {UserContext, UserChannel} from '../App'
function ComponentC() {
    const user = useContext(UserContext)
    const channel = useContext(UserChannel)
    return (
        <div>
            ComponentF - {user} and {channel}
        </div>
    )
}

export default ComponentC
