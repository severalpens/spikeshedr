import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TtTask } from "./graphql/types";
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
export declare type TtTaskUpdateFormInputValues = {
    TaskName?: string;
    ProjectName?: string;
};
export declare type TtTaskUpdateFormValidationValues = {
    TaskName?: ValidationFunction<string>;
    ProjectName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TtTaskUpdateFormOverridesProps = {
    TtTaskUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    TaskName?: PrimitiveOverrideProps<TextFieldProps>;
    ProjectName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TtTaskUpdateFormProps = React.PropsWithChildren<{
    overrides?: TtTaskUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    ttTask?: TtTask;
    onSubmit?: (fields: TtTaskUpdateFormInputValues) => TtTaskUpdateFormInputValues;
    onSuccess?: (fields: TtTaskUpdateFormInputValues) => void;
    onError?: (fields: TtTaskUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TtTaskUpdateFormInputValues) => TtTaskUpdateFormInputValues;
    onValidate?: TtTaskUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TtTaskUpdateForm(props: TtTaskUpdateFormProps): React.ReactElement;
