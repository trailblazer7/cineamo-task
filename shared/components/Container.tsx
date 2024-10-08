import { ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-[1000px] mx-auto gap-5 mt-10 px-5">
      {children}
    </div>
  );
};

export default Container;
