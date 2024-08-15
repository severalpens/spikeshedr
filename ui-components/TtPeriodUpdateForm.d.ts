import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TtPeriod } from "./graphql/types";
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
export declare type TtPeriodUpdateFormInputValues = {
    StartTime?: string;
    EndTime?: string;
    TimerTaskId?: string;
};
export declare type TtPeriodUpdateFormValidationValues = {
    StartTime?: ValidationFunction<string>;
    EndTime?: ValidationFunction<string>;
    TimerTaskId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtPeriodUpdateFormOverridesProps = {
    TtPeriodUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    StartTime?: PrimitiveOverrideProps<TextFieldProps>;
    EndTime?: PrimitiveOverrideProps<TextFieldProps>;
    TimerTaskId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TtPeriodUpdateFormProps = React.PropsWithChildren<{
    overrides?: TtPeriodUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ttPeriod?: TtPeriod;
    onSubmit?: (fields: TtPeriodUpdateFormInputValues) => TtPeriodUpdateFormInputValues;
    onSuccess?: (fields: TtPeriodUpdateFormInputValues) => void;
    onError?: (fields: TtPeriodUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtPeriodUpdateFormInputValues) => TtPeriodUpdateFormInputValues;
    onValidate?: TtPeriodUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TtPeriodUpdateForm(props: TtPeriodUpdateFormProps): React.ReactElement;
