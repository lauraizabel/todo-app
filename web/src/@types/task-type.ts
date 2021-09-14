export interface Task {
  id?: number;
  description: string;
  done: boolean;
  categoryId: number | null | undefined;
}
