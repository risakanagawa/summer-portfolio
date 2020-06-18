import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import selectedProjectReducer from './selectedProjectReducer';
import devIconReducer from './devIconReducer';

export default combineReducers({
    projects : projectsReducer,
    selectedProject : selectedProjectReducer,
    devIcons : devIconReducer
});