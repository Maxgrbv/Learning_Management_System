import styles from './Button.module.css'
import { IButton } from './types';

export function Button(props: IButton): JSX.Element {
    const {
        children,
        variant = 'default',
        onClick,
        className,
    } = props;

    const buttonVariant = variant in styles ? styles[variant] : ''; // Types Guard

    return (
        <button
            type='button'
            onClick={onClick}
            className={className ? className + ' ' + buttonVariant : buttonVariant}
        >
            {children}
        </ button>
    )
}