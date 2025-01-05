import { Button } from "@/components/ui/button";
import { deleteUser } from "@/features/users/userSlice";
import { useAppDispatchSelector } from "@/redux/hook";
import { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatchSelector();

  return (
    <div className=" border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className=" bg-green-500 rounded-full size-3"></div>
          <h1 className="font-bold">User Information</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteUser(user.id))}
            variant="link"
            className=" p-0 text-red-500"
          >
            <Trash2></Trash2>
          </Button>
        </div>
      </div>
      <p className="mt-5">Name :{user.name} </p>
      <p className="mt-5">Email :{user.email} </p>
    </div>
  );
};

export default UserCard;
