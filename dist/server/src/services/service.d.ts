import type { Core } from '@strapi/strapi';
declare const service: ({ strapi }: {
    strapi: Core.Strapi;
}) => {
    getWelcomeMessage(): string;
    handleCRUDOperation(event: any): void;
};
export default service;
