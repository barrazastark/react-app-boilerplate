import { Schema } from "rsuite";

const { StringType } = Schema.Types;

const model = Schema.Model({
  password: StringType().isRequired("Campo requerido"),
  email: StringType()
    .isEmail("Escribe un correo valido")
    .isRequired("Campo requerido"),
  name: StringType().isRequired("Campo requerido"),
  companyName: StringType().isRequired("Campo requerido"),
});

export default model;
