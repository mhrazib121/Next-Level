type NoobDeveloper = {
    name: string;
};

// type JuniorDeveloper = {
//     name: string;
//     expertise: string;
//     experience: number;
// };

// intersection type 
type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
};

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipDeveloper: number;
}

// Example of Union type 
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Razib",
    experience: 6,
};

// Example of intersection type 
const developer: NextLevelDeveloper = {
    // Have to assign all proverty 
    name: "Razib",
    expertise: "Javascript",
    experience: 6,
    leadershipDeveloper: 2
};

// Enum Type 