import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { rowAppear } from 'src/animations/rowAppear';

interface Props {
  children: ReactNode;
  className?: string;
}

const Row: FC<Props> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={rowAppear}
    >
      {children}
    </motion.div>
  );
};

export default Row;
