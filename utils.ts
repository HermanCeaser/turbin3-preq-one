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
