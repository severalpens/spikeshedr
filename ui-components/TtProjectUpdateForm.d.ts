import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TtProject } from "./graphql/types";
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
export declare type TtProjectUpdateFormInputValues = {
    Name?: string;
};
export declare type TtProjectUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtProjectUpdateFormOverridesProps = {
    TtProjectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TtProjectUpdateFormProps = React.PropsWithChildren<{
    overrides?: TtProjectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ttProject?: TtProject;
    onSubmit?: (fields: TtProjectUpdateFormInputValues) => TtProjectUpdateFormInputValues;
    onSuccess?: (fields: TtProjectUpdateFormInputValues) => void;
    onError?: (fields: TtProjectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtProjectUpdateFormInputValues) => TtProjectUpdateFormInputValues;
    onValidate?: TtProjectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TtProjectUpdateForm(props: TtProjectUpdateFormProps): React.ReactElement;
