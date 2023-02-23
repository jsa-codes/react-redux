import className from 'classnames'

const finalClassName = className({
    'bg-blue-500': true,
    'text-yellow-500': false,
})

console.log(finalClassName)


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
    return <button className='px-3 py-1.5 border border-blue-500 bg-blue-500 text-white'>{children}</button>
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
