"use client"
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/constants";

interface Window {
    isOpen: boolean
    zIndex: number
    data: any
    [key: string]: any
}

interface WindowState {
    windows: Record<string, Window>
    nextZIndex: number
    openWindow: (windowKey: string, data?: any) => void
    closeWindow: (windowKey: string) => void
    focusWindow: (windowKey: string) => void
}

const useWindowStore = create<WindowState>()(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey: string, data = null) => set((state) => {
            const win = state.windows[windowKey];
            win.isOpen = true;
            win.zIndex = state.nextZIndex;
            win.data = data ?? win.data;
            state.nextZIndex++;
        }),
        
        closeWindow: (windowKey: string) => set((state) => {
            const win = state.windows[windowKey];
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX;
            win.data = null;
        }),
        
        focusWindow: (windowKey: string) => set((state) => {
            const win = state.windows[windowKey];
            win.zIndex = state.nextZIndex++;
        })
    }))
)

export default useWindowStore;