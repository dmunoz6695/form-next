import React from "react";
import { useForm } from "react-hook-form";
import CustomForm from "./custom/form-custom.component";
import styles from "./form.module.css";

const Form = () => {
  const { handleSubmit, control, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <CustomForm
            control={control}
            autoComplete={false}
            label="Name"
            name="name"
            placeholder="Example: Mirian"
            rules={{
              required: {
                value: true,
                message: "Field required",
              },
            }}
          />
          <CustomForm
            control={control}
            autoComplete={false}
            label="Age"
            name="Age"
            type="number"
            placeholder="Example: 20"
            onWheel={() => document.activeElement.blur()}
            rules={{
              required: {
                value: true,
                message: "Field required",
              },
            }}
          />
          <input type={"submit"} value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
