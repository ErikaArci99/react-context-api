import { createContext, useContext } from "react";
import { useState } from "react";


const AlertContext = createContext();


// provider con children e value
const AlertProvider = ({ children }) => {
    const InitialData = { type: '', message: '' }

    const [alertData, setAlertData] = useState(InitialData);

    return (

        <AlertContext.Provider value={{ alertData, setAlertData }} >
            {children}
        </AlertContext.Provider>
    );
};

const useAlertContext = () => {
    const context = useContext(AlertContext);
    return context;
};

export { AlertProvider, useAlertContext };