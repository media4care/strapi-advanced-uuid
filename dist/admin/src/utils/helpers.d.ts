export declare const generateUUID: (format: string) => string;
export declare const validateUUID: (format: string, initialValue: string) => RegExpExecArray;
export declare const getOptions: (attribute: any) => {
    disableAutoFill: any;
    disableRegenerate: any;
    uuidFormat: any;
};
export declare const isValidUUIDValue: (uuidFormat: string, value: string) => boolean;
