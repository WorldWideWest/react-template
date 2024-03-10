import { createSlice } from '@reduxjs/toolkit'
import Reducers from '../../../constants/redux/reducers'
import { IdentityStore } from './interface'

const initialState: IdentityStore<object> = {
    isLoading: false,
    succeeded: false,
    errors: [],
    body: {},
}

const identitySlice = createSlice({
    name: Reducers.identity,
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {},
})

export default identitySlice
