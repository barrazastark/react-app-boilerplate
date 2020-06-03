import { Schema } from "rsuite";

const { StringType } = Schema.Types;

const model = Schema.Model({
  email: StringType()
    .isEmail("Escribe un correo valido")
    .isRequired("Campo requerido"),
});

export default model;
