import React from 'react'

const User = (props) => {
    console.log(props.data.name);
    const {data} = props
    return (
        <div>
            User Component <br/>
            My name is {data.name} and I am {data.age} old.
        </div>
    )
}

export default User;
