
  
export const FilterAll = () =>{ 
    return{
        type: "FILTER_ALL", payload: selectedProject
    }
};
  
export const FilterThis = (attribute) =>{ 
    return{
        type: "FILTER_THIS", payload: attribute
    }
};
  