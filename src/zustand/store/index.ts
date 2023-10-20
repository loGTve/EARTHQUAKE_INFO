import { create } from "zustand";

/* 구글 맵이 불러와지면 값 변경 -> useEffect **/
export const useGoogleMapStore = create((set) => ({
    maps: null,
    
}));