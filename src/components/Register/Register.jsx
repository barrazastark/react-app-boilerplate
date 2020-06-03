import React from "react";
import { Link } from "react-router-dom";

import { Button, Placeholder, Animation } from "rsuite";
import { Box, TextField, Form } from "UIElements";
import { useShow } from "utils";
import "./Register.scss";
import model from "./model";

export const blockName = "register-page-wrapper";

const { Fade } = Animation;

const Register = ({ onRegister }) => {
  const showContent = useShow();

  return (
    <div className={blockName}>
      <Box className={`${blockName}__box`}>
        <Fade in={showContent} className={`${blockName}__faded-content`}>
          {(props) => (
            <div {...props}>
              <h1>Registro</h1>
              <Placeholder.Paragraph
                graph="image"
                rows={3}
                className={`${blockName}__presentation`}
              />
              <span className={`${blockName}__separator`} />
              <Form
                model={model}
                className={`${blockName}__form`}
                render={(formRef) => (
                  <>
                    <TextField placeholder="Nombre y apellido" name="name" />
                    <TextField
                      placeholder="Nombre de tu empresa"
                      name="companyName"
                    />
                    <TextField placeholder="Correo electronico" name="email" />
                    <TextField
                      placeholder="Contraseña"
                      name="password"
                      type="password"
                    />
                    <Button
                      block
                      color="orange"
                      onClick={() => onRegister(formRef)}
                      size="lg"
                    >
                      Registrar
                    </Button>
                    <p>
                      ¿Ya tienes cuenta? Haz click{" "}
                      <Link appearance="link" to="/auth">
                        aqui
                      </Link>{" "}
                      para entrar
                    </p>
                  </>
                )}
              />
            </div>
          )}
        </Fade>
      </Box>
    </div>
  );
};

export default Register;
