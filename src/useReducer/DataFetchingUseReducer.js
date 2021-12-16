import React, {useEffect,useReducer} from 'react'
import axios from 'axios'


const initialState = {
    loading : true,
    error : '',
    post : {}
}

const reducer = (state,action) => {
    switch(action.type){
    case 'FETCH_SUCCESS':
    return {
        loading : false,
        error : '',
        post : action.payload
    }
    case 'FETCH_FAILED':
    return {
        loading : false,
        error : 'Something went wrong!',
        post : {}
    }
    default : 
    return state
    }
}
function DataFetchingUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
          console.log(response.data);
          dispatch({ type: "FETCH_SUCCESS", payload: response.data });
        })
        .catch((err) => {
            console.log(err)
          dispatch({ type: "FETCH_FAILED" });
        });
    },[

        
    ]);
    return (
      <div>
        {state.loading ? (
          <div>Loading ...</div>
        ) : (
          <div>
            {state.post.title} <p>{state.post.body}</p>
          </div>
        )}
        {state.error ? <div>{state.error}</div> : null}
      </div>
    );
}

export default DataFetchingUseReducer
