import React from 'react'

function Attackdetail({ attackDetails }) {
    return (
        <div>
            {attackDetails.length === 0 ? (
                 <p>No moves yet</p>
            ) :(
                < ul >
            {
                attackDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))
            }
            </ul> )}
    </div>
  )
}

export default Attackdetail