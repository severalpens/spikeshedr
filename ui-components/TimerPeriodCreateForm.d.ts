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
export declare type TimerPeriodCreateFormInputValues = {
    StartTime?: string;
    EndTime?: string;
};
export declare type TimerPeriodCreateFormValidationValues = {
    StartTime?: ValidationFunction<string>;
    EndTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimerPeriodCreateFormOverridesProps = {
    TimerPeriodCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    StartTime?: PrimitiveOverrideProps<TextFieldProps>;
    EndTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TimerPeriodCreateFormProps = React.PropsWithChildren<{
    overrides?: TimerPeriodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TimerPeriodCreateFormInputValues) => TimerPeriodCreateFormInputValues;
    onSuccess?: (fields: TimerPeriodCreateFormInputValues) => void;
    onError?: (fields: TimerPeriodCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TimerPeriodCreateFormInputValues) => TimerPeriodCreateFormInputValues;
    onValidate?: TimerPeriodCreateFormValidationValues;
} & React.CSSProperties>;
export default function TimerPeriodCreateForm(props: TimerPeriodCreateFormProps): React.ReactElement;
