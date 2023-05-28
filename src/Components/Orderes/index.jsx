import React from 'react';

const Orderes = (props) => {

    const {purchase, date, quantity, total} = props;

    return(
    <div className="flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg cursor-pointer">
        <div className="w-full flex flex-row items-center justify-between gap-3">
            <p className="flex flex-col">
                <span className="font-light">Purchase: {purchase}</span>
                <span className="font-light">Date: {date}</span>
                <span className="font-light">Articles: {quantity}</span>
            </p>
            <p className="flex items-center gap-3">
                <span className="font-medium text-2xl">
                    <b>${total}</b>
                </span>
            </p>
        </div>
    </div>
    )
}

export { Orderes };