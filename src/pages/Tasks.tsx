import { AddTaskModal } from "@/components/module/task/AddTaskModal";
import TaskCard from "@/components/module/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  selectFilter,
  selectTask,
  updateFilter,
} from "@/features/task/taskSlice";
import { useAppDispatchSelector, useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatchSelector();
  console.log(tasks);
  console.log(filter);
  return (
    <div className=" mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center gap-5">
        <h1>Tasks</h1>

        <div className="ml-auto ">
          <Tabs defaultValue="All">
            <TabsList className="grid w-full grid-cols-4 gap-2">
              <TabsTrigger
                onClick={() => dispatch(updateFilter("All"))}
                className="border-slate-500 border-2"
                value="All"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("High"))}
                className="border-slate-500 border-2"
                value="High"
              >
                High
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("Medium"))}
                className="border-slate-500 border-2"
                value="Medium"
              >
                Medium
              </TabsTrigger>
              <TabsTrigger
                onClick={() => dispatch(updateFilter("Low"))}
                className="border-slate-500 border-2"
                value="Low"
              >
                Low
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <AddTaskModal></AddTaskModal>
      </div>

      <div className="space-y-4 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
