import React from 'react'

const Delete = () => {
  return (
    <div>
        <div style ={{ border: '2px solid green', padding: '10px'}}>
                <h1 style ={{ color: 'green' }}> DELETE USERS </h1>
                <form action="">
                    <label htmlFor="name">Student roll no.:</label>
                    <input type="text" placeholder="Enter roll no." />
                    <button type="submit">DELETE USERS</button>
                </form>     
        </div>  
    </div>
  )
}

export default Delete