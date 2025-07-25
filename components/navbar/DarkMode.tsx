'use client';

import { RxMoon } from 'react-icons/rx';
import { LuSun } from 'react-icons/lu';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <LuSun className='size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
      <RxMoon className='absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};
export default DarkMode;
