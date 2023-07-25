import { signOut } from "next-auth/react";
import Image from "next/image";

function Profile({ image, name }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-5 w-5">
        <Image
          src={image}
          alt={name}
          className="rounded-full inline-block"
          fill
        />
      </div>
      <div className="flex items-center gap-2">
        <div>{name}</div>
        <div className="btn" onClick={signOut}>
          Sign Out
        </div>
      </div>
    </div>
  );
}

export default Profile;
