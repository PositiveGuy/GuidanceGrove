import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext'; // Adjust the import path as needed

const MySVG = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <svg
      className={theme === 'light' ? 'bg-gray-50' : 'bg-red-700'}
      width={42}
      height={40}
      style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
      version="1.1"
      viewBox="0 0 512 512"

      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
        style={{ fill: 'currentColor' }}
      />
    </svg>
  );
};

export default MySVG;