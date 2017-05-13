import entriesSagas from './features/entries/entries_sagas';

// entry point to all sagas -- combine sagas type
export default function* rootSaga() {
  yield [
    entriesSagas()
  ]
}
