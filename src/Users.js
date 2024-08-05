import React from 'react'

const Users = ({name1, email, color}) => {
  return (
    <div >User:
        <h1 style={{color:color}}>{name1}, {email}</h1>
    </div>
  )
}

export default Users