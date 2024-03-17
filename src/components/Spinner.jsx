import React from 'react';
import { ThreeDots } from 'react-loader-spinner'

function Spinner() {

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <ThreeDots
                visible={true}
                height="150"
                width="150"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
            />
        </div>
    );
};

export default Spinner;
