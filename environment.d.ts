namespace NodeJS {
  interface ProcessEnv {
    VERCEL?: number
    VERCEL_ENV?: 'production' | 'preview' | 'development'
    VERCEL_URL?: string
    NEXT_PUBLIC_APP_NAME: string
    NEXT_PUBLIC_APP_URL: string
    NEXT_PUBLIC_API_URL: string
    NEXT_PUBLIC_API_KEY: string
    NEXT_PUBLIC_API_SECRET: string
  }
}
