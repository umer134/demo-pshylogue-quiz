import { configureStore } from "@reduxjs/toolkit";
import { sendPicsApi } from "../api/sendPicsApi";
import { surveyApi } from "../api/surveyApi";


export const store = configureStore({
    reducer: {
        [sendPicsApi.reducerPath]: sendPicsApi.reducer,
        [surveyApi.reducerPath]: surveyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(sendPicsApi.middleware, surveyApi.middleware)
    }
});