'use client'

import React from 'react';

type VariantType = 'default' | 'ghost' | 'warning' | 'danger' | 'success' | 'accent';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: VariantType;
    size?: ButtonSize;
    isLoading?: boolean;
    isBlock?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    loadingText?: string;
}

const PixelButton = ({
    children,
    className = "",
    variant = "default",
    size = "md",
    isLoading = false,
    isBlock = false,
    leftIcon,
    rightIcon,
    loadingText,
    disabled,
    onClick,
    type = "button",
    ...props
}: Readonly<PixelButtonProps>) => {
    const variants = {
        default: {
            button: 'bg-primary hover:bg-primary-focus text-primary-content ',
            side: 'bg-primary group-hover:bg-primary-focus'
        },
        ghost: {
            button: 'bg-base-100 hover:bg-base-200 text-base-content border-1 border-base-content',
            side: 'bg-base-100 group-hover:bg-base-200 border-r-1 border-base-content'
        },
        warning: {
            button: 'bg-warning hover:bg-warning-focus text-warning-content',
            side: 'bg-warning group-hover:bg-warning-focus'
        },
        danger: {
            button: 'bg-error hover:bg-error-focus text-error-content',
            side: 'bg-error group-hover:bg-error-focus'
        },
        success: {
            button: 'bg-success hover:bg-success-focus text-success-content',
            side: 'bg-success group-hover:bg-success-focus'
        },
        accent: {
            button: 'bg-accent hover:bg-accent-focus text-accent-content',
            side: 'bg-accent group-hover:bg-accent-focus'
        }
    };

    const sizes = {
        xs: 'px-[8px] py-1 text-sm',
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-8 py-4 text-xl'
    };

    const currentVariant = variants[variant];
    const currentSize = sizes[size];

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!isLoading && !disabled && onClick) {
            onClick(event);
        }
    };

    return (
        <button
            type={type}
            disabled={disabled || isLoading}
            onClick={handleClick}
            className={`
                rounded-none
                group
                relative px-4 py-2 
                ${currentSize}
                ml-1
                mr-1
                border-[1px]
                font-pixel
                transition-all
                active:translate-x-0.5
                active:translate-y-0.5
                active:shadow-none
                [box-shadow:4px_4px_0px_#000]
                ${isBlock ? 'w-full' : 'w-auto'}
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                ${currentVariant.button}
                ${className}
                flex items-center justify-center gap-2
            `}
            {...props}
        >
            <div className={`
                absolute -left-1.5 top-1 w-1.5 h-[80%] 
                transition-colors
                border-y-[1px]
                border-l-[1px]
                ${currentVariant.side}
                ${disabled ? 'opacity-50' : ''}
            `} />
            <div className={`
                absolute -right-1.5 top-1 w-1.5 h-[80%]
                transition-colors
                [box-shadow:4px_4px_0px_#000]
                group-active:shadow-none
                border-y-[1px]
                border-r-[1px]
                z-10
                ${currentVariant.side}
                ${disabled ? 'opacity-50' : ''}
            `} />
            {isLoading ? (
                <>
                    <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                    {loadingText && <span>{loadingText}</span>}
                </>
            ) : (
                <>
                    {leftIcon && <span className="inline-flex">{leftIcon}</span>}
                    {children}
                    {rightIcon && <span className="inline-flex">{rightIcon}</span>}
                </>
            )}
        </button>
    );
};

export default PixelButton;