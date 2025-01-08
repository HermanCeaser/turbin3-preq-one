import { parseByteArray, base58ToWallet, walletToBase58 } from "./utils";

describe("Wallet Format Converter", () => {
  test("Converts Base58 to Wallet Byte Array", () => {
    const base58Key =
      "gdtKSTXYULQNx87fdD3YgXkzVeyFeqwtxHm6WdEb5a9YJRnHse7GQr7t5pbepsyvUCk7VvksUGhPt4SZ8JHVSkt";
    const expectedByteArray = [
      34, 46, 55, 124, 141, 190, 24, 204, 134, 91, 70, 184, 161, 181, 44, 122,
      15, 172, 63, 62, 153, 150, 99, 255, 202, 89, 105, 77, 41, 89, 253, 130,
      27, 195, 134, 14, 66, 75, 242, 7, 132, 234, 160, 203, 109, 195, 116, 251,
      144, 44, 28, 56, 231, 114, 50, 131, 185, 168, 138, 61, 35, 98, 78, 53,
    ];

    const result = base58ToWallet(base58Key);
    expect(result).toEqual(expectedByteArray);
  });

  test("Converts Wallet Byte Array to Base58", () => {
    const byteArray = [
      34, 46, 55, 124, 141, 190, 24, 204, 134, 91, 70, 184, 161, 181, 44, 122,
      15, 172, 63, 62, 153, 150, 99, 255, 202, 89, 105, 77, 41, 89, 253, 130,
      27, 195, 134, 14, 66, 75, 242, 7, 132, 234, 160, 203, 109, 195, 116, 251,
      144, 44, 28, 56, 231, 114, 50, 131, 185, 168, 138, 61, 35, 98, 78, 53,
    ];
    const expectedBase58 =
      "gdtKSTXYULQNx87fdD3YgXkzVeyFeqwtxHm6WdEb5a9YJRnHse7GQr7t5pbepsyvUCk7VvksUGhPt4SZ8JHVSkt";

    const result = walletToBase58(byteArray);
    expect(result).toBe(expectedBase58);
  });

  test("Parses Valid Byte Array Input", () => {
    const byteArrayInput =
      "34, 46, 55, 124, 141, 190, 24, 204, 134, 91, 70, 184, 161, 181, 44";
    const expected = [
      34, 46, 55, 124, 141, 190, 24, 204, 134, 91, 70, 184, 161, 181, 44,
    ];
    const result = parseByteArray(byteArrayInput);
    expect(result).toEqual(expected);
  });

  test("Handles Invalid Byte Array Input Gracefully", () => {
    const invalidInput = "34, 46, invalid, 124";
    expect(() => parseByteArray(invalidInput)).toThrow(
      "Failed to parse byte array"
    );
  });
});
