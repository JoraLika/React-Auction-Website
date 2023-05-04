import React from 'react';

function Bid({bid}) {
  return (
    <div>
        <input className='sm-3' size='md'>
         <p>
            {bid.owner} : ${bid.bid}
          </p>
        </input>
    </div>
  )
}

export default Bid;
