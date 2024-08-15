/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getTtProjectTask } from "./graphql/queries";
import { updateTtProjectTask } from "./graphql/mutations";
const client = generateClient();
export default function TtProjectTaskUpdateForm(props) {
  const {
    id: idProp,
    ttProjectTask: ttProjectTaskModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    ProjectId: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [ProjectId, setProjectId] = React.useState(initialValues.ProjectId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ttProjectTaskRecord
      ? { ...initialValues, ...ttProjectTaskRecord }
      : initialValues;
    setName(cleanValues.Name);
    setProjectId(cleanValues.ProjectId);
    setErrors({});
  };
  const [ttProjectTaskRecord, setTtProjectTaskRecord] = React.useState(
    ttProjectTaskModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getTtProjectTask.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getTtProjectTask
        : ttProjectTaskModelProp;
      setTtProjectTaskRecord(record);
    };
    queryData();
  }, [idProp, ttProjectTaskModelProp]);
  React.useEffect(resetStateValues, [ttProjectTaskRecord]);
  const validations = {
    Name: [{ type: "Required" }],
    ProjectId: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Name,
          ProjectId: ProjectId ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateTtProjectTask.replaceAll("__typename", ""),
            variables: {
              input: {
                id: ttProjectTaskRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TtProjectTaskUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              ProjectId,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Project id"
        isRequired={false}
        isReadOnly={false}
        value={ProjectId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              ProjectId: value,
            };
            const result = onChange(modelFields);
            value = result?.ProjectId ?? value;
          }
          if (errors.ProjectId?.hasError) {
            runValidationTasks("ProjectId", value);
          }
          setProjectId(value);
        }}
        onBlur={() => runValidationTasks("ProjectId", ProjectId)}
        errorMessage={errors.ProjectId?.errorMessage}
        hasError={errors.ProjectId?.hasError}
        {...getOverrideProps(overrides, "ProjectId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || ttProjectTaskModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || ttProjectTaskModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
