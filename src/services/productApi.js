// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({

        getProduct: builder.query({
            query: (param) => ({
                url: `products/${param}`,
                method: 'GET'
            })
        }),

        getProductCategory: builder.query({
            query: (category) => ({
                url: `products/category/${category}`,
                method: 'GET'
            })
        }),

        getProductId: builder.query({
            query: (id) => ({
                url: `products/${id}`,
                method: 'GET'
            })
        }),

        productpost: builder.mutation({
            query: (formData) => ({
                url: `products/`,
                method: 'POST',
                body: 'formData'
            })
        }),


    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery,useGetProductCategoryQuery, useGetProductIdQuery, useProductpostMutation, } = productApi