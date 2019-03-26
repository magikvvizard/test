import { ADD_ARTICLE, TEST_ME } from "../action_types/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}

export function addTest(payload) {
    return { type: TEST_ME, payload }
}