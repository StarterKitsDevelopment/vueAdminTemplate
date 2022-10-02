import { defineStore } from 'pinia';

export const useShopStore = defineStore({
    id: 'useShopStore',

    state: () => ({
        shopInformationState : null
    }),

    getters: {
        getShopInformation : (state) => {
            return state.shopInformationState;
        }
    },
    actioins: {
        getShopInformationAction : async () => {

        },

        updateShopInformationAction : async () => {

        }
    }
});