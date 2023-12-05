import React from 'react';
import { TailSpin } from "react-loader-spinner";

export default function Loader({ width, height, color }) {
    const isDashboard = window.location.pathname === '/dashboard';

    return (
        <>
            <div className={`loading-spinner ${isDashboard ? 'dash-spinner' : ''}`}>
                <TailSpin
                    height={height}
                    width={width}
                    color={color}
                    ariaLabel="tail-spin-loading"
                    radius={1}
                />
            </div>
        </>
    );
}
