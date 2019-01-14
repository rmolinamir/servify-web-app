import React from 'react';

const curiousBlueUnderline = (props) => {
    return (
        <svg 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="xMidYMid meet" 
            viewBox="0 0 210 20" 
            width="210" 
            height="20"
            style={{fill: 'transparent'}}>
            <defs>
                <path d="" id="b6XFDCkjKV"></path>
                <path d="M210 6.92C169.78 10.56 99.78 8.75 0 1.5" id="asM9TH0a6"></path>
                <path d="M140.25 18.91C49.4 14.79 30.99 12.74 85.01 12.74C139.04 12.74 180.7 10.8 210 6.92" id="g13o4TL3lm"></path>
            </defs>
            <g>
                <g>
                    <g>
                        <g>
                            <use xlinkHref="#b6XFDCkjKV" opacity="1" floodColor="0" stroke="#000000" strokeWidth="1" strokeOpacity="1"></use>
                        </g>
                    </g>
                    <g>
                        <g>
                            <filter id="shadow13535143" x="-7.5" y="-6" width="225.5" height="22.74" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse">
                                <feFlood></feFlood>
                                <feComposite in2="SourceAlpha" operator="in"></feComposite>
                                <feGaussianBlur stdDeviation="0.71"></feGaussianBlur>
                                <feOffset dx="0.5" dy="0.5" result="afterOffset"></feOffset>
                                <feFlood floodColor="#000000" floodOpacity="0.5"></feFlood>
                                <feComposite in2="afterOffset" operator="in"></feComposite>
                                <feMorphology operator="dilate" radius="1"></feMorphology>
                                <feComposite in2="SourceAlpha" operator="out"></feComposite>
                            </filter>
                            <path d="M210 6.92C169.78 10.56 99.78 8.75 0 1.5" id="h1oxqVYtQk" fill="none" stroke="white" filter="url(#shadow13535143)"></path>
                        </g>
                        <g>
                            <use xlinkHref="#asM9TH0a6" opacity="1" floodColor="0" stroke="#1ea5c8" strokeWidth="2" strokeOpacity="1"></use>
                        </g>
                    </g>
                    <g>
                        <g>
                            <filter id="shadow8343842" x="47.3" y="-0.58" width="170.7" height="27.49" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse">
                                <feFlood></feFlood>
                                <feComposite in2="SourceAlpha" operator="in"></feComposite>
                                <feGaussianBlur stdDeviation="0.71"></feGaussianBlur>
                                <feOffset dx="0.5" dy="0.5" result="afterOffset"></feOffset>
                                <feFlood floodColor="#000000" floodOpacity="0.5"></feFlood>
                                <feComposite in2="afterOffset" operator="in"></feComposite>
                                <feMorphology operator="dilate" radius="1"></feMorphology>
                                <feComposite in2="SourceAlpha" operator="out"></feComposite>
                            </filter>
                            <path d="M140.25 18.91C49.4 14.79 30.99 12.74 85.01 12.74C139.04 12.74 180.7 10.8 210 6.92" id="e2OqQgeKD" fill="none" stroke="white" filter="url(#shadow8343842)"></path>
                        </g>
                        <g>
                            <use xlinkHref="#g13o4TL3lm" opacity="1" floodColor="0" stroke="#1ea5c8" strokeWidth="2" strokeOpacity="1"></use>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

export default curiousBlueUnderline;