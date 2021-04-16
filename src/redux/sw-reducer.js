import axios from "axios";

const instance = axios.create({
  baseURL: "https://swapi.dev/api",
  timeout: 1000,
});

export const SET_PEOPLE = "SET_PEOPLE";
export const SET_SELECTED_PEOPLE = "SET_SELECTED_PEOPLE";
export const CLEAR_SELECTED_PERSON = "CLEAR_SELECTED_PERSON";
export const CLEAR_ALL_SW = "CLEAR_ALL_SW";

export const setPeople = (people) => ({
  type: SET_PEOPLE,
  people,
});

export const clearSelectedPerson = (dispatch) =>
  dispatch({
    type: CLEAR_SELECTED_PERSON,
  });

export const clearAllSw = (dispatch) =>
  dispatch({
    type: CLEAR_ALL_SW,
  });

export const setSelectedPerson = (person) => ({
  type: SET_SELECTED_PEOPLE,
  person,
});

export const getPeople = (page = 1) => async (dispatch) => {
  try {
    const { data } = await instance.get(`/people?page=${page}`);
    dispatch(setPeople(data.results));
  } catch (error) {
    return await Promise.reject(error);
  }
};

const getFilmsDetail = async (url) => {
  const res = await instance.get(url);
  return res.data;
};

export const getPersonDetail = (person) => async (dispatch) => {
  try {
    const { films } = person;
    const allfilms = await Promise.all(films.map(getFilmsDetail));
    const personDetail = { ...person, allfilms };
    dispatch(setSelectedPerson(personDetail));
  } catch (error) {
    return await Promise.reject(error);
  }
};

const initialState = {
  people: [],
  selectedPerson: null,
};

const swapEvents = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE:
      return { ...state, people: action.people };
    case SET_SELECTED_PEOPLE:
      return { ...state, selectedPerson: action.person };
    case CLEAR_ALL_SW:
      return initialState;
    default:
      return state;
  }
};

export default swapEvents;
