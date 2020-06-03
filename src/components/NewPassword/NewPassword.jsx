import React from "react";
import { Link } from "react-router-dom";

import { Button, Placeholder, Animation } from "rsuite";
import { Box, Form, TextField } from "UIElements";
import { useShow } from "utils";
import "./NewPassword.scss";
import model from "./model";

export const blockName = "new-password-page-wrapper";

const { Fade } = Animation;

const NewPassword = ({ onSend }) => {
  const showContent = useShow();

  return (
    <div className={blockName}>
      <Box className={`${blockName}__box`}>
        <Fade in={showContent} className={`${blockName}__faded-content`}>
          {(props) => (
            <div {...props}>
              <h1>Recuperar contraseña</h1>
              <Placeholder.Paragraph
                graph="image"
                active
                rows={3}
                className={`${blockName}__presentation`}
              />
              <span className={`${blockName}__separator`} />
              <Form
                model={model}
                className={`${blockName}__form`}
                render={(formRef) => (
                  <>
                    <p>
                      Indica tu correo electrónico de registro para recibir
                      instrucciones para cambiar tu contraseña.
                    </p>
                    <TextField placeholder="Correo electronico" name="email" />
                    <Button
                      block
                      color="orange"
                      onClick={() => onSend(formRef)}
                      size="lg"
                    >
                      Enviar
                    </Button>
                    <Link block appearance="link" to="/auth">
                      Entrar
                    </Link>
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

export default NewPassword;
