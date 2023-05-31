import { createContext } from 'react';

const PaymentContext = createContext({});

function PaymentContextProvider({ children, context }) {
    return (
        <PaymentContext.Provider value={context}>
            {children}
        </PaymentContext.Provider>
    )
};

export default PaymentContextProvider;
export { PaymentContext };