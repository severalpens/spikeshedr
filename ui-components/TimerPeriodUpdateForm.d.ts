import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TimerPeriod } from "./graphql/types";
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
export declare type TimerPeriodUpdateFormInputValues = {
    name?: string;
};
export declare type TimerPeriodUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimerPeriodUpdateFormOverridesProps = {
    TimerPeriodUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TimerPeriodUpdateFormProps = React.PropsWithChildren<{
    overrides?: TimerPeriodUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    timerPeriod?: TimerPeriod;
    onSubmit?: (fields: TimerPeriodUpdateFormInputValues) => TimerPeriodUpdateFormInputValues;
    onSuccess?: (fields: TimerPeriodUpdateFormInputValues) => void;
    onError?: (fields: TimerPeriodUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TimerPeriodUpdateFormInputValues) => TimerPeriodUpdateFormInputValues;
    onValidate?: TimerPeriodUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TimerPeriodUpdateForm(props: TimerPeriodUpdateFormProps): React.ReactElement;
