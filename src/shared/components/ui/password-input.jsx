import * as React from "react"
import { Input } from "./input";
import { EyeIcon, EyeOffIcon } from "lucide-react";


const PasswordInput = React.forwardRef(({ className,  ...props }, ref) => {
    const [password, setPassword] = React.useState("")
    const [showPassword, setShowPassword] = React.useState(false)

  return (
    <>
        <Input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            suffix={showPassword ? (
                <EyeIcon onClick={() => setShowPassword(false)} />
            ) : (
                <EyeOffIcon onClick={() => setShowPassword(true)}  />
            )
            } 
            className={className} 
            {...props} 
            ref={ref}
        />
    </>
  );
});
PasswordInput.displayName = "PasswordInput";

export { PasswordInput }