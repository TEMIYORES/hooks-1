import React, {useContext} from 'react'
import { countContext } from '../AppTwo'

function CounterD() {
    const Count  = useContext(countContext)
    return (
      <div>
        <button onClick={() => Count.Contextdispatch("increment")}>
          Increase Count
        </button>
        <button onClick={() => Count.Contextdispatch("decrement")}>
          decrease Count
        </button>
        <button onClick={() => Count.Contextdispatch("reset")}>
          Reset Count
        </button>
      </div>
    );
}

export default CounterD
