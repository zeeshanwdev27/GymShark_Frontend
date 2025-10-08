import { Button } from "@/components/ui/button";
import { ShieldAlert  } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Cancel() {

    const navigate = useNavigate()


  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <ShieldAlert className="w-10 h-10" stroke='red' strokeWidth={1.5} />
        <h1 className="text-3xl font-bold">Payment Failed</h1>
        <p className="text-sm">
          Your payment has been failed please try again.
        </p>
      </div>
      <Button onClick={() => navigate("/")} className="w-1/5">
        Return
      </Button>
    </div>
  );
}

export default Cancel;
