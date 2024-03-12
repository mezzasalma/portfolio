import { ReactNode } from "react";

interface ButtonProps {
    children?: React.ReactNode,
    type: "external" | "internal" | "button",
    link?: string
}

interface ConditionalWrapperProps {
    condition: boolean;
    children: ReactNode;
}

function Button({ children, type, link }: ButtonProps) {

    const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({ condition, children }) =>
        (condition ?  <a href={link} target={type === 'external' ? '_blank' : '_self'} className='Button group'>{children}</a> : <button className='Button group'>{children}</button>);

    return (
        <ConditionalWrapper children={children} condition={link ? true : false} />
    )
}

export default Button
