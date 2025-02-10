"use client";

import Side from '@/components/features/admin/Side';
import { useGlobalContext } from '@/context/GlobalContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isConnected } = useAccount();
  const { user, globalLoading } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    if (!isConnected) {
      router.push("/");
    } else if (!globalLoading && user) {
      if (user.role !== "admin") {
        router.push("/");
      }
    }
  }, [isConnected, user, globalLoading, router]);

  return (
    <div className="h-[90vh] w-full flex">
      <Side />
      <div className="h-full w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
