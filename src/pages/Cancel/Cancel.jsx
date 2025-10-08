import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Cancel() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a short loading delay (you can remove or replace with actual logic)
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-800 animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-3 h-3 rounded-full bg-gray-800 animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-3 h-3 rounded-full bg-gray-800 animate-bounce"></span>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <ShieldAlert className="w-10 h-10 text-red-600" strokeWidth={1.5} />
        <h1 className="text-3xl font-bold">Payment Failed</h1>
        <p className="text-sm text-gray-500">
          Your payment has failed. Please try again.
        </p>
      </div>
      <Button onClick={() => navigate("/")} className="w-1/5">
        Return
      </Button>
    </div>
  );
}

export default Cancel;
