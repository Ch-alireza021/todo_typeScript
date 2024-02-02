import {
  Box,
  Button,
  TextField,
  styled,
  useTheme,
} from "@mui/material";
import { FlexColumn } from "../styles/creatStyle";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  const mode = useTheme().palette.mode;
  // --------------------------------------------------------------------

  const totalLines = Math.ceil(
    initialValues?.description.length / charactersPerLine
  );

  const validationSchema = Yup.object({
    title: Yup.string().required("Required").max(20),
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
        if (res.statusText === "OK") {
          navigate(PATH.HOME);
        }
      } else {
        const res = await api.post("todo", { ...values, isDone: false });
        if (res.statusText === "Created") {
          navigate(PATH.HOME);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FlexColumn sx={{ alignItems: "start" }}>
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
          onBlur={formik.handleBlur}
          helperText={
            formik.touched.title && formik.errors.title
              ? formik.errors.title
              : null
          }
          error={formik.touched.title && formik.errors.title ? true : false}
        />

        <CustomTextFild
          label="Description"
          variant="standard"
          color="secondary"
          multiline
          rows={totalLines}
          id="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          onBlur={formik.handleBlur}
          helperText={
            formik.touched.description && formik.errors.description
              ? formik.errors.description
              : null
          }
          error={
            formik.touched.description && formik.errors.description
              ? true
              : false
          }
        />

        <TextField
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
          onBlur={formik.handleBlur}
          helperText={
            formik.touched.dueDate && formik.errors.dueDate
              ? formik.errors.dueDate
              : null
          }
          error={formik.touched.dueDate && formik.errors.dueDate ? true : false}
        />
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
  );
};

export default AddTodo;
