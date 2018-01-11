
import classnames from 'classnames';
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';
import PropTypes from 'prop-types';
import React from 'react';
import {Link as RrLink} from 'react-router-dom';
import {LINK} from 'react-toolbox/lib/identifiers';
import {themr} from 'react-css-themr';
import theme from 'react-toolbox/lib/link/theme.css';

const Link = ({active, children, className, count, href, icon, label, theme, ...others}) => {
    const _className = classnames(theme.link, {
        [theme.active]: active
    }, className);

    return (
        <RrLink data-react-toolbox='link' to={href} className={_className} {...others}>
            {icon ? <FontIcon className={theme.icon} value={icon} /> : null}
            {label ? <abbr>{label}</abbr> : null}
            {count && parseInt(count) !== 0 ? <small>{count}</small> : null}
            {children}
        </RrLink>
    );
};

Link.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    count: PropTypes.number,
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    label: PropTypes.string,
    theme: PropTypes.shape({
        active: PropTypes.string,
        icon: PropTypes.string,
        link: PropTypes.string
    })
};

Link.defaultProps = {
    active: false,
    className: ''
};

const ThemedLink =  themr(LINK,theme)(Link);

export default ThemedLink;
export { ThemedLink as Link };
