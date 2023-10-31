import { useDispatch,TypedUseSelectorHook, useSelector } from "react-redux"
import { AppDispatch } from "."
import { IRootState } from "../Reducers";


export const useAppDispatch = () => {
    const dispatch = useDispatch<AppDispatch>();

    return dispatch
}

export const useAppStateSelector: TypedUseSelectorHook<IRootState> = 
useSelector;