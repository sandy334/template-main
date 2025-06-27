import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./slices/counterSlice";
import themeReducer from "./slices/themeSlice";

const themePersistConfig = {
  key: "theme",
  storage,
};

const counterPersistConfig = {
  key: "counter",
  storage,
};

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);
const persistedCounterReducer = persistReducer(
  counterPersistConfig,
  counterReducer
);

export const store = configureStore({
  reducer: {
    counter: persistedCounterReducer,
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
