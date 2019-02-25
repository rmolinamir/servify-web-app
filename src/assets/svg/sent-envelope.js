import React from 'react';

const sentEnvelope = (props) => {
    return (
        <svg 
            x="0px" 
            y="0px" 
            viewBox="0 0 512 512" 
            style={{enableBackground: "new 0 0 512 512"}}
            width={props.width ? props.width : "24px"} 
            height={props.height ? props.height : "24px"}>
            <path fill={props.fill ? props.fill : "#ff7043"} d="M510.576,264.536l-58.431-157.94c-2.122-5.739-6.353-10.307-11.913-12.863c-5.559-2.556-11.78-2.796-17.519-0.672    L137.796,198.467c-5.739,2.123-10.307,6.354-12.864,11.912c-2.556,5.559-2.795,11.781-0.672,17.519l58.431,157.94    c2.122,5.739,6.353,10.307,11.913,12.864c3.05,1.403,6.299,2.107,9.559,2.107c2.682,0,5.37-0.476,7.961-1.435l284.918-105.406    h0.001C508.886,289.585,514.958,276.382,510.576,264.536z M407.052,123.279l-88.377,126.344l-149.327-38.405L407.052,123.279z     M200.044,366.731l-50.683-137l117.382,30.192L200.044,366.731z M224.863,370.237l65.152-104.33l30.642,7.882    c0.951,0.241,1.913,0.367,2.852,0.367c3.688,0,7.216-1.787,9.392-4.891l18.133-25.944l117.369,36.818L224.863,370.237z     M364.814,223.638l69.463-99.324l50.703,137.019L364.814,223.638z" />
            <path fill={props.fill ? props.fill : "#ff7043"} d="M133.44,388.976c-2.194-5.933-8.786-8.961-14.715-6.768l-43.162,15.968c-5.933,2.196-8.962,8.784-6.768,14.716    c1.71,4.623,6.086,7.482,10.743,7.482c1.319,0,2.663-0.23,3.973-0.715l43.16-15.968    C132.606,401.498,135.635,394.909,133.44,388.976z" />
            <path fill={props.fill ? props.fill : "#ff7043"} d="M75.023,282.646c-2.196-5.933-8.785-8.96-14.716-6.768l-26.643,9.857c-5.933,2.196-8.962,8.783-6.768,14.716    c1.71,4.622,6.087,7.482,10.743,7.482c1.319,0,2.663-0.23,3.973-0.715l26.643-9.857C74.188,295.168,77.218,288.579,75.023,282.646    z" />
            <path d="M41.995,369.408c-2.196-5.933-8.785-8.962-14.716-6.768l-19.797,7.324c-5.933,2.196-8.962,8.784-6.768,14.716    c1.71,4.622,6.086,7.482,10.743,7.482c1.319,0,2.663-0.23,3.973-0.715l19.797-7.324C41.161,381.929,44.19,375.341,41.995,369.408z    " fill="#ff7043" />
        </svg>
    );
}

export default sentEnvelope;