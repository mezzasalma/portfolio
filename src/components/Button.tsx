import { ReactNode } from "react";

// TODO : MULTIPLEWRAPPERS

interface ButtonProps {
    children?: React.ReactNode,
    type: "external" | "internal" | "button",
    link?: string
}

interface ConditionalWrapperProps {
    condition: boolean;
    wrapper: (children: ReactNode) => ReactNode;
    children: ReactNode;
}

function Button({ children, type, link }: ButtonProps) {

    const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({ condition, wrapper, children }) =>
        (condition ? wrapper(children) : <button className='Button'>{children}</button>);

    {/*
     const ApplyWrappers = ({ wrappers, children }) => {
        const wrapper = wrappers.shift()
        if (wrapper) {
            children = wrapper(children);
        }
        return wrappers.length
            ? <ApplyWrappers wrappers={wrappers} children={children} />
            : children;
    }

    <ApplyWrappers wrappers={[
        condition1 && (children) => <Whatever>{children}</Whatever>,
        condition2 && ...
        ]}>
        ...
    </ApplyWrappers>
    */}

    return (
        <ConditionalWrapper children={children} condition={link ? true : false} wrapper={(children) =>
            <a href={link} target={type === 'external' ? '_blank' : '_self'} className='Button whitespace-nowrap'>{children}</a>} />
    )
}

export default Button