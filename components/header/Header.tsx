import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserProfile from "./UserProfile";
import AuthButtons from "./AuthButtons";
import SignOutButton from "./SignOutButton";

export interface UserProps {
  name: string;
  email: string;
  emailVerified: boolean;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

const Header = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user as UserProps;

  return (
    <header>
      <div className="flex items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <Logo />

        {/* Navbar Menu */}
        <NavMenu />

        {/* User Actions */}

        {user ? (
          <div className="flex items-center gap-4">
            <UserProfile user={user} />
            <SignOutButton />
          </div>
        ) : (
          <AuthButtons />
        )}
      </div>
    </header>
  );
};
export default Header;
