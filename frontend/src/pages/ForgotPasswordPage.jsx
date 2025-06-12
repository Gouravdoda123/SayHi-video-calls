import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:5001/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setMessage(data.message || "Reset link sent to your email.");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8" data-theme="aqua">
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* FORM SECTION */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center justify-start gap-2">
            <ShipWheelIcon className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              SayHi
            </span>
          </div>

          {/* STATUS MESSAGE */}
          {error && <div className="alert alert-error mb-4"><span>{error}</span></div>}
          {message && <div className="alert alert-success mb-4"><span>{message}</span></div>}

          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Forgot Password</h2>
              <p className="text-sm opacity-70">
                Enter your email address to receive a password reset link.
              </p>
            </div>

            <div className="form-control w-full space-y-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Sending...
                </>
              ) : (
                "Send Reset Link"
              )}
            </button>

            <div className="text-center mt-4">
              <p className="text-sm">
                Remember your password?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Back to Login
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* IMAGE SECTION */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/call.png" alt="Language connection illustration" className="w-full h-full" />
            </div>
            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">Reset your password securely</h2>
              <p className="opacity-70">
                We’ll send you a secure link to help you get back into your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
