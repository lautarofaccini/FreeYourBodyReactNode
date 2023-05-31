import brand from '../../../../assets/images/brand.png'
import arrow from '../../../../assets/images/flecha-hacia-abajo.png'
import { toAbout } from '../../../App'
import Checkout from './Buy/Checkout'
import Payment from './Buy/Payment'
import { useState} from "react";
import PaymentContextProvider from "../../../../context/PaymentContext";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { SpinnerCircular } from 'spinners-react';

// REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://developers.mercadopago.com/panel
initMercadoPago("TEST-565a20be-8d71-42e1-8ec2-408404e7e9a7"); 

function Inicio() {

    const [preferenceId, setPreferenceId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [orderData, setOrderData] = useState({ quantity: "1", price: "1500", amount: 1500, description: "Entrada para Free Your Body"});
    //TODO: Que el precio se obtenga desde admin y se actualice aca
    //Segun la cantidad de entradas, obligue al usuario a escribir el nombre de cada uno


    function renderSpinner() {
        if (isLoading) {
            return (
                <div className="spinner-wrapper">
                    <SpinnerCircular сolor='#009EE3' />
                </div>
            )
        }
    }

    function handleClick() {

        setIsLoading(true);
        fetch("http://localhost:8080/create_preference", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        })
            .then((response) => {
                return response.json();
            })
            .then((preference) => {
                setPreferenceId(preference.id);
            })
            .catch((error) => {
                console.error(error);
            }).finally(() => {
                setIsLoading(false);
            })
    };

    return (
        <>
            <PaymentContextProvider context={{ preferenceId, isLoading, orderData, setOrderData }}>
            <main>
                <section className="justify-content-center" id="main">
                    <div className="brand main-div ">
                        <div>
                            <img className="img-fluid mx-auto d-block px-3" src={brand} alt="" />
                            <h2 className="edition text-center mb-0">WINTER EDITION</h2>
                            <img className="icon btn" src={arrow} alt="" onClick={toAbout} />
                        </div>
                    </div>
                </section>
                <section className="justify-content-center" id="about">
                    <div className="brand main-div ">
                        <div>
                            <img className="img-fluid mx-auto d-block" src={brand} alt="" />
                        </div>
                    </div>
                </section>
                <section className="justify-content-center" id="location">
                    <div className="brand main-div ">
                        <div>
                            <img className="img-fluid mx-auto d-block" src={brand} alt="" />
                        </div>
                    </div>
                </section>
                <section className="justify-content-center" id="buy">
                    <div className="brand main-div ">
                        <div>
                            {renderSpinner()}
                            <Checkout onClick={handleClick} />
                            {/* <Payment /> */}
                        </div>
                    </div>
                </section>
            </main>
            </PaymentContextProvider>
        </>
    )
}

export default Inicio