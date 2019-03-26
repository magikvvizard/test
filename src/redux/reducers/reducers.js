import { ADD_ARTICLE, TEST_ME } from "../action_types/action-types";

const initialState = {
    articles: [],
    test: []
};

export default function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    } else if (action.type === TEST_ME){
        return Object.assign({}, state, {
            test: state.test.concat(action.payload)
        });

    }
    return state;
}