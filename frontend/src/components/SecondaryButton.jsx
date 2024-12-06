'use client';

import { useRouter } from 'next/navigation';
import useAuthStore from '../store/useAuthStore';

export default function SecondaryButton({ name, action }) {
  const router = useRouter();
  const { setHasPickedRole } = useAuthStore();

  const handleRedirect = () => {
    if (action === 'joinRoom') {
      setHasPickedRole(true);
    }
  };

  return (
    <div 
      onClick={() => handleRedirect()} 
      className='flex items-center justify-center w-8/12 h-16 py-2 text-3xl md:text-5xl text-mid-blue bg-white border-[1px] border-mid-blue font-mouse rounded-md z-10 hover:text-white hover:bg-[#4154AF] hover:opacity-80 cursor-pointer'
    >
      {name}
    </div>
  );
};
