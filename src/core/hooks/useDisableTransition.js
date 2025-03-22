import { useEffect, useState } from "react";

export const useDisableTransition = () => {
    const [disableTransition, setDisableTransition] = useState(true);

    useEffect(() => {
        setDisableTransition(false);
    }, []);

    return disableTransition;
};