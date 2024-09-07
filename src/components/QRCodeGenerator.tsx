"use client";
import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const QRCodeGenerator: React.FC = () => {
    const [text, setText] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div className="p-4 flex flex-col items-center space-y-4">
            <div className="w-full max-w-sm bg-zinc-700 rounded-xl shadow-md p-4 text-black">
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder="Enter URL for QR code"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                />
            </div>

            {text && (
                <div>
                    <div className="flex justify-center p-4 bg-blue-500 rounded-lg">
                        <QRCodeSVG value={text} size={256} />
                    </div>

                    <code>url is : {text}</code>
                </div>
            )}
        </div>
    );
};

export default QRCodeGenerator;
