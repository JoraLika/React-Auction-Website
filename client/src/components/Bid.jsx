import React from 'react';
import {InputGroup} from 'react-bootstrap';

function Bid({bid}) {
  return (
    <div>
        <InputGroup className='sm-3' size='md'>
         <InputGroup.Text>
            {bid.owner} : ${bid.bid}
          </InputGroup.Text>
        </InputGroup>
    </div>
  )
}

export default Bid;
