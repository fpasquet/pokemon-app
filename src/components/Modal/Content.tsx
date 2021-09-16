import React from 'react';

interface ContentProps {
    title: string;
    children: React.ReactNode;
    handleOk: () => void;
    handleClose: () => void;
}

export const Content: React.FC<ContentProps> = ({ title, children, handleOk, handleClose }) => {
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/* Content */}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/* Header */}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                                {title}
                            </h3>
                        </div>
                        {/* Body */}
                        <div className="relative p-6 flex-auto overflow-y-auto">
                            {children}
                        </div>
                        {/* Footer */}
                        <div className="flex items-center justify-end px-6 py-4 border-t border-solid border-gray-300 rounded-b">
                            <button
                                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={() => handleClose()}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                style={{ transition: "all .15s ease" }}
                                onClick={() => handleOk()}
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
    );
};
