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
  fightSequence = (candidate1, candidate2) => {
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
    let winner = null;

    for (let i = 0; i < candidates.length; i += 1) {
      if (candidates[i].wins > maxCount) {
        maxCount = candidates[i].wins;
        winner = candidates[i].name;
      }
    }
    console.log('Winner: ' + winner);
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
const Shamu = new Candidate('Shamu', 280, 24);
const Bill = new Candidate('Bill Gates', 124, 6);

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

const applicantWars = new Solution();

// Series of Fights

// Tom
applicantWars.fightSequence(Tom, SpongeBob);
applicantWars.fightSequence(Tom, James);
applicantWars.fightSequence(Tom, Bob);
applicantWars.fightSequence(Tom, Tonya);
applicantWars.fightSequence(Tom, Charles);
applicantWars.fightSequence(Tom, Peter);
applicantWars.fightSequence(Tom, Harry);
applicantWars.fightSequence(Tom, Shamu);
applicantWars.fightSequence(Tom, Bill);

// SpongeBob
applicantWars.fightSequence(SpongeBob, James);
applicantWars.fightSequence(SpongeBob, Bob);
applicantWars.fightSequence(SpongeBob, Tonya);
applicantWars.fightSequence(SpongeBob, Charles);
applicantWars.fightSequence(SpongeBob, Peter);
applicantWars.fightSequence(SpongeBob, Harry);
applicantWars.fightSequence(SpongeBob, Shamu);
applicantWars.fightSequence(SpongeBob, Bill);

// James
applicantWars.fightSequence(James, Bob);
applicantWars.fightSequence(James, Tonya);
applicantWars.fightSequence(James, Charles);
applicantWars.fightSequence(James, Peter);
applicantWars.fightSequence(James, Harry);
applicantWars.fightSequence(James, Shamu);
applicantWars.fightSequence(James, Bill);

// Bob
applicantWars.fightSequence(Bob, Tonya);
applicantWars.fightSequence(Bob, Charles);
applicantWars.fightSequence(Bob, Peter);
applicantWars.fightSequence(Bob, Harry);
applicantWars.fightSequence(Bob, Shamu);
applicantWars.fightSequence(Bob, Bill);

// Tonya
applicantWars.fightSequence(Tonya, Charles);
applicantWars.fightSequence(Tonya, Peter);
applicantWars.fightSequence(Tonya, Harry);
applicantWars.fightSequence(Tonya, Shamu);
applicantWars.fightSequence(Tonya, Bill);

// Charles
applicantWars.fightSequence(Charles, Peter);
applicantWars.fightSequence(Charles, Harry);
applicantWars.fightSequence(Charles, Shamu);
applicantWars.fightSequence(Charles, Bill);

// Peter
applicantWars.fightSequence(Peter, Harry);
applicantWars.fightSequence(Peter, Shamu);
applicantWars.fightSequence(Peter, Bill);

// Harry
applicantWars.fightSequence(Harry, Shamu);
applicantWars.fightSequence(Harry, Bill);

// Shamu
applicantWars.fightSequence(Shamu, Bill);

console.log(candidates);

applicantWars.result();
