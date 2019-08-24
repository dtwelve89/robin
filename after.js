class Candidate {
  constructor(name, health, damage) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.wins = 0;
    this.losses = 0;
  }
}

class Solution {
  round = (candidate1, candidate2) => {
    // Candidate Slap Endurance
    const c1SlapEndurance = candidate1.health / candidate2.damage;
    const c2SlapEndurance = candidate2.health / candidate1.damage;

    // Candidate with greater endurance wins
    // Candidate with less endurance loses because their hp will deplete first
    const winner = c1SlapEndurance > c2SlapEndurance ? candidate1 : candidate2;
    const loser = c1SlapEndurance > c2SlapEndurance ? candidate2 : candidate1;

    winner.wins += 1;
    loser.losses += 1;
  };

  // Initiates all candidates to match each opponent in two rounds
  match = candidates => {
    for (let i = 0; i < candidates.length; i += 1) {
      let opponents = candidates.filter(
        candidate => candidate.name !== candidates[i].name
      );
      for (let j = 0; j < opponents.length; j += 1) {
        this.round(candidates[i], opponents[j]);
      }
    }
    // Sort by most wins and determine winner
    candidates.sort((a, b) => (a.wins > b.wins ? -1 : 1));
    console.log('Winner: ' + candidates[0].name);
    console.log(candidates);
  };
}

const tom = new Candidate('Tom Cruise', 136, 6);
const spongeBob = new Candidate('Sponge Bob', 110, 4);
const james = new Candidate('James Earl Jones', 175, 8);
const bob = new Candidate('Bob Barker', 112, 2);
const tonya = new Candidate('Tonya Harding', 108, 7);
const charles = new Candidate('Charles Barkley', 220, 12);
const peter = new Candidate('Peter Piper', 116, 4);
const harry = new Candidate('Harry Potter', 96, 16);
const shamu = new Candidate('Shamu aka Danny', 280, 24);
const bill = new Candidate('Bill Gates', 124, 6);

const applicantWars = new Solution();

const candidates = [
  tom,
  spongeBob,
  james,
  bob,
  tonya,
  charles,
  peter,
  harry,
  shamu,
  bill
];

// Execute Applicant Wars
applicantWars.match(candidates);
