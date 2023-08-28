import { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../types/StoreTypes";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;