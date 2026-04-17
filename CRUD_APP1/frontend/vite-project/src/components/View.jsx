import React from 'react'

const View = () => {
  return (
    <div>
      <div style={{ border: '2px solid red', padding: '10px' }}>
        <h1 style={{ color: 'green' }}> SHOW DATA </h1>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Roll No</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>1</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Ali</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>20</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>2</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Sara</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>22</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>3</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Ahmed</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>19</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default View