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
export declare type TtPeriodCreateFormInputValues = {
    StartTime?: string;
    EndTime?: string;
    TimerTaskId?: string;
};
export declare type TtPeriodCreateFormValidationValues = {
    StartTime?: ValidationFunction<string>;
    EndTime?: ValidationFunction<string>;
    TimerTaskId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtPeriodCreateFormOverridesProps = {
    TtPeriodCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    StartTime?: PrimitiveOverrideProps<TextFieldProps>;
    EndTime?: PrimitiveOverrideProps<TextFieldProps>;
    TimerTaskId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TtPeriodCreateFormProps = React.PropsWithChildren<{
    overrides?: TtPeriodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TtPeriodCreateFormInputValues) => TtPeriodCreateFormInputValues;
    onSuccess?: (fields: TtPeriodCreateFormInputValues) => void;
    onError?: (fields: TtPeriodCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtPeriodCreateFormInputValues) => TtPeriodCreateFormInputValues;
    onValidate?: TtPeriodCreateFormValidationValues;
} & React.CSSProperties>;
export default function TtPeriodCreateForm(props: TtPeriodCreateFormProps): React.ReactElement;
