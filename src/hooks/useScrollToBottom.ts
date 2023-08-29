import { useEffect, useRef } from 'react';

const useScrollToBottom = <T>(array: T[]): React.RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [array, scrollToBottom]);

  return ref;
};

export default useScrollToBottom;
