import { Box, Button, TextField, makeStyles, styled } from "@mui/material";
import { FlexColumn } from "../styles/creatStyle";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@emotion/react";
import api from "../api/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PATH } from "../config/router/routerConfig";
import { useQuery } from "@tanstack/react-query";

interface FormValues {
  title: string;
  description: string;
  dueDate: string;
}

// -------------------------------------------------
//                     STYLE
const StyleErrorMessage = styled(Box)`
  color: red;
  font-size: 14px;
`;
const CustomTextFild = styled(TextField)`
  width: 100%;
`;
// --------------------------------------------------------------------
//                       AddTodo COMPONENT
const AddTodo = () => {
  const initialValues: FormValues = {
    title: "",
    description: "",
    dueDate: "",
  };
  // -----------------------

  const [searchParams] = useSearchParams();
  const id: string | null = searchParams.get("id");
  console.log(id);

  if (id) {
    useQuery({
      queryKey: ["editeTodo"],
      queryFn: async () => {
        const data = (await api.get(`todo/${id}`)).data;
        formik.setValues({
          title: data.title,
          description: data.description,
          dueDate: data.dueDate,
        });
        return data;
      },
    });
  }

  // --------------------------------------------------------------------
  const navigate = useNavigate();
  const lineWidth = window.innerWidth;
  const fontSize = 10;
  const charactersPerLine = Math.floor(lineWidth / fontSize);

  // --------------------------------------------------------------------
  const theme = useContext(ThemeContext);
  console.log(theme);
  const mode = theme.palette.mode;
  console.log(mode);

  // --------------------------------------------------------------------

  const totalLines = Math.ceil(
    initialValues?.description.length / charactersPerLine
  );

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    dueDate: Yup.string().required("Required"),
  });

  // --------------------------------------------------------------------
  //                          handleSubmit
  const handleSubmit = async (values: FormValues) => {
    try {
      if (id) {
        const res = await api.patch(`todo/${id}`, {
          ...values,
          isDone: false,
          edited: true,
        });
      } else {
        const res = await api.post("todo", { ...values, isDone: false });
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        navigate(PATH.HOME);
      }, 2000);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema,
  });


  console.log(initialValues);

  return (
    // <Formik
    //   initialValues={initialValues}
    //   validationSchema={validationSchema}
    //   onSubmit={handleSubmit}
    // >
    <form onSubmit={formik.handleSubmit}>
      <FlexColumn sx={{ alignItems: "start" }}>
        <div>
          <TextField
            type="text"
            id="title"
            name="title"
            // as={TextField}
            variant="standard"
            color="secondary"
            label="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {/* <ErrorMessage name="title" component={StyleErrorMessage} /> */}
        </div>
        <Box sx={{ width: "100%", boxSizing: "border-box" }}>
          <CustomTextFild
            label="Description"
            // as={CustomTextFild}
            variant="standard"
            color="secondary"
            multiline
            rows={totalLines}
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {/* <ErrorMessage name="description" component={StyleErrorMessage} /> */}
        </Box>

        {/* <Box>
            <DatePicker
              render={<TextField variant="standard" label="Due Date" />}
              minDate={Date.now()}
              id="dueDate"
              name="dueDate"
            />
            <ErrorMessage name="dueDate" component={StyleErrorMessage} />
          </Box> */}

        <TextField
          // as={TextField}
          variant="standard"
          inputProps={{
            min: new Date().toISOString().split("T")[0],
          }}
          name="dueDate"
          type="date"
          label="Due Date"
          InputLabelProps={{ shrink: true }}
          onChange={formik.handleChange}
          value={formik.values.dueDate}
        />

        {/* <DatePicker
            render={<TextField variant="standard" label="Due Time" />}
            disableDayPicker
            format="HH:mm"
            plugins={[<TimePicker hideSeconds />]}
            calendarPosition="bottom-right"
            id="timePicker"
            name="timePicker"
          /> */}

        <Button
          variant={mode === "dark" ? "outlined" : "contained"}
          color="secondary"
          sx={{ width: "300px", alignSelf: "center" }}
          type="submit"
        >
          Submit
        </Button>
      </FlexColumn>
    </form>
    // </Formik>
  );
};

export default AddTodo;
