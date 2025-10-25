"use client";

import { useBalance } from "@repo/store/balance";
import
export default function() {
  const balance = useBalance();
  return <div>
    hi there {balance}
  </div>
}



