const initialState = {
    filterThis : "all"
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "FILTER_ALL":
        return state.filterThis;
      case "FILTER_THIS":
        return
      default:
        return state;
    }
  };
  