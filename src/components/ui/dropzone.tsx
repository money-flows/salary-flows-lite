import * as React from "react";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export interface DropzoneProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "onDrop"
  > {
  className?: string;
  classNames?: { root: string; inner: string };
  children?: React.ReactNode;
  onDrop?: (acceptedFiles: FileList | null) => void | Promise<void>;
}

const Dropzone = React.forwardRef<HTMLDivElement, DropzoneProps>(
  ({ className, classNames, children, onDrop, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      onDrop?.(null);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const { files } = e.dataTransfer;
      if (inputRef.current) {
        inputRef.current.files = files;
        onDrop?.(files);
      }
    };

    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      onDrop?.(e.target.files);
    };

    return (
      <Card
        ref={ref}
        className={cn(
          "border-dashed border-muted-foreground/40 hover:bg-muted/50 hover:cursor-pointer",
          props.disabled &&
            "hover:pointer-events-none bg-muted hover:bg-muted opacity-50",
          classNames?.root
        )}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <Input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={handleChangeInput}
          {...props}
        />
        <div className={cn(classNames?.inner, className)}>{children}</div>
      </Card>
    );
  }
);

export default Dropzone;
