## Dependencies
  npm i -S axios redux-thunk

  axios: make the http request
  
  redux-thunk: async call

## Using redux-thunk as middleware
  ```
  import reduxThunk from 'redux-thunk';
  ...
  
  const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
  ```

## Action 
```
  export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
```