import { defineStore } from 'pinia';

export const useLoadingStore = defineStore({
    id: 'useLoadingStore',
    state: () => ({
        loadingStatus : null
    }),

    getters: (state) => ({
        getLoadingStatus : state.loadingStatus
    }),

    actions: (state) => ({
        setLoadingStatus : (status) => {
            return state.loadingStatus = status;
        }
    })
});