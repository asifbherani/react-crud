import React from 'react'
import Heading from './Heading';
import {UserList} from './UserList'; // Can be imported with {} without using default export in the UserList comoonent

export const Home = () => {
    return (
        <React.Fragment>
            <Heading/>
            <UserList/>        
        </React.Fragment>
    )
}
export default Home;