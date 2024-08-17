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
export declare type TtTaskCreateFormInputValues = {
    TaskName?: string;
    ProjectName?: string;
};
export declare type TtTaskCreateFormValidationValues = {
    TaskName?: ValidationFunction<string>;
    ProjectName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtTaskCreateFormOverridesProps = {
    TtTaskCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TaskName?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TtTaskCreateFormProps = React.PropsWithChildren<{
    overrides?: TtTaskCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TtTaskCreateFormInputValues) => TtTaskCreateFormInputValues;
    onSuccess?: (fields: TtTaskCreateFormInputValues) => void;
    onError?: (fields: TtTaskCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtTaskCreateFormInputValues) => TtTaskCreateFormInputValues;
    onValidate?: TtTaskCreateFormValidationValues;
} & React.CSSProperties>;
export default function TtTaskCreateForm(props: TtTaskCreateFormProps): React.ReactElement;
