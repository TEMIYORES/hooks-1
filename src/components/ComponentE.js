import React from 'react'
import ComponentF from './ComponentF'
import {UserContext, UserChannel} from '../App'
function ComponentE() {
    return (
        <div>
        <UserContext.Consumer>
        {
            user =>{
           return( 
            <UserChannel.Consumer>
            {
            channel =>{
            return  <div>  Normal Component - {user} and {channel}</div>
            }
            }
            </UserChannel.Consumer>
            )
            }
        }
                
            
        </UserContext.Consumer>
            <ComponentF/>
        </div>
    )
}

export default ComponentE

