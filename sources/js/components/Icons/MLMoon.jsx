import React from 'react';

export function LineMdMoonSimpleTwotone(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path
                fill="currentColor"
                fillOpacity={0}
                stroke="currentColor"
                strokeDasharray={64}
                strokeDashoffset={64}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C15.53 21 18.59 18.96 20.06 16C20.06 16 14 17.5 11 13C8 8.5 12 3 12 3Z"
            >
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.3s"
                    values="64;0"
                ></animate>
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.3s"
                    dur="0.075s"
                    values="0;0.3"
                ></animate>
            </path>
        </svg>
    );
}
