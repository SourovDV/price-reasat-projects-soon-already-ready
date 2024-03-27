import PropTypes from 'prop-types';
const LInk =({rout})=> {
    return (
     
      <li  className='mr-10 p-2 px-6 rounded-lg  md:hover:bg-red-500'><a href={rout.path}>{rout.name}</a></li>
      
    );
};

LInk.propTypes = {
    rout:PropTypes.object.isRequired
};

export default LInk;