import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function ProtectedServer() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/protected/server");
  }

  return (
    <div>
      Hello {session.user.name} this is
      <div className="text-emerald-500"> server protected page</div>
    </div>
  );
}

export default ProtectedServer;
