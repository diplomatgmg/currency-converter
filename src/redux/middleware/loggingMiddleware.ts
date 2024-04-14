import { type Middleware, type PayloadAction } from '@reduxjs/toolkit'

const loggingMiddleware: Middleware = () => (next) => (action) => {
  const payloadAction = action as PayloadAction

  if (payloadAction.type === 'api/executeQuery/pending') {
    console.log('Выполняется API запрос:', payloadAction.type)
  }

  return next(action)
}

export default loggingMiddleware
