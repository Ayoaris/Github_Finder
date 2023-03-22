import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";

const GithubContext = createContext();
 
// Secret keys
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => { 

// Search Users
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();
    console.log(items);

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };
    const initialState = {
      users: [],
      user: {},
      repos: [],
      loading: false,
    };

    const [state, dispatch] = useReducer(githubReducer, initialState);

    // search single user
    const getUser = async (login) => {
      setLoading();
      const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
      if (response.status === 404) {
        window.location.href = "/notFound";
      } else {
        const data = await response.json();
          // console.log(data);

        dispatch({
          type: "GET_USER",
          payload: data,
        });
      }
    };
  
  
   const getUsersRepo = async (login) => {
     setLoading();
     const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
       headers: {
         Authorization: `token ${GITHUB_TOKEN}`,
       },
     });
     if (response.status === 404) {
       window.location.href = "/notFound";
     } else {
       const data = await response.json();
       console.log("Repo",data);

       dispatch({
         type: "GET_REPO",
         payload: data,
       });
     }
   };


  // clear users
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };
  // set loading
  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };
  return (
    <GithubContext.Provider
      value={{
        // ...state, this are the intial state
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        // dispatch This are the dispatch actions
        getUsersRepo,
        getUser,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
