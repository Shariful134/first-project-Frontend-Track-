export interface ITask {
  id: string;
  tiitle: string;
  desciption: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Mideum" | "Low";
}
