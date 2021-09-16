import propTypes from 'prop-types';

const Display = ({ total, operation, next }) => (
  <div>
    {total}
    {operation}
    {next}
  </div>
);
Display.propTypes = {
  total: propTypes.number,
  operation: propTypes.string,
  next: propTypes.string,
};
Display.defaultProps = {
  total: 0,
  operation: '',
  next: '',
};

export default Display;
