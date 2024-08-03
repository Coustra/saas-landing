import React from "react";

interface HeadlineProps {
  section?: string;
  title: string;
}

export const Headline = (props: HeadlineProps) => {
  const { section, title } = props;
  return (
    <div className='flex flex-col items-center justify-center text-center gap-1 my-12'>
      <p className='text-center text-base font-bold tracking-tighter uppercase text-primary'>
        {section}
      </p>
      <h1 className='text-4xl font-black text-center max-w-[550px]'>{title}</h1>
    </div>
  );
};
