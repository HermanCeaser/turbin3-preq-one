export function parseByteArray(byteArrayInput: string): number[] {
  try {
    return byteArrayInput.split(",").map((num) => {
      const parsed = parseInt(num.trim(), 10);
      if (isNaN(parsed)) {
        throw new Error(`Invalid byte array value: ${num}`);
      }
      return parsed;
    });
  } catch (error) {
    throw new Error(
      "Failed to parse byte array. Ensure the input is a comma-separated list of integers."
    );
  }
}

import bs58 from "bs58";

export function base58ToWallet(base58Key: string): number[] {
  try {
    const wallet = bs58.decode(base58Key);
    return [...wallet];
  } catch (error) {
    throw new Error("Invalid base58 input");
  }
}

export function walletToBase58(byteArray: number[]): string {
  try {
    const base58Key = bs58.encode(Uint8Array.from(byteArray));
    return base58Key;
  } catch (error) {
    throw new Error("Invalid byte array input");
  }
}
