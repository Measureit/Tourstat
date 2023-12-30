import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import exerciseBuilderReducer from '../features/exercise-builder/exerciseBuilderSlice';
import homeReducer from '../features/home/homeSlice';
import searchReducer from '../features/search/searchSlice';
import trainingBuilderReducer from '../features/training-builder/trainingBuilderSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
    search: searchReducer,
    exerciseBuilder:exerciseBuilderReducer,
    trainingBuilder: trainingBuilderReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


