
import React, { createContext, useState, useEffect, useCallback } from 'react';

import api from "../services/api";

export const MessageContext = createContext({
    messageState: {
        messages: [],
        error: false,
        sucess: false,
        render: false,
        messageNull: false,
        alert: ''
    }
});
const MessageProvider = ({ children }) => {

    const [messageState, setMessage] = useState({
        messages: [],
        error: false,
        sucess: false,
        render: false,
        messageNull: false,
        alert: ''
    });

    useEffect(() => {
        async function API() {
            const response = await api.get(`message`);

            if (response.data.message) {
                return setMessage((prevState) => ({
                    ...prevState,
                    render: false,
                    messageNull: true,
                    messages: response.data.message
                }));
            } else {
                return setMessage((prevState) => ({
                    ...prevState,
                    render: false,
                    messageNull: false,
                    messages: response.data
                }));
            }
        }
        API()

    }, [messageState.render]);

    const sendMessage = (author, email, newMessage) => {

        setMessage((prevState) => ({
            ...prevState,
            error: false,
            alert: ''
        }));
        if (author === null || newMessage === null) {
            return setMessage((prevState) => ({
                ...prevState,
                error: true,
                alert: "Os campos não podem ser vazios!"
            }));
        }

        const body = {
            author: author,
            email: email,
            message: newMessage
        };

        api.post(`message`, body)
            .then((data) => {

                if (data.status === 200) {
                    setMessage((prevState) => ({
                        ...prevState,
                        sucess: true,
                        render: true,
                        error: false,
                        alert: data.data.message
                    }));
                    setTimeout(() => {
                        setMessage((prevState) => ({
                            ...prevState,
                            sucess: false
                        }));
                    }, 5000);

                }
            })
            .catch(function (error) {
                setMessage((prevState) => ({
                    ...prevState,
                    alert: error.response.data.message,
                    error: true
                }));
            });

        return setMessage((prevState) => ({
            ...prevState,
            error: false,
            alert: ''
        }));

    }

    const sendUpdate = (item, author, email, newMessage) => {

        const body = {
            author: author,
            email: email,
            message: newMessage
        };

        api.put(`message/${item.id}`, body)
            .then((data) => {

                if (data.status === 200) {
                    setMessage((prevState) => ({
                        ...prevState,
                        sucess: true,
                        render: true,
                        error: false,
                        alert: data.data.message
                    }));
                    setTimeout(() => {
                        setMessage((prevState) => ({
                            ...prevState,
                            sucess: false
                        }));
                    }, 5000);

                }
            })
            .catch(function (error) {
                setMessage((prevState) => ({
                    ...prevState,
                    alert: error.response.data.message,
                    error: true
                }));
            });


    }
    const sendDelete = (item) => {

        api.delete(`message/${item.id}`)
            .then((data) => {

                if (data.status === 200) {
                    setMessage((prevState) => ({
                        ...prevState,
                        sucess: true,
                        render: true,
                        error: false,
                        alert: data.data.message
                    }));
                    setTimeout(() => {
                        setMessage((prevState) => ({
                            ...prevState,
                            sucess: false
                        }));
                    }, 5000);

                }
            })
            .catch(function (error) {
                setMessage((prevState) => ({
                    ...prevState,
                    alert: error.response.data.message,
                    error: true
                }));
            });
    }
    const contextValue = {
        messageState,
        sendMessage: useCallback((author, email, newMessage) => sendMessage(author, email, newMessage), []),
        sendUpdate: useCallback((item, author, email, newMessage) => sendUpdate(item, author, email, newMessage), []),
        sendDelete: useCallback((item) => sendDelete(item), []),
    };


    return (
        <MessageContext.Provider value={contextValue}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageProvider;





