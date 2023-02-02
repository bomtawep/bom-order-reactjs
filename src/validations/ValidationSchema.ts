import * as yup from "yup";

const validationsForm = {
  name: yup.string().required("Please, enter product type")
};

export default validationsForm;
