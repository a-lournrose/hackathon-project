import React from 'react';
import {AuthDialog} from "@components/dialogs/auth";

export const AuthPage = () => {
    return (
        <div>
            <AuthDialog isOpen={true} onOpenChange={() => {}}/>
        </div>
    );
};