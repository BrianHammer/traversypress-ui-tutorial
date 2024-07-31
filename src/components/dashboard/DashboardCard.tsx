import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Newspaper } from "lucide-react";

type Props = {};

export const DashboardCard = (props: Props) => {
  return (
    <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
      <CardContent>
        <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
          Posts
        </h3>
        <div className="flex gap-5 justify-center items-center">
          <Newspaper className="text-slate-500" />
        </div>
      </CardContent>
    </Card>
  );
};
