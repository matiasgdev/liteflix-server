import dotenv from 'dotenv'

interface ConfigMap {
  PORT: string
}

export const getConfig = (key: keyof ConfigMap): string => {
  dotenv.config()
  const value = process.env[key]

  if (!value) {
    throw new Error(`
    Accesing process.env.${key} failed. Try to set it`)
  }

  return value as string
}
