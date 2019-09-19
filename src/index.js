import PropTypes from 'prop-types';

const isLocalHost = hostname => !!(
  hostname === 'localhost' ||
  hostname === '[::1]' ||
  hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

const protocol = window.location.protocol;


const WWWRedirect = ({ disabled, children }) => {
  if (
    !disabled &&
    typeof window !== 'undefined' &&
    window.location &&
    !isLocalHost(window.location.hostname)
  ) {
    window.location.href = window.location.href.replace(
      protocol + '//',
      protocol + '//' + 'www.'
    );
    return null;
  }

  return children;
};

WWWRedirect.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

export default WWWRedirect;
