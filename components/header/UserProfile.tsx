import { Button } from "../ui/button";
import { UserProps } from "./Header";

const UserProfile = ({ user }: { user: UserProps }) => {
  return <Button>UserProfile : {user.name}</Button>;
};
export default UserProfile;
