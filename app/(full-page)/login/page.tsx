/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { LayoutContext } from '@/layout/context/layoutcontext';

const LoginPage = () => {
    const { layoutConfig } = useContext(LayoutContext);

    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        border: "5px solid var(--primary-color)"
                }}
                >
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            <img src={process.env.APP_LOGO} alt="Logo" height="160" className="mb-3" style={{ borderRadius: '50%' }}/>
                            <div className="text-900 text-3xl font-medium mb-3">Welcome to {process.env.APP_NAME}!</div>
                            <span className="text-600 font-medium">{process.env.APP_DESCRIPTION}</span>
                        </div>
                        <div>
                            <Button icon="pi pi-microsoft" label="Authenticate with Azure" className="w-full p-3 text-xl block text-1000" onClick={() => router.push('/')}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
