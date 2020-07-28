import React from 'react';

function ButtonLink(props){
    return(
        <a href={props.href} className={props.className}>
            {props.childen}
        </a>
    );
}
export default ButtonLink;
