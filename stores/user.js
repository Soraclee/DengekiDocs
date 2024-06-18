import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      login: false,
    };
  },
  actions: {
    setLoginStatus(status) {
      this.login = Boolean(status);
    },
  },
});
