import React from 'react';

export function LineMdSunnyOutlineTwotone(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <g stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
                <path
                    fill="currentColor"
                    fillOpacity={0}
                    strokeDasharray={34}
                    strokeDashoffset={34}
                    d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7"
                >
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="34;0"
                    ></animate>
                    <animate
                        fill="freeze"
                        attributeName="fill-opacity"
                        begin="0.45s"
                        dur="0.075s"
                        values="0;0.3"
                    ></animate>
                </path>
                <g fill="none" strokeDasharray={2} strokeDashoffset={2}>
                    <path d="M0 0">
                        <animate
                            fill="freeze"
                            attributeName="d"
                            begin="0.25s"
                            dur="0.1s"
                            values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                        ></animate>
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.25s"
                            dur="0.1s"
                            values="2;0"
                        ></animate>
                    </path>
                    <path d="M0 0">
                        <animate
                            fill="freeze"
                            attributeName="d"
                            begin="0.35s"
                            dur="0.1s"
                            values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                        ></animate>
                        <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            begin="0.35s"
                            dur="0.1s"
                            values="2;0"
                        ></animate>
                    </path>
                </g>
            </g>
        </svg>
    );
}
