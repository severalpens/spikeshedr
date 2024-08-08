import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SwimTimeCreateFormInputValues = {
    SwimDate?: string;
    SwimMins?: number;
    SwimSecs?: number;
};
export declare type SwimTimeCreateFormValidationValues = {
    SwimDate?: ValidationFunction<string>;
    SwimMins?: ValidationFunction<number>;
    SwimSecs?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SwimTimeCreateFormOverridesProps = {
    SwimTimeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SwimDate?: PrimitiveOverrideProps<TextFieldProps>;
    SwimMins?: PrimitiveOverrideProps<TextFieldProps>;
    SwimSecs?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SwimTimeCreateFormProps = React.PropsWithChildren<{
    overrides?: SwimTimeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SwimTimeCreateFormInputValues) => SwimTimeCreateFormInputValues;
    onSuccess?: (fields: SwimTimeCreateFormInputValues) => void;
    onError?: (fields: SwimTimeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SwimTimeCreateFormInputValues) => SwimTimeCreateFormInputValues;
    onValidate?: SwimTimeCreateFormValidationValues;
} & React.CSSProperties>;
export default function SwimTimeCreateForm(props: SwimTimeCreateFormProps): React.ReactElement;
