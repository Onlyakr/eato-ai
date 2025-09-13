import { UserProps } from "@/types/userType";
import { Button } from "../ui/button";

const UserProfile = ({ user }: { user: UserProps }) => {
  return <Button>UserProfile : {user.name}</Button>;
};
export default UserProfile;
