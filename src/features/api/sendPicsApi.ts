import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const sendPicsApi = createApi({
  reducerPath: 'sendPicsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SEND_PICS_URL,
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
  endpoints: (build) => ({
    sendPics: build.mutation<UploadResponse, FormData>({
      query: (formData) => ({
        url: '/upload',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export interface UploadResponse {
  success: boolean;
  message?: string;
  task_id: string;
  urls?: string[]; // если сервер возвращает ссылки на загруженные картинки
}

export const { useSendPicsMutation } = sendPicsApi;
