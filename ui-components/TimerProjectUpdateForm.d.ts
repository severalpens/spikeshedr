import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { TimerProject } from "./graphql/types";
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
export declare type TimerProjectUpdateFormInputValues = {
    Name?: string;
};
export declare type TimerProjectUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimerProjectUpdateFormOverridesProps = {
    TimerProjectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TimerProjectUpdateFormProps = React.PropsWithChildren<{
    overrides?: TimerProjectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    timerProject?: TimerProject;
    onSubmit?: (fields: TimerProjectUpdateFormInputValues) => TimerProjectUpdateFormInputValues;
    onSuccess?: (fields: TimerProjectUpdateFormInputValues) => void;
    onError?: (fields: TimerProjectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TimerProjectUpdateFormInputValues) => TimerProjectUpdateFormInputValues;
    onValidate?: TimerProjectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TimerProjectUpdateForm(props: TimerProjectUpdateFormProps): React.ReactElement;
