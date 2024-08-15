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
export declare type TtProjectCreateFormInputValues = {
    Name?: string;
};
export declare type TtProjectCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtProjectCreateFormOverridesProps = {
    TtProjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TtProjectCreateFormProps = React.PropsWithChildren<{
    overrides?: TtProjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TtProjectCreateFormInputValues) => TtProjectCreateFormInputValues;
    onSuccess?: (fields: TtProjectCreateFormInputValues) => void;
    onError?: (fields: TtProjectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtProjectCreateFormInputValues) => TtProjectCreateFormInputValues;
    onValidate?: TtProjectCreateFormValidationValues;
} & React.CSSProperties>;
export default function TtProjectCreateForm(props: TtProjectCreateFormProps): React.ReactElement;
