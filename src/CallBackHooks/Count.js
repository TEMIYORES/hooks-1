import React from 'react'

function Count({count, text}) {
    console.log(`Rendering ${text}`);
    return (
        <div>
            {
                text === "age" ? <p>Count -- {count}</p> : null
            }
            {
                text === "salary" ? <p>Salary -- {count}</p> : null
            }
        </div>
    )
}

export default React.memo(Count)
