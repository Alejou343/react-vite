import React from 'react';

const NotFound = () => {
    return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-6xl font-bold text-gray-900">404</h1>
                <p className="text-xl text-gray-700">Página no encontrada</p>
                <a
                    className="mt-4 text-blue-500 underline hover:text-blue-700"
                    href="/"
                >
                    Volver a la página principal
                </a>
            </div>
    );
}

export { NotFound };