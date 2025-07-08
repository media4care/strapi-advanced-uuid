declare const _default: {
    service: ({ strapi }: {
        strapi: import("@strapi/types/dist/core").Strapi;
    }) => {
        getWelcomeMessage(): string;
        handleCRUDOperation(event: any): void;
    };
};
export default _default;
