import React from "react";
import styles from "./form-custom.module.css";
import { Controller } from "react-hook-form";

const CustomForm = ({
  label = false,
  name = "input",
  rules = {},
  type = "text",
  placeholder = "placeholder",
  autoComplete = false,
  control,
  defaultValue = "",
}) => {
  return (
    <div className={styles.form_group}>
      <label className={styles.label}> {label} </label>
      <Controller
        defaultValue={defaultValue}
        name={name}
        control={control}
        rules={rules}
        render={({
          field: { onChange, value },
          formState: { isValid, errors },
        }) => (
          <>
            <input
              id={name}
              type={type}
              className={styles.form_input}
              placeholder={placeholder}
              autoComplete={autoComplete ? "on" : "off"}
              onChange={onChange}
              value={value}
            />
            <div className={styles.form_validation}>
              {!isValid && (
                <p className={styles.alert}>{errors[name]?.message}</p>
              )}
            </div>
          </>
        )}
      />
    </div>
  );
};

export default CustomForm;
