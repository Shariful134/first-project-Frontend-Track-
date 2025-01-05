import AddUserModal from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/features/users/userSlice";
import { useAppSelector } from "@/redux/hook";

const Users = () => {
  const users = useAppSelector(selectUsers);
  // console.log(users);

  return (
    <div className=" mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center gap-5">
        <h1 className="font-bold">Users</h1>
        <AddUserModal></AddUserModal>
      </div>

      <div className="space-y-4 mt-5">
        {users.map((user) => (
          <UserCard user={user} key={user.id}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default Users;
