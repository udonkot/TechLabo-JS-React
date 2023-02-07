import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type{ RootState, AppDispatch } from './store.config'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
