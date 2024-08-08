/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getSwimTime } from "./graphql/queries";
import { updateSwimTime } from "./graphql/mutations";
const client = generateClient();
export default function SwimTimeUpdateForm(props) {
  const {
    id: idProp,
    swimTime: swimTimeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    SwimDate: "",
    SwimDistance: "",
    SwimMins: "",
    SwimSecs: "",
  };
  const [SwimDate, setSwimDate] = React.useState(initialValues.SwimDate);
  const [SwimDistance, setSwimDistance] = React.useState(
    initialValues.SwimDistance
  );
  const [SwimMins, setSwimMins] = React.useState(initialValues.SwimMins);
  const [SwimSecs, setSwimSecs] = React.useState(initialValues.SwimSecs);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = swimTimeRecord
      ? { ...initialValues, ...swimTimeRecord }
      : initialValues;
    setSwimDate(cleanValues.SwimDate);
    setSwimDistance(cleanValues.SwimDistance);
    setSwimMins(cleanValues.SwimMins);
    setSwimSecs(cleanValues.SwimSecs);
    setErrors({});
  };
  const [swimTimeRecord, setSwimTimeRecord] = React.useState(swimTimeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSwimTime.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSwimTime
        : swimTimeModelProp;
      setSwimTimeRecord(record);
    };
    queryData();
  }, [idProp, swimTimeModelProp]);
  React.useEffect(resetStateValues, [swimTimeRecord]);
  const validations = {
    SwimDate: [],
    SwimDistance: [],
    SwimMins: [],
    SwimSecs: [],
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
          SwimDate: SwimDate ?? null,
          SwimDistance: SwimDistance ?? null,
          SwimMins: SwimMins ?? null,
          SwimSecs: SwimSecs ?? null,
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
            query: updateSwimTime.replaceAll("__typename", ""),
            variables: {
              input: {
                id: swimTimeRecord.id,
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
      {...getOverrideProps(overrides, "SwimTimeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Swim date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={SwimDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              SwimDate: value,
              SwimDistance,
              SwimMins,
              SwimSecs,
            };
            const result = onChange(modelFields);
            value = result?.SwimDate ?? value;
          }
          if (errors.SwimDate?.hasError) {
            runValidationTasks("SwimDate", value);
          }
          setSwimDate(value);
        }}
        onBlur={() => runValidationTasks("SwimDate", SwimDate)}
        errorMessage={errors.SwimDate?.errorMessage}
        hasError={errors.SwimDate?.hasError}
        {...getOverrideProps(overrides, "SwimDate")}
      ></TextField>
      <TextField
        label="Swim distance"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={SwimDistance}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              SwimDate,
              SwimDistance: value,
              SwimMins,
              SwimSecs,
            };
            const result = onChange(modelFields);
            value = result?.SwimDistance ?? value;
          }
          if (errors.SwimDistance?.hasError) {
            runValidationTasks("SwimDistance", value);
          }
          setSwimDistance(value);
        }}
        onBlur={() => runValidationTasks("SwimDistance", SwimDistance)}
        errorMessage={errors.SwimDistance?.errorMessage}
        hasError={errors.SwimDistance?.hasError}
        {...getOverrideProps(overrides, "SwimDistance")}
      ></TextField>
      <TextField
        label="Swim mins"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={SwimMins}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              SwimDate,
              SwimDistance,
              SwimMins: value,
              SwimSecs,
            };
            const result = onChange(modelFields);
            value = result?.SwimMins ?? value;
          }
          if (errors.SwimMins?.hasError) {
            runValidationTasks("SwimMins", value);
          }
          setSwimMins(value);
        }}
        onBlur={() => runValidationTasks("SwimMins", SwimMins)}
        errorMessage={errors.SwimMins?.errorMessage}
        hasError={errors.SwimMins?.hasError}
        {...getOverrideProps(overrides, "SwimMins")}
      ></TextField>
      <TextField
        label="Swim secs"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={SwimSecs}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              SwimDate,
              SwimDistance,
              SwimMins,
              SwimSecs: value,
            };
            const result = onChange(modelFields);
            value = result?.SwimSecs ?? value;
          }
          if (errors.SwimSecs?.hasError) {
            runValidationTasks("SwimSecs", value);
          }
          setSwimSecs(value);
        }}
        onBlur={() => runValidationTasks("SwimSecs", SwimSecs)}
        errorMessage={errors.SwimSecs?.errorMessage}
        hasError={errors.SwimSecs?.hasError}
        {...getOverrideProps(overrides, "SwimSecs")}
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
          isDisabled={!(idProp || swimTimeModelProp)}
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
              !(idProp || swimTimeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
