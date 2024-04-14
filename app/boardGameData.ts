// Chat GPT
export interface BoardGameData {
  id: string;
  name: string;
  thumbnail: string;
  complexity: number;
  minPlayers: number;
  maxPlayers: number;
  avgSize: string;
}
// ----------------------------------------- SIZE INFORMATION -------------------------------
// when changing the avgSize value, place the larger value first to look better
// in the "See More Info" button table
// ----------------------------------------- SIZE INFORMATION -------------------------------
export const boardGames: BoardGameData[] = [
  {
    id: "1",
    name: "Carcassonne",
    thumbnail:
      "https://cf.geekdo-images.com/okM0dq_bEXnbyQTOvHfwRA__itemrep/img/_GLRhUoVx6Zp4kTE0rv_gi9cyOQ=/fit-in/246x300/filters:strip_icc()/pic6544250.png",
    complexity: 1.89,
    minPlayers: 2,
    maxPlayers: 5,
    avgSize: "70in x 70in",
  },
  {
    id: "2",
    name: "Shadows Over Camelot",
    thumbnail:
      "https://cf.geekdo-images.com/JYqwG_v1B3RhpB7NcmeDOA__itemrep/img/Z6Zac8NvuJQN5jBl3Z7uppanUbc=/fit-in/246x300/filters:strip_icc()/pic70547.jpg",
    complexity: 2.57,
    minPlayers: 3,
    maxPlayers: 7,
    avgSize: "70in x 70in",
  },
  {
    id: "3",
    name: "Railroad Ink: Deep Blue Edition",
    thumbnail:
      "https://cf.geekdo-images.com/x3hjEgkxZE9M96o6wgj6Tw__itemrep/img/MpwGSYawrf0hcH-7Gc0z-lhUCvo=/fit-in/246x300/filters:strip_icc()/pic4097632.png",
    complexity: 1.47,
    minPlayers: 1,
    maxPlayers: 6,
    avgSize: "25in x 25in",
  },
  {
    id: "4",
    name: "Dixit",
    thumbnail:
      "https://cf.geekdo-images.com/J0PlHArkZDJ57H-brXW2Fw__itemrep/img/tsmN3sAHJ6trDaWNbq08BZXtq7g=/fit-in/246x300/filters:strip_icc()/pic6738336.jpg",
    complexity: 1.2,
    minPlayers: 3,
    maxPlayers: 6,
    avgSize: "70in x 70in",
  },
  {
    id: "5",
    name: "Codenames",
    thumbnail:
      "https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__itemrep/img/e8zw8YQvQB8q8zfWkHQ48Ls920g=/fit-in/246x300/filters:strip_icc()/pic2582929.jpg",
    complexity: 1.26,
    minPlayers: 2,
    maxPlayers: 8,
    avgSize: "70in x 70in",
  },
  {
    id: "6",
    name: "The Legend of the Cherry Tree that Blossoms Every Ten Years",
    thumbnail:
      "https://cf.geekdo-images.com/UuAF29nmbvDg5bILPBPrIg__itemrep/img/Eb0MsLicSG8QMbDuTn9sg8JL7bg=/fit-in/246x300/filters:strip_icc()/pic3907805.png",
    complexity: 1.47,
    minPlayers: 2,
    maxPlayers: 4,
    avgSize: "24in x 24in",
  },
  {
    id: "7",
    name: "One Night Ultimate Werewolf",
    thumbnail:
      "https://cf.geekdo-images.com/KLDb0vR3w8mfaHgIGF0gHw__itemrep/img/qv0WkrvyQumuNtJry2pjodxjZ5k=/fit-in/246x300/filters:strip_icc()/pic1809823.jpg",
    complexity: 1.37,
    minPlayers: 3,
    maxPlayers: 10,
    avgSize: "70in x 70in",
  },
  {
    id: "8",
    name: "Mille Bornes",
    thumbnail:
      "https://cf.geekdo-images.com/kzLZY_DHTh-hBcqXP34a5w__itemrep/img/03900Mg7512a9ig4XEp6epY7omw=/fit-in/246x300/filters:strip_icc()/pic4330533.jpg",
    complexity: 1.25,
    minPlayers: 2,
    maxPlayers: 6,
    avgSize: "70in x 70in",
  },
  {
    id: "9",
    name: "Racko",
    thumbnail:
      "https://cf.geekdo-images.com/M49aMRX_EmQIh56Kx-Snfg__itemrep/img/pFaa-6LZP0fBQ7_PcTt1oeDlad4=/fit-in/246x300/filters:strip_icc()/pic1287239.jpg",
    complexity: 1.19,
    minPlayers: 2,
    maxPlayers: 4,
    avgSize: "30in x 30in",
  },
  {
    id: "10",
    name: "Sushi Go Party",
    thumbnail:
      "https://cf.geekdo-images.com/2f9uTicUSXkdPp2Yks6zFw__itemrep/img/Y_jPOWbp6_2qOzymSNIC6SZo4TE=/fit-in/246x300/filters:strip_icc()/pic5885689.jpg",
    complexity: 1.3,
    minPlayers: 2,
    maxPlayers: 8,
    avgSize: "70in x 70in",
  },
  {
    id: "11",
    name: "Bards Dispense Profanity",
    thumbnail:
      "https://cf.geekdo-images.com/vtmjkxMAxuwTWvMWmZ94UA__itemrep/img/W8SXM1miNUvyWB8tu_0p0dDXv50=/fit-in/246x300/filters:strip_icc()/pic4089625.jpg",
    complexity: 1.33,
    minPlayers: 4,
    maxPlayers: 20,
    avgSize: "26in x 10in",
  },
  {
    id: "12",
    name: "Everdell",
    thumbnail:
      "https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__itemrep/img/nyVhVuXdmw-1sigbocTKG81UInM=/fit-in/246x300/filters:strip_icc()/pic3918905.png",
    complexity: 2.82,
    minPlayers: 1,
    maxPlayers: 4,
    avgSize: "70in x 70in",
  },
  {
    id: "13",
    name: "Pandemic",
    thumbnail:
      "https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__itemrep/img/wAMLbgihOl7dJDHnvqt7OXKEV-4=/fit-in/246x300/filters:strip_icc()/pic1534148.jpg",
    complexity: 2.4,
    minPlayers: 2,
    maxPlayers: 4,
    avgSize: "70in x 70in",
  },
  {
    id: "14",
    name: "Settlers of Catan",
    thumbnail:
      "https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__itemrep/img/IzYEUm_gWFuRFOL8gQYqGm5gU6A=/fit-in/246x300/filters:strip_icc()/pic2419375.jpg",
    complexity: 2.29,
    minPlayers: 3,
    maxPlayers: 4,
    avgSize: "70in x 70in",
  },
  {
    id: "15",
    name: "Takenoko",
    thumbnail:
      "https://cf.geekdo-images.com/uvz-5V6A2R6dp2oWIXmj_g__itemrep/img/fT5tXhYc0kc5ur8NDdnJHj_GOSw=/fit-in/246x300/filters:strip_icc()/pic1912529.jpg",
    complexity: 1.98,
    minPlayers: 2,
    maxPlayers: 4,
    avgSize: "70in x 70in",
  },
  {
    id: "16",
    name: "Windward",
    thumbnail:
      "https://cf.geekdo-images.com/63M83VSO5nApobnjl9mxfg__itemrep/img/vltDtbd-Ak_Mn9zae0zRxihOSlY=/fit-in/246x300/filters:strip_icc()/pic4821604.jpg",
    complexity: 2.35,
    minPlayers: 1,
    maxPlayers: 5,
    avgSize: "52in x 30in",
  },
];
