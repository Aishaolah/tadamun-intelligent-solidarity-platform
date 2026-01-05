"use client";

import { useState } from "react";

export default function DonateModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Donate button */}
      <button
        onClick={() => setOpen(true)}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg font-semibold"
      >
        Donate now
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 relative">

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-xl font-bold mb-1">Add your card</h2>
            <p className="text-gray-500 mb-6">Dahabia card (Algeria)</p>

            {/* Static form */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <input
                type="text"
                placeholder="Card holder name"
                className="w-full border rounded-lg px-4 py-2"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="border rounded-lg px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="border rounded-lg px-4 py-2"
                />
              </div>

              <button
                disabled
                className="w-full bg-green-600 text-white py-3 rounded-full font-semibold opacity-80 cursor-not-allowed"
              >
                Confirm donation
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              Demo only — no real payment will be processed
            </p>
          </div>
        </div>
      )}
    </>
  );
}
