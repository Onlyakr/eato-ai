import Link from "next/link";
import { buttonVariants } from "../ui/button";

const AuthButtons = () => {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="/signin"
        className={`${buttonVariants({ variant: "outline" })}`}
      >
        Sign in
      </Link>
      <Link
        href="/signup"
        className={`${buttonVariants({ variant: "default" })}`}
      >
        Sign up
      </Link>
    </div>
  );
};
export default AuthButtons;
