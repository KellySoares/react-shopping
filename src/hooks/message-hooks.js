import { useContext } from "react";
import { MessageContext } from "../providers/message";

const useMessage = () => {

    const { messageState, sendMessage, sendUpdate, sendDelete } = useContext(
        MessageContext
    );

    return { messageState, sendMessage, sendUpdate, sendDelete };
};

export default useMessage;