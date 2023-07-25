"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import Profile from "../ProfileBadge/ProfileBadge";

function Header() {
  const { data } = useSession();

  return (
    <div className="flex justify-between p-5">
      <nav className="flex gap-3">
        <Link href={"/protected/client"}>
          <div className="btn">Protected Client</div>
        </Link>
        <Link href={"/protected/server"}>
          <div className="btn">Protected Server</div>
        </Link>
      </nav>
      <div>
        {data ? (
          <Profile image={data?.user?.image} name={data?.user?.name} />
        ) : (
          <div className="btn" onClick={signIn}>
            Sign-In
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
