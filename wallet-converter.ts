import  bs58 from "bs58";
import prompt from "prompt-sync";
import { parseByteArray } from "./utils";


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

// [34,46,55,124,141,190,24,204,134,91,70,184,161,181,44,122,15,172,63,62,153,150,99,255,202,89,105,77,41,89,253,130,27,195,134,14,66,75,242,7,132,234,160,203,109,195,116,251,144,44,28,56,231,114,50,131,185,168,138,61,35,98,78,53];

// CLI tool
const input = prompt();

function main() {
  console.log("Solana Wallet Format Converter");
  console.log("1. Convert Base58 to Wallet Byte Array");
  console.log("2. Convert Wallet Byte Array to Base58");
  const choice = input("Enter your choice (1 or 2): ").trim();

  try {
    switch (choice) {
      case "1": {
        const base58Key = input("Enter the base58 encoded private key: ").trim();
        const walletArray = base58ToWallet(base58Key);
        console.log("Wallet byte array representation:", walletArray);
        break;
      }
      case "2": {
        const byteArrayInput = input(
          "Enter the wallet byte array (comma-separated integers): "
        ).trim();
        const byteArray = parseByteArray(byteArrayInput);
        const base58Key = walletToBase58(byteArray);
        console.log("Base58 encoded private key:", base58Key);
        break;
      }
      default:
        console.error("Invalid choice. Please select 1 or 2.");
    }
  } catch (error: any) {
    console.error(error.message);
  }

}

// Run the CLI tool
main();