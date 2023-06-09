import { useState, useContext } from "react";
import classnames from 'classnames'
import { Wallet } from "@mercadopago/sdk-react";
import { PaymentContext } from "../../../../../context/PaymentContext";

function Payment() {
    const { preferenceId } = useContext(PaymentContext);
    const [isReady, setIsReady] = useState(false);
    const paymentClass = classnames('payment-form dark', {
        'payment-form--hidden': !isReady,
    });

    function handleOnReady() {
        setIsReady(true);
    }

    function renderCheckoutButton(preferenceId) {
        if (!preferenceId) return null;

        return (
            <Wallet
                initialization={{ preferenceId: preferenceId }}
                onReady={handleOnReady} />
        )
    }

    return (
        <div className={paymentClass}>
            {renderCheckoutButton(preferenceId)}
        </div>
    );
};

export default Payment;