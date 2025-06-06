
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const surveyApi = createApi({
  reducerPath: 'surveyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SUBMIT_SURVEY_URL,
  }),
  endpoints: (builder) => ({
    submitSurvey: builder.mutation<void, Record<string, any>>({
      query: (data) => {
        const taskId = localStorage.getItem('taskId');
        return {
          url: '/submit-survey',
          method: 'POST',
          body: JSON.stringify({ survey:{
            ...data
          }, task_id: taskId,}),
          headers: {
            'Content-Type': 'application/json',
          },
        };
      },
    }),
  }),
});

export const { useSubmitSurveyMutation } = surveyApi;
