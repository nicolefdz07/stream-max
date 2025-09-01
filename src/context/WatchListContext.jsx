import { createContext,useReducer } from "react";

const WatchListContext = createContext({
  myWatchList: [],
  addToWatchList: ()=>{},
  removeFromWatchList: ()=>{}
});

function WatchListReducer(state, action){
  switch(action.type){
    case 'ADD_TO_WATCHLIST':{
      const exists = state.myWatchList.findIndex(program => program.id === action.payload.id);
      
      
      let updatedList = [...state.myWatchList];
      if(exists > -1){
        return {
          ...state,
          myWatchList: updatedList
        }
      }else {
        return {
          ...state,
          myWatchList: [...updatedList, action.payload]
        }
      }
    }
      case 'REMOVE_FROM_WATCHLIST': {
        const updatedList = state.myWatchList.filter(program=> program.id !== action.payload.id);

          return {
            ...state,
            myWatchList: updatedList
          
        }
      }
      case 'CLEAR_WATCHLIST': {
        return {
          ...state,
          myWatchList: []
        }
      }
      default: 
        return state;
      
  }
}

export const WatchListProvider = ({ children }) => {
  const [watchListState, dispatch] = useReducer(WatchListReducer, {
    myWatchList: []
  });

  const addProgram = (program)=>{
    dispatch({type: 'ADD_TO_WATCHLIST', payload: program})
  //   setTimeout(() => {
  //   console.log('Watchlist actual:', watchListState.myWatchList);
  // }, 0);
  }
  const removeProgram = (program)=>{
    dispatch({type: 'REMOVE_FROM_WATCHLIST', payload: program})
  }
  const clearWatchList = ()=>{
    dispatch({type: 'CLEAR_WATCHLIST'})
  }

  const watchListCtx = {
    myWatchList: watchListState.myWatchList,
    addProgram,
    removeProgram,
    clearWatchList
  }

  return (
    <WatchListContext.Provider value={watchListCtx}>
      {children}
    </WatchListContext.Provider>
  )

}
export default WatchListContext;