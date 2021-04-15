import { fork, takeEvery, call, put } from "@redux-saga/core/effects";
import { GET_USERS_REQUEST, setUsers } from "../UserRedux";

const getUsers = async (dummy) => {
    let response = await fetch('https://rem-rest-api.herokuapp.com/api/users');
    let responseJson = await response.json();
    let users = responseJson.data;

    return users;
}

function* workerGetUsers() {
    const users = yield call(getUsers, 'dummy');
    yield put(setUsers(users));
}


function* watchGetUsersRequest() {
    yield takeEvery(GET_USERS_REQUEST, workerGetUsers)
}

const userSagas = [
    fork(watchGetUsersRequest),
];

export default userSagas;