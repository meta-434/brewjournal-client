import { useAuth0 } from "@auth0/auth0-react";
import React, { FC } from "react";

interface UserProps {
  variant?: string;
}

const User: FC<UserProps> = ({ variant }) => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading)
        return (
            <>
        (<p>Loading...</p>)
            </>
        );
    if (isAuthenticated) {
        switch (variant) {
        case "chip":
            return (
                <>
                    <p>This is a CHIP placeholder</p>
                </>
            );
        case "text":
            return (
                <>
                    <p>This is a TEXT placeholder</p>
                </>
            );
        default:
            return (
                { isAuthenticated } && (
                    <div>
                        <p>Welcome Back, {user?.nickname}</p>
                    </div>
                )
            );
        }
    }
    return <>{""}</>;
};

export default User;
