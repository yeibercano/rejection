//entry poin to all sagas // Ccombine sagas type
export default function* rootSaga() {
  yield [
    watchAddQuestion(),
  ]
}
