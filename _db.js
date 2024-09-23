let games = [
  { id: "1", title: "Zelda: Tears of the Kingdom", platform: ["Switch"] },
  {
    id: "2",
    title: "Super Mario Odyssey",
    platform: ["Switch", "PS4", "Xbox One"],
  },
  { id: "3", title: "Animal Crossing: New Horizons", platform: ["Switch"] },
  { id: "4", title: "Fire Emblem: Three Houses", platform: ["Switch"] },
  { id: "5", title: "Splatoon 2", platform: ["Switch"] },
  { id: "6", title: "Luigi’s Mansion 3", platform: ["Switch"] },
  { id: "7", title: "Metroid Dread", platform: ["Switch"] },
  { id: "8", title: "Xenoblade Chronicles 2", platform: ["Switch", "PC"] },
  {
    id: "9",
    title: "Hollow Knight",
    platform: ["Switch", "PC", "PS4", "Xbox One"],
  },
  { id: "10", title: "Bayonetta 3", platform: ["Switch"] },
  { id: "11", title: "Pokemon Scarlet and Violet", platform: ["Switch"] },
  { id: "12", title: "Persona 5", platform: ["PS4", "PS5", "PC"] },
  {
    id: "13",
    title: "Final Fantasy VII Remake",
    platform: ["PS4", "PS5", "PC"],
  },
  {
    id: "14",
    title: "The Witcher 3: Wild Hunt",
    platform: ["PS4", "Xbox One", "PC", "Switch"],
  },
  { id: "15", title: "Celeste", platform: ["Switch", "PC", "PS4", "Xbox One"] },
];

let authors = [
  { id: "1", name: "Mario", verified: true },
  { id: "2", name: "Luigi", verified: true },
  { id: "3", name: "Peach", verified: false },
  { id: "4", name: "Toad", verified: true },
  { id: "5", name: "Bowser", verified: false },
  { id: "6", name: "Yoshi", verified: true },
  { id: "7", name: "Link", verified: true },
  { id: "8", name: "Zelda", verified: false },
  { id: "9", name: "Ganondorf", verified: false },
  { id: "10", name: "Samus", verified: true },
];

let reviews = [
  {
    id: "1",
    rating: "9",
    content: "An amazing adventure filled with creativity!",
    author_id: "1",
    game_id: "2",
  },
  {
    id: "2",
    rating: "8",
    content: "Great gameplay but a bit repetitive.",
    author_id: "2",
    game_id: "1",
  },
  {
    id: "3",
    rating: "10",
    content: "A masterpiece! Every detail is perfect.",
    author_id: "3",
    game_id: "3",
  },
  {
    id: "4",
    rating: "7",
    content: "Fun but lacks depth in the story.",
    author_id: "4",
    game_id: "4",
  },
  {
    id: "5",
    rating: "8",
    content: "Excellent multiplayer experience!",
    author_id: "5",
    game_id: "5",
  },
  {
    id: "6",
    rating: "9",
    content: "Beautiful graphics and engaging gameplay.",
    author_id: "6",
    game_id: "6",
  },
  {
    id: "7",
    rating: "6",
    content: "Interesting concept but poorly executed.",
    author_id: "7",
    game_id: "7",
  },
  {
    id: "8",
    rating: "9",
    content: "A must-play for any RPG fan!",
    author_id: "8",
    game_id: "8",
  },
  {
    id: "9",
    rating: "10",
    content: "Incredible storytelling and character development.",
    author_id: "9",
    game_id: "9",
  },
  {
    id: "10",
    rating: "8",
    content: "Challenging puzzles and a great atmosphere.",
    author_id: "1",
    game_id: "10",
  },
];

export default { reviews, authors, games };
