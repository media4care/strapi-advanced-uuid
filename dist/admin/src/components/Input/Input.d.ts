import * as React from 'react';
import { FieldValue, InputProps } from '@strapi/strapi/admin';
type TProps = InputProps & FieldValue & {
    labelAction?: React.ReactNode;
    attribute?: {
        disableAutoFill: boolean;
        disableRegenerate: boolean;
        uuidFormat: string;
    };
};
declare const Input: React.ForwardRefExoticComponent<TProps & React.RefAttributes<HTMLButtonElement>>;
export default Input;
