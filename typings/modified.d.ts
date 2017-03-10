declare namespace NodeJS {
  export interface Process {
    env: {
      [prop: string]: any
      DB_PROTOCOL: string
      DB_HOST: string
      DB_PORT: string
      DB_NAME: string
      MONGOSTORE_NAME: string
    }
  }
}
