import React from 'react';

const SectionWrapper = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 px-4 md:px-8 lg:px-16 ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
