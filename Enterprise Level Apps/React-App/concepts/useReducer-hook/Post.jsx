import { useReducer } from 'react';

const initial_state = {
  postData: {},
  error: false,
  loading: false
}

const ACTIONS = {
  FETCHED_IT: 'fetched_it',
  FETCH_START: 'fetch_start',
  FETCH_ERROR: 'fetch_error'
}

const fetch_post = async () => {
  const req = await fetch('https://dummyjson.com/posts/1');
  const res = await req.json();
  return res;
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCHED_IT: return { ...state, postData: action.payload, loading: false }
    case ACTIONS.FETCH_START: return { ...state, loading: true }
    case ACTIONS.FETCH_ERROR: return { ...state, error: true, loading: false }
  }
}

function Post() {

  const [state, dispatch] = useReducer(reducer, initial_state);

  async function handleClick() {
    dispatch({ type: ACTIONS.FETCH_START });
    try {
      const res = await fetch_post();
      dispatch({ type: ACTIONS.FETCHED_IT, payload: { ...res } })
    } catch {
      dispatch({ type: ACTIONS.FETCH_ERROR })
    }
  }

  return (
    <div>
      <button onClick={handleClick}> {state.loading ? 'Loading' : 'Fetch'}</button>
      <div>
        {
          (state.postData?.title) ? <p>{state.postData.title}</p> : state.error ? 'Error' : ''
        }
      </div>
    </div>
  )
}

export default Post