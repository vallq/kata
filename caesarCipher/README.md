## Caesar Cipher Encryption and Decryption
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 

In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

*Eg. abcdefghijklmnopqrstuvwxyz  =>  defghijklmnopqrstuvwxyzabc*

Create 2 functions, caesarCipher and decryptCaesarCipher and perform encryption and decryption to show that the cipher works.

Test Cases
```j
expect(caesarCipher("apple", 3)).toBe("dssoh");
expect(decryptCaesaeCipher("dssoh", 3)).toBe("apple");
expect(caesarCipher("abcde-fghij", 3)).toBe("defgh-ijklm"); 
expect(caesarCipher("", 3)).toBe("");// other characters should be maintained*
```