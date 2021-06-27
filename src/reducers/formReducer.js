import {
  SHOW_FORM,
  ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_ERROR,
  GET_PROJECTS,
  FORM_ERROR,
  ACTUAL_PROJECT
} from "../types";

const initialState = {
  visible: false,
  projects: [],
  loading: false,
  error: null,
  project: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_FORM:
      return {
        ...state,
        visible: !state.visible,
      };

    case ADD_PROJECT:
      return {
        ...state,
        loading: action.payload,
        error: false
      };

    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: [...state.projects, action.payload],
        visible: false
      };

    case ADD_PROJECT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case FORM_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case ACTUAL_PROJECT:
      return {
        ...state,
        project: state.projects.filter(project => project === action.payload) 
      }

    default:
      return state;
  }
}