//watchAddQuestion sagas
export const watchAddQuestion = function* watchAddQuestion() {
  console.log('redux-sagas runnig');
}

//entry poin to all sagas // Ccombine sagas type
export default function* rootSaga() {
  yield [
    watchAddQuestion(),
  ]
}
