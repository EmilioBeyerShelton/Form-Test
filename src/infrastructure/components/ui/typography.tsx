import { cn } from "@/infrastructure/lib/utils";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function H1({ className, children, ...props }: Props) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance md:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ className, children, ...props }: Props) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 md:text-3xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ className, children, ...props }: Props) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ className, children, ...props }: Props) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight md:text-xl",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function P({ className, children, ...props }: Props) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function Blockquote({ className, children, ...props }: Props) {
  return (
    <p className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props}>
      {children}
    </p>
  );
}

export function TextLead({ className, children, ...props }: Props) {
  return (
    <p
      className={cn("text-muted-foreground text-lg md:text-xl", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function TextLarge({ className, children, ...props }: Props) {
  return (
    <div className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </div>
  );
}

export function TextSmall({ className, children, ...props }: Props) {
  return (
    <small
      className={cn("text-sm leading-none font-medium", className)}
      {...props}
    >
      {children}
    </small>
  );
}

export function TextMuted({ className, children, ...props }: Props) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)} {...props}>
      {children}
    </p>
  );
}
