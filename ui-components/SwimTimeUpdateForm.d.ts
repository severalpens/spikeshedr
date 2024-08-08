import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SwimTime } from "./graphql/types";
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
export declare type SwimTimeUpdateFormInputValues = {
    SwimDate?: string;
    SwimMins?: number;
    SwimSecs?: number;
};
export declare type SwimTimeUpdateFormValidationValues = {
    SwimDate?: ValidationFunction<string>;
    SwimMins?: ValidationFunction<number>;
    SwimSecs?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SwimTimeUpdateFormOverridesProps = {
    SwimTimeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SwimDate?: PrimitiveOverrideProps<TextFieldProps>;
    SwimMins?: PrimitiveOverrideProps<TextFieldProps>;
    SwimSecs?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SwimTimeUpdateFormProps = React.PropsWithChildren<{
    overrides?: SwimTimeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    swimTime?: SwimTime;
    onSubmit?: (fields: SwimTimeUpdateFormInputValues) => SwimTimeUpdateFormInputValues;
    onSuccess?: (fields: SwimTimeUpdateFormInputValues) => void;
    onError?: (fields: SwimTimeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SwimTimeUpdateFormInputValues) => SwimTimeUpdateFormInputValues;
    onValidate?: SwimTimeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SwimTimeUpdateForm(props: SwimTimeUpdateFormProps): React.ReactElement;
