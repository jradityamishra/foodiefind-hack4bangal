"use client";

import { useSession } from "next-auth/react";

const ProtectedClient = () => {
  const { data: session } = useSession({
    required: true,
  });

  return (
    <div>
      This is a <span className="text-emerald-500">Protected Client</span>
      <h2>Logged in as: {session?.user?.name}</h2>
    </div>
  );
};

export default ProtectedClient;
