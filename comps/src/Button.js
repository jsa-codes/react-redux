import PropTypes from "prop-types";

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outlined,
    rounded
}) {
    return <button>{children}</button>
}

Button.propTypes = {
    checkButtonType: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true.')
        }
    }
}

export default Button
