import React from 'react'

export const Add = () => {
  return (
    <div style ={{ border: '2px solid green', padding: '10px' }}>
      <h1 style ={{ color: 'green' }}> CREATE USERS </h1>   
      {/* form for creating users will be here */}
      <form action= "">
        <label htmlFor="name">Student Name:</label>
        <input type="text" placeholder="Enter user name" />
        <label htmlFor="age">Student Age:</label>
        <input type="number" placeholder="Enter user age" />
        <button type="submit">SAVE DATA</button>
      </form>

    </div>
  )
}
export default Add