import { create } from "zustand";

export const useAlerts = create(set => ({
    showAlertForm: false,
    showAlertBrif: false,
    showAlertError: false,
    toggleAlertForm: () => {
        set((state) => ({showAlertForm: !state.showAlertForm}))
        setTimeout(() => {
            set((state) => ({showAlertForm: !state.showAlertForm}))
        }, 2500)
    },
    toggleAlertBrif: () => {
        set((state) => ({showAlertBrif: !state.showAlertBrif}))
        setTimeout(() => {
            set((state) => ({showAlertBrif: !state.showAlertBrif}))
        }, 2500)
    },
    toggleAlertErr: () => {
        set((state) => ({showAlertError: !state.showAlertError}))
        setTimeout(() => {
            set((state) => ({showAlertError: !state.showAlertError}))
        }, 2500)
    }
}))

export const useTags = create(set => ({
    tagIndex: 0,
    activeTagIndex: (index) => set({tagIndex: index})
}))

export const useSpoiler = create(set => ({
    spoilerOpen: null,
    changeOpenSpoiler: (id) => set({spoilerOpen: id})
}))