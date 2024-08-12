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
export declare type TimerProjectCreateFormInputValues = {
    name?: string;
};
export declare type TimerProjectCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimerProjectCreateFormOverridesProps = {
    TimerProjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TimerProjectCreateFormProps = React.PropsWithChildren<{
    overrides?: TimerProjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TimerProjectCreateFormInputValues) => TimerProjectCreateFormInputValues;
    onSuccess?: (fields: TimerProjectCreateFormInputValues) => void;
    onError?: (fields: TimerProjectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TimerProjectCreateFormInputValues) => TimerProjectCreateFormInputValues;
    onValidate?: TimerProjectCreateFormValidationValues;
} & React.CSSProperties>;
export default function TimerProjectCreateForm(props: TimerProjectCreateFormProps): React.ReactElement;
