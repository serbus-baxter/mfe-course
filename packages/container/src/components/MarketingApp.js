import { mount } from 'marketing/MarketingApp'
import React, {useRef, useEffect} from 'react';

export default () => {
    const divRef = useRef(null);

    // useEffect - do something after render
    useEffect(() => {
        mount(divRef.current);
    })

    return <div ref={divRef} />;
};