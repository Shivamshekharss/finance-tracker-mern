import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURI = process.env.REACT_APP_API_URL;

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
    tagTypes: ['transaction', 'categories'],  // <-- define tag types explicitly
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => '/api/categories',
            providesTags: ['categories']
        }),
        getLabels: builder.query({
            query: () => '/api/labels',
            providesTags: ['transaction'],  // <-- links labels to transactions
        }),
        addTransaction: builder.mutation({
            query: (initialTransaction) => ({
                url: '/api/transaction',
                method: "POST",
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']  // <-- triggers refetch
        }),
        deleteTransaction: builder.mutation({
            query: recordId => ({
                url: '/api/transaction',
                method: "DELETE",
                body: recordId
            }),
            invalidatesTags: ['transaction']
        })
    })
});

export default apiSlice;
export const { useGetCategoriesQuery, useGetLabelsQuery, useAddTransactionMutation, useDeleteTransactionMutation } = apiSlice;