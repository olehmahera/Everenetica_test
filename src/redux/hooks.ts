import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../types/StoreTypes";
import { useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;