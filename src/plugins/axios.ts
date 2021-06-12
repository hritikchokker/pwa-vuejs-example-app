/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";
export const axiosPlugin = {
    install(Vue: any): void {
        Vue.axios = axios
        Vue.prototype.axios = axios
    }
}