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
export declare type TtProjectTaskCreateFormInputValues = {
    Name?: string;
    ProjectId?: string;
};
export declare type TtProjectTaskCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    ProjectId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtProjectTaskCreateFormOverridesProps = {
    TtProjectTaskCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TtProjectTaskCreateFormProps = React.PropsWithChildren<{
    overrides?: TtProjectTaskCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TtProjectTaskCreateFormInputValues) => TtProjectTaskCreateFormInputValues;
    onSuccess?: (fields: TtProjectTaskCreateFormInputValues) => void;
    onError?: (fields: TtProjectTaskCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtProjectTaskCreateFormInputValues) => TtProjectTaskCreateFormInputValues;
    onValidate?: TtProjectTaskCreateFormValidationValues;
} & React.CSSProperties>;
export default function TtProjectTaskCreateForm(props: TtProjectTaskCreateFormProps): React.ReactElement;
