import cx from "./button.module.css";

import type { ReactNode } from "react";
import cn from "classnames";


export interface ButtonProps {
    children: ReactNode,
    size?: "sm" | "md" | "lg",
    buttonStyle?: "filled" | "bezeled" | "bezeled-gray" | "borderless",
    disabled?: boolean,
    icon?: ReactNode,
    dark?: boolean,
    color?: "red" | "orange" | "yellow" | "green" | "mint" | "teal" | "cyan" | "blue" | "indigo" | "purple" | "pink" | "brown"
}

export function Button({
    children,
    size,
    buttonStyle,
    disabled,
    icon,
    dark,
    color,
    ...options
}: ButtonProps & React.ButtonHTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={
                cn(
                    cx.button,
                    cx[size ?? "sm"],
                    dark && cx.dark,
                    cx[buttonStyle ?? "filled"],
                    disabled && cx.disabled
                )}
            role="button"
            style={{
                "--bg": color ? `var(--system-${color}-${dark ? "dark" : "light"})` : "var(--system-blue-light)",
            } as React.CSSProperties}
            aria-disabled={disabled}
            {...options}
        >
            <div className={cx.buttonInner}>
                {icon}
                <span>{children}</span>
            </div>
        </div>
    )
}
