/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
    data: () => ({
        greeting: "Hello",
    }),
    methods: {
        greet(name) {
            return `${this.greeting} ${name}`;
        },
    },
};
