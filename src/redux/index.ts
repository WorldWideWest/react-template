import { configureStore } from '@reduxjs/toolkit'
import identitySlice from './reducers/identity/reducer'

const store = configureStore({
    reducer: {
        identity: identitySlice.reducer,
    },
})

export default store
