import {createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {createStore} from 'redux' ; 

export const shazamCoreApi = createApi({
    reducerPath : 'shazamCoreApi' ,
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://shazam-core.p.rapidapi.com/v1' ,
        preperHeaders : (header)=> {
            header.set("X-RapidAPI-Key" ,  '0e56cfa6damsh07cd963f147964bp1fbf0cjsn86c42b1dc4d9')
            return  header ; 
        }
    }) ,
    endpoints : (builder) => ({
        getTopCharts : builder.query({query : '/charts/world'})
    })
})


export const {
    useGetTopChartsQuery , 
} = shazamCoreApi ; 






/* export const shazamCoreApi = createApi({
    reducerPath : 'shazamCoreApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://shazam-core.p.rapidapi.com/v1', 
        preperHeaders : (header)=> {
            header.set("X-RapidAPI-Key" ,  '0e56cfa6damsh07cd963f147964bp1fbf0cjsn86c42b1dc4d9')
            return header
        },
        endpoints : (builder)=>({
            getTopCharts : builder.query({query : '/charts/world'})
        })
    }),
}) */

