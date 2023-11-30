
import React from 'react';
import {CircularProgress} from "@mui/joy";

const Loading = () => (
    <div className="flex items-center justify-center h-screen">
        <CircularProgress color="neutral"   size="lg"/>
    </div>
);

export default Loading;
