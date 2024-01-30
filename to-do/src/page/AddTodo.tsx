import { Box, Button, TextField, makeStyles, styled } from "@mui/material";
import { FlexColumn } from "../styles/creatStyle";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { ThemeContext } from "@emotion/react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import { PATH } from "../config/router/routerConfig";

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
  const initialValues: FormValues = {
    title: "",
    description: "",
    dueDate: "",
  };
  const totalLines = Math.ceil(
    initialValues.description.length / charactersPerLine
  );

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    dueDate: Yup.string().required("Required"),
  });

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    try {
      const res = await api.post("todo", { ...values, isDone: false });
      setTimeout(() => {
        navigate(PATH.HOME);
      }, 2000);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FlexColumn sx={{ alignItems: "start" }}>
          <div>
            <Field
              type="text"
              id="title"
              name="title"
              as={TextField}
              variant="standard"
              color="secondary"
              label="title"
            />
            <ErrorMessage name="title" component={StyleErrorMessage} />
          </div>
          <Box sx={{ width: "100%", boxSizing: "border-box" }}>
            <Field
              label="Description"
              as={CustomTextFild}
              variant="standard"
              color="secondary"
              multiline
              rows={totalLines}
              id="description"
              name="description"
            />
            <ErrorMessage name="description" component={StyleErrorMessage} />
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

          <Field
            as={TextField}
            variant="standard"
            inputProps={{
              min: new Date().toISOString().split("T")[0],
            }}
            name="dueDate"
            type="date"
            label="Due Date"
            InputLabelProps={{ shrink: true }}
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
      </Form>
    </Formik>
  );
};

export default AddTodo;
