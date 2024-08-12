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
export declare type TimerTaskCreateFormInputValues = {
    name?: string;
};
export declare type TimerTaskCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimerTaskCreateFormOverridesProps = {
    TimerTaskCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TimerTaskCreateFormProps = React.PropsWithChildren<{
    overrides?: TimerTaskCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TimerTaskCreateFormInputValues) => TimerTaskCreateFormInputValues;
    onSuccess?: (fields: TimerTaskCreateFormInputValues) => void;
    onError?: (fields: TimerTaskCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TimerTaskCreateFormInputValues) => TimerTaskCreateFormInputValues;
    onValidate?: TimerTaskCreateFormValidationValues;
} & React.CSSProperties>;
export default function TimerTaskCreateForm(props: TimerTaskCreateFormProps): React.ReactElement;
