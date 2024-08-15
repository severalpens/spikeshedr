import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TtProjectTask } from "./graphql/types";
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
export declare type TtProjectTaskUpdateFormInputValues = {
    Name?: string;
    ProjectId?: string;
};
export declare type TtProjectTaskUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    ProjectId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtProjectTaskUpdateFormOverridesProps = {
    TtProjectTaskUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TtProjectTaskUpdateFormProps = React.PropsWithChildren<{
    overrides?: TtProjectTaskUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ttProjectTask?: TtProjectTask;
    onSubmit?: (fields: TtProjectTaskUpdateFormInputValues) => TtProjectTaskUpdateFormInputValues;
    onSuccess?: (fields: TtProjectTaskUpdateFormInputValues) => void;
    onError?: (fields: TtProjectTaskUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtProjectTaskUpdateFormInputValues) => TtProjectTaskUpdateFormInputValues;
    onValidate?: TtProjectTaskUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TtProjectTaskUpdateForm(props: TtProjectTaskUpdateFormProps): React.ReactElement;
