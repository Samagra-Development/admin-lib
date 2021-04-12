import Head from 'next/head'
import React from "react";
import dynamic from 'next/dynamic'; // Next.js dynamic

const RA = dynamic(() => import('../react-admin'), {ssr: false});

export default function ReactAdmin() {
    return (
        <RA/>
    )
}
