import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse delay-2000" />
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-pulse delay-3000" />
        </div>
      </div>
    </div>
  );
};

export default ParticleBackground;
