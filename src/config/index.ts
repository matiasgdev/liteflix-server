import dotenv from 'dotenv'

interface ConfigMap {
  PORT: string
  MYSQL_HOST: string
  MYSQL_USER: string
  MYSQL_PORT: string
  MYSQL_PASSWORD: string
  MYSQL_DB: string
}

export const getConfig = (key: keyof ConfigMap): string => {
  dotenv.config()
  const value = process.env[key]

  if (!value) {
    throw new Error(`Accesing process.env.${key} failed. Try to set it`)
  }

  return value
}
