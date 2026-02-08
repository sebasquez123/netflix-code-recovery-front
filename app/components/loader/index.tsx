import RefreshIcon from '@mui/icons-material/Refresh';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import React from 'react';

interface ReloadButtonProps {
  message: string;
  onClick: () => void;
}

const ScreenLoader = () => (
  <div className="flex w-full h-[100vh] justify-center items-center">
    <CircularProgress disableShrink />
  </div>
);

const SmallLoader = () => (
  <div className="flex w-full h-full justify-center items-center">
    <div className="relative w-12 h-12">
      <div className="flex gap-2 items-center justify-center h-full">
        <div
          className="w-3 h-3 bg-[#6022ff] rounded-full animate-bounce"
          style={{ animationDelay: '0s' }}
        ></div>
        <div
          className="w-3 h-3 bg-[#f21a42] rounded-full animate-bounce"
          style={{ animationDelay: '0.2s' }}
        ></div>
        <div
          className="w-3 h-3 bg-[#ff8c00] rounded-full animate-bounce"
          style={{ animationDelay: '0.4s' }}
        ></div>
      </div>
    </div>
  </div>
);

export { ScreenLoader, SmallLoader };
