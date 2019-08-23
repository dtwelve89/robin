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
  battle = (candidate1, candidate2) => {
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

  // Tally up most wins to determine winner
  result = () => {
    let maxCount = 0;
    // let winner = null;

    for (let i = 0; i < candidates.length; i += 1) {
      if (candidates[i].wins > maxCount) {
        maxCount = candidates[i].wins;
        // winner = candidates[i].name;
      }
    }

    candidates.sort((a, b) => (a.wins > b.wins ? -1 : 1));
    // console.log(winner);
    console.log(candidates);
  };
}

const Tom = new Candidate('Tom Cruise', 136, 6);
const SpongeBob = new Candidate('Sponge Bob', 110, 4);
const James = new Candidate('James Earl Jones', 175, 8);
const Bob = new Candidate('Bob Barker', 112, 2);
const Tonya = new Candidate('Tonya Harding', 108, 7);
const Charles = new Candidate('Charles Barkley', 220, 12);
const Peter = new Candidate('Peter Piper', 116, 4);
const Harry = new Candidate('Harry Potter', 96, 16);
const Shamu = new Candidate('Shamu aka Danny', 280, 24);
const Bill = new Candidate('Bill Gates', 124, 6);

const applicantWars = new Solution();

const candidates = [
  Tom,
  SpongeBob,
  James,
  Bob,
  Tonya,
  Charles,
  Peter,
  Harry,
  Shamu,
  Bill
];

// Series of Fights

// Tom
applicantWars.battle(Tom, SpongeBob);
applicantWars.battle(Tom, James);
applicantWars.battle(Tom, Bob);
applicantWars.battle(Tom, Tonya);
applicantWars.battle(Tom, Charles);
applicantWars.battle(Tom, Peter);
applicantWars.battle(Tom, Harry);
applicantWars.battle(Tom, Shamu);
applicantWars.battle(Tom, Bill);

// SpongeBob
applicantWars.battle(SpongeBob, James);
applicantWars.battle(SpongeBob, Bob);
applicantWars.battle(SpongeBob, Tonya);
applicantWars.battle(SpongeBob, Charles);
applicantWars.battle(SpongeBob, Peter);
applicantWars.battle(SpongeBob, Harry);
applicantWars.battle(SpongeBob, Shamu);
applicantWars.battle(SpongeBob, Bill);

// James
applicantWars.battle(James, Bob);
applicantWars.battle(James, Tonya);
applicantWars.battle(James, Charles);
applicantWars.battle(James, Peter);
applicantWars.battle(James, Harry);
applicantWars.battle(James, Shamu);
applicantWars.battle(James, Bill);

// Bob
applicantWars.battle(Bob, Tonya);
applicantWars.battle(Bob, Charles);
applicantWars.battle(Bob, Peter);
applicantWars.battle(Bob, Harry);
applicantWars.battle(Bob, Shamu);
applicantWars.battle(Bob, Bill);

// Tonya
applicantWars.battle(Tonya, Charles);
applicantWars.battle(Tonya, Peter);
applicantWars.battle(Tonya, Harry);
applicantWars.battle(Tonya, Shamu);
applicantWars.battle(Tonya, Bill);

// Charles
applicantWars.battle(Charles, Peter);
applicantWars.battle(Charles, Harry);
applicantWars.battle(Charles, Shamu);
applicantWars.battle(Charles, Bill);

// Peter
applicantWars.battle(Peter, Harry);
applicantWars.battle(Peter, Shamu);
applicantWars.battle(Peter, Bill);

// Harry
applicantWars.battle(Harry, Shamu);
applicantWars.battle(Harry, Bill);

// Shamu
applicantWars.battle(Shamu, Bill);

// Execute Applicant Wars
applicantWars.result();
