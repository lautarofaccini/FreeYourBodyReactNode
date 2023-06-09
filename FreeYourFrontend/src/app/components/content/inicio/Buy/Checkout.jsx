import { useEffect, useState, useContext } from "react";
import classnames from "classnames";
import { UsersContext } from "../../../../../context/UsersContext";
import { PaymentContext } from "../../../../../context/PaymentContext";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Formulario from './Formulario'
import Accordion from 'react-bootstrap/Accordion';


function Checkout({ onClick }) {


  const [validated, setValidated] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => setShow(true);

  function handleClick() {
    createUser(orderData.quantity)
    console.log(users)
    handleShow()
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      //TODO: Hacer que todos los acordeones que falten se abran
      alert("Por favor, rellene todos los campos faltantes.")
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true)
    if (form.checkValidity()) {
      for (let i = 0; i < orderData.quantity; i++) {
        const newForm = [event.target[2 + 4 * i].value, event.target[3 + 4 * i].value, parseInt(event.target[4 + 4 * i].value)]
        editUser(i, newForm)
      }
      console.log(users)
      setValidated(true);

      //Si se aprovo el formulario
      handleClose()
      onClick()
    }
  }

  const {
    users,
    createUser,
    editUser
  } = useContext(UsersContext);

  const [isVisible, setIsVisible] = useState(true);
  const {
    preferenceId,
    isLoading: disabled,
    orderData,
    setOrderData,
  } = useContext(PaymentContext);

  const shoppingCartClass = classnames("shopping-cart dark", {
    "shopping-cart--hidden": !isVisible,
  });

  useEffect(() => {
    if (preferenceId) setIsVisible(false);
  }, [preferenceId]);

  function updatePrice(event) {
    const quantity = event.target.value;
    const amount = parseInt(orderData.price) * parseInt(quantity);
    setOrderData({ ...orderData, quantity, amount });
  };



  return (
    <section className={shoppingCartClass}>
      <div className="container" id="container">
        <div className="block-heading">
          <h2>Comprar</h2>
          <p>¿Cuantas vas a comprar?</p>
          <h5>Entradas</h5>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row justify-content-md-center">
                <div className="col-md-4 product-detail">
                  <div className="product-info">
                    <b>Precio Unitario:</b> $<span id="unit-price">1500</span>
                    <br />
                  </div>
                </div>
                <div className="col-md-3 product-detail">
                  <label htmlFor="quantity">
                    <b>Cantidad</b>
                  </label>
                  <Form.Select
                    onChange={updatePrice}
                    id="quantity"
                    value={orderData.quantity}
                    className="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="summary">
                <div className="summary-item">
                  <span className="text">Total </span>
                  <span className="price" id="cart-total">
                    ${orderData.amount}
                  </span>
                </div>
              </div>
              <Button variant="btn btn-outline-primary me-2" onClick={handleClick}>
                Comprar
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                    <Accordion defaultActiveKey="0">
                      {users.map(
                        (user) =>
                          <Accordion.Item eventKey={user.id}>
                            <Accordion.Header>Ticket #{user.id + 1}</Accordion.Header>
                            <Accordion.Body>
                              <Formulario key={user.id} value={user} />
                            </Accordion.Body>
                          </Accordion.Item>
                      )}
                    </Accordion>

                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" type="submit">
                      Enviar
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
