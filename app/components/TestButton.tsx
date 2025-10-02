'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Title from './title';

export default function TestButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push('/test');
    }, 3000); // 3 seconds delay
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={loading}
        className="flex-4 text-center ring-4 ring-[#FDFBE4] rounded-3xl p-4 hover:bg-[#FDFBE4] hover:text-[#A1C336] disabled:opacity-50 mb-2 md:mb-0"
      >
        <Title text="test" />
      </button>
      {loading && (
        <div className="fixed inset-0 bg-linear-to-l from-[#DAE82C] via-[#3C8247] via-[#0A483D] to-[#092B25] flex items-center justify-center z-50 px-4">
          <div className="text-center text-white max-w-7xl w-full">
            <div className="flex items-center justify-center mb-4">
              <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-b-2 border-[#A1C336]"></div>
              <Title text="Loading..." />
            </div>
            <p className="text-sm md:text-lg">
              Please remember, broaden your knowledge on music so as not to become dependent on the quiz!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
