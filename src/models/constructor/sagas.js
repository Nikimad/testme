import { _delete, _patch, _post } from "@/lib/_fetch";
import { call, put, takeLatest } from "redux-saga/effects";
import { constructorActions } from ".";

const _addTest = (body) => _post("tests", {}, { body });
const _editTest = ({id, body}) => _patch(`tests/${id}`, {}, { body });
const _deleteTest = (id) => _delete(`tests/${id}`);
const _addQuestion = ({ id, body }) => _post(`tests/${id}/questions`, {}, { body });
const _editQuestion = ({ id, body }) => _patch(`questions/${id}`, {}, { body });
const _deleteQuestion = (id) => _delete(`questions/${id}`);

function* addTest({ payload }) {
    try {
        yield put(constructorActions.start());
        const test = yield call(_addTest, payload);
        yield put(constructorActions.addTestSuccess(test));
    } catch (error) {
        yield put(constructorActions.reject(error));
    } finally {
        yield put(constructorActions.finish());
    }
}

function* deleteTest({ payload }) {
    try {
        yield call(_deleteTest, payload);
    } catch {}
}

function* addQuestion({ payload }) {
    try {
        yield put(constructorActions.start());
        const question = yield call(_addQuestion, payload);
        yield put(constructorActions.addQuestionSuccess(question));
    } catch (error) {
        yield put(constructorActions.reject(error));
    } finally {
        yield put(constructorActions.finish());
    }
}

function* editQuestion({ payload }) {
    try {
        yield put(constructorActions.start());
        yield call(_editQuestion, payload);
    } catch (error) {
        yield put(constructorActions.reject(error));
    } finally {
        yield put(constructorActions.finish());
    }
}

function* deleteQuestion({ payload }) {
    try {
        yield put(constructorActions.start());
        yield call(_deleteQuestion, payload);
    } catch (error) {
        yield put(constructorActions.reject(error));
    } finally {
        yield put(constructorActions.finish());
    }
}

function* editTest({ payload : {id, ...body} }) {
    yield put(constructorActions.start());
    try {
        yield call(_editTest, { id, body });
    } catch (error) {
        yield put(constructorActions.reject(error));
    } finally {
        yield put(constructorActions.finish());
    }
}

export default function* constructorSaga() {
    yield takeLatest(constructorActions.addTest, addTest);
    yield takeLatest(constructorActions.editTest, editTest);
    yield takeLatest(constructorActions.deleteTest, deleteTest);
    yield takeLatest(constructorActions.addQuestion, addQuestion);
    yield takeLatest(constructorActions.editQuestion, editQuestion);
    yield takeLatest(constructorActions.deleteQuestion, deleteQuestion);
}