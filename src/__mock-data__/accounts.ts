/**
 * #1 regular account with ether value
 * #2 regular account with no ether value
 * #3 undefined account
 * #4 group2 account with ether value, same address with #1
 * #5 group2 account with ether value, different than #2
 * #6 group2 account with no ether value, different than group1
 * #7 same values as #1, with ACC_ prefix
 * #8 same values as #2, with ACC_ prefix
 * #9 same values as #3, with ACC_ prefix
 */
export const testSource = {
  // #1
  ACCOUNT_GROUP1_USER1: [
    "0xd9FF26d1b97d3f2e942D026645332336cBb27bda",
    "ffe362b740d2c187894fcfb1bbe684b1c1ee4caee6b3478f2e69d78d02f22b34",
    "100000000000000000000",
  ].join(":"),
  // #2
  ACCOUNT_GROUP1_USER2: [
    "0xcE9a2A71dC12F79DF3B30EA1e6355C576E4f632f",
    "59ce4a71b0785c64992b7317da7185ae32be960c7af0f988ca8b39026779fd85",
  ].join(":"),
  // #3
  ACCOUNT_GROUP1_USER3: undefined,
  // #4
  ACCOUNT_GROUP2_USER1: [
    "0xd9FF26d1b97d3f2e942D026645332336cBb27bda",
    "ffe362b740d2c187894fcfb1bbe684b1c1ee4caee6b3478f2e69d78d02f22b34",
    "100000000000000000000",
  ].join(":"),
  // #5
  ACCOUNT_GROUP2_USER2: [
    "0xcE9a2A71dC12F79DF3B30EA1e6355C576E4f2232",
    "59ce4a71b0785c64992b7317da7185ae32be960c7af0f988aa8b39026779fd85",
    "100000000000000000000",
  ].join(":"),
  // #6
  ACCOUNT_GROUP2_USER3: [
    "0xcE9a2A71dC12F23DF3B30EA1e6355C576E4f2232",
    "59ce4a71b0785c62392b7317da7185ae32be960c7af0f988aa8b39026779fd85",
  ].join(":"),

  // #7
  ACC_GROUP1_USER1: [
    "0xd9FF26d1b97d3f2e942D026645332336cBb27bda",
    "ffe362b740d2c187894fcfb1bbe684b1c1ee4caee6b3478f2e69d78d02f22b34",
    "100000000000000000000",
  ].join(":"),
  // #8
  ACC_GROUP1_USER2: [
    "0xcE9a2A71dC12F79DF3B30EA1e6355C576E4f632f",
    "59ce4a71b0785c64992b7317da7185ae32be960c7af0f988ca8b39026779fd85",
  ].join(":"),
  // #9
  ACC_GROUP1_USER3: undefined,

  OTHER_1: "1",
  OTHER_2: "2",
  OTHER_3: "3",
};

export const testPrefix1 = "ACCOUNT_";
export const testPrefix2 = "ACC_";
