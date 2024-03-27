import React from 'react';
import PropTypes from 'prop-types';
import { IoMdCheckmarkCircle } from "react-icons/io";

const Feature =({fee}) => {
    console.log(fee)
    return (
        <div>
            <p className='flex items-center '><IoMdCheckmarkCircle></IoMdCheckmarkCircle> {fee}</p>
            
        </div>
    );
};

Feature.propTypes = {
    fee:PropTypes.object.isRequired
};

export default Feature;