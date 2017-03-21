declare namespace NodeJS {
  export interface Process {
    env: {
      [prop: string]: any
      DB_PROTOCOL: string
      DB_HOST: string
      DB_PORT: string
      DB_NAME: string
      MONGOSTORE_NAME: string
      NODE_ENV: 'production' | 'development'
      ENABLE_INITIAL_STATE: '0' | '1'
      ENABLE_SERVER_ACTION_LOG: '0' | '1'
    }
  }
}
