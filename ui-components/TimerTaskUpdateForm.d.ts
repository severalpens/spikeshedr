import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TimerTask } from "./graphql/types";
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
export declare type TimerTaskUpdateFormInputValues = {
    name?: string;
};
export declare type TimerTaskUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimerTaskUpdateFormOverridesProps = {
    TimerTaskUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TimerTaskUpdateFormProps = React.PropsWithChildren<{
    overrides?: TimerTaskUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    timerTask?: TimerTask;
    onSubmit?: (fields: TimerTaskUpdateFormInputValues) => TimerTaskUpdateFormInputValues;
    onSuccess?: (fields: TimerTaskUpdateFormInputValues) => void;
    onError?: (fields: TimerTaskUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TimerTaskUpdateFormInputValues) => TimerTaskUpdateFormInputValues;
    onValidate?: TimerTaskUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TimerTaskUpdateForm(props: TimerTaskUpdateFormProps): React.ReactElement;
