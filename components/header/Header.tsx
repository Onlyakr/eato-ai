import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { ModeToggle } from "./ModeToggle";
import { UserProps } from "@/types/userType";

import Logo from "./Logo";
import AuthButtons from "./AuthButtons";
import SignOutButton from "./SignOutButton";

const Header = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user as UserProps;

  return (
    <header className="bg-background/50 sticky top-0 right-0 left-0 z-50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-8">
        {/* Logo */}
        <Logo />

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <ModeToggle />

          {/* User Actions */}
          {user ? (
            <div className="flex items-center gap-4">
              <SignOutButton />
            </div>
          ) : (
            <AuthButtons />
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
