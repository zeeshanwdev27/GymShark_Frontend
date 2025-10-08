import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/Cart/CartSlice";


function Success() {
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        if (!sessionId) {
          navigate("/"); // 🚫 No session_id means user came directly
          return;
        }

        const res = await axios.get(`https://gymshark-backend-gped.onrender.com/verify-session/${sessionId}`);
        if (res.data.success) {
          setValid(true);
          dispatch(clearCart());
        } else {
          navigate("/"); // 🚫 Invalid session
        }
      } catch (err) {
        console.error(err);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [sessionId, navigate, dispatch]);

  if (loading) return <p>Loading...</p>;

  if (!valid) return null; // Don't render success content if invalid

  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <CircleCheck className="w-10 h-10 text-green-600" stroke="green" strokeWidth={1.5} />
        <h1 className="text-3xl font-bold">Payment Successful</h1>
        <p className="text-sm text-gray-500">Your payment has been verified successfully.</p>
      </div>
      <Button onClick={() => navigate("/")} className="w-1/5">Finish</Button>
    </div>
  );
}

export default Success;
