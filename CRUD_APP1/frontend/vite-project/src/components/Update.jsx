import React from 'react'

export const Update = () => {
  return (
    <div>
       
        <div style ={{ border: '2px solid green', padding: '10px'}}>
             <h1 style ={{ color: 'green' }}> UPDATE USERS </h1>
              <form action="">
                  <label htmlFor="name">Student roll no.:</label>
                  <input type="text" placeholder="Enter roll no." />
                  <label htmlFor="name">Student Name:</label>
                  <input type="text" placeholder="Enter user name" />
                  <label htmlFor="email">Student age:</label>
                  <input type="email" placeholder="Enter user age" />
                  <button type="submit">UPDATE DATA</button>
              </form>
        </div>
    </div>
  )
}

export default Update