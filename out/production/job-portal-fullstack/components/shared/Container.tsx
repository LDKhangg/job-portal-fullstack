import {cn} from "@/lib/utils.ts";

const Container =({
    children,
    className,
                  }:{
    children?: React.ReactNode;
    className?: string;
})=>{
    return( <div className={cn("max-w-7xl mx-auto px-4", className)}>{children}</div>);
}

export default Container;