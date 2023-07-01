import dotenv from 'dotenv'

interface ConfigMap {
  PORT: string
  SQL_HOST: string
  SQL_USER: string
  SQL_PORT: string
  SQL_PASSWORD: string
  SQL_DB: string
  SQL_DB_TYPE: string
}

export const getConfig = (key: keyof ConfigMap): string => {
  dotenv.config()
  const value = process.env[key]

  if (!value) {
    throw new Error(`Accesing process.env.${key} failed. Try to set it`)
  }

  return value
}
