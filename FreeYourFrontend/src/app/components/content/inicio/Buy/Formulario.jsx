import Form from 'react-bootstrap/Form';

function Formulario(props) {

  return (
    <>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>{props.value.form[0].paragraph}</Form.Label>
          <Form.Control required type="text" placeholder={props.value.form[0].paragraph} />
          <Form.Control.Feedback type="invalid">
              Por favor, escriba un nombre.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicSurname">
          <Form.Label>{props.value.form[1].paragraph}</Form.Label>
          <Form.Control required type="text" placeholder={props.value.form[1].paragraph} />
          <Form.Control.Feedback type="invalid">
              Por favor, escriba un apellido.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDni">
          <Form.Label>{props.value.form[2].paragraph}</Form.Label>
          <Form.Control required type="number" placeholder={props.value.form[2].paragraph} />
          <Form.Control.Feedback type="invalid">
              Por favor, escriba un dni válido.
            </Form.Control.Feedback>
        </Form.Group>
    </>
  )
}

export default Formulario