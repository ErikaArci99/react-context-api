import { createContext, useContext } from "react";
import { useState } from "react";


const AlertContext = createContext();

const AlertProvider = ({ children }) => {
    const InitialData = { type: '', message: '' }

    const [alertData, setAlertData] = useState(InitialData);

    return (

        <AlertContext.provider value={{ alertData, setAlertData }} >
            {children}
        </AlertContext.provider>
    );
};

const useAlertContext = () => {
    const context = useContext(AlertContext);
    return context;
}

export { AlertProvider, useAlertContext };