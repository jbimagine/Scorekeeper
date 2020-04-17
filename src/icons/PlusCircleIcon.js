import React from 'react';

const SVG = ({
    style = {},
    fill = 'none',
    height = '38',
    width = '38',
    className = '',
    viewBox = '0 0 38 38'
}) => (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            style={style}
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M35.0714 19.4286C35.0714 29.2041 27.4339 37.0714 18.0819 37.0714C8.72983 37.0714 1.09227 29.2041 1.09227 19.4286C1.09227 9.65307 8.72983 1.78572 18.0819 1.78572C27.4339 1.78572 35.0714 9.65307 35.0714 19.4286Z"
                stroke="white"
                strokeWidth="1.85714"

            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.2498 11.0714C19.2498 10.5586 18.8341 10.1429 18.3213 10.1429C17.8084 10.1429 17.3927 10.5586 17.3927 11.0714V18.5H10.0513C9.53851 18.5 9.12277 18.9157 9.12277 19.4286C9.12277 19.9414 9.53851 20.3571 10.0513 20.3571H17.3927V27.7857C17.3927 28.2985 17.8084 28.7143 18.3213 28.7143C18.8341 28.7143 19.2498 28.2985 19.2498 27.7857V20.3571H26.1123C26.6252 20.3571 27.0409 19.9414 27.0409 19.4286C27.0409 18.9157 26.6252 18.5 26.1123 18.5H19.2498V11.0714Z"
                fill="white" />
        </svg>

    );

export default SVG;
