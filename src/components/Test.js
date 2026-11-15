import React from 'react'

function Test(prosp) {
  return (
    <div>
        <form>
            <input type='text' />
        </form>
        <button onClick={()=>prosp.setShow(true)}></button>
    </div>
  )
}

export default Test