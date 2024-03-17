/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        PUBLIC_URL: string
        REACT_APP_API_URI: string
        REACT_APP_PASSWORD_FLOW_CLIENT_ID: string
        REACT_APP_PASSWORD_FLOW_CLIENT_SECRET: string
    }
}
