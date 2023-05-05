// Generic Interface
interface developerType<T> {
    name: string,
    expertness: T
};
const developer1: developerType<boolean> = {
    name: "Jhon",
    expertness: true
};
const developer2: developerType<string> = {
    name: "Jhon",
    expertness: "Javascript",
};
interface developerExpertnessType {
    technology: string;
    year: number
}
const developer3: developerType<developerExpertnessType> = {
    name: "Jhon",
    expertness: {
        technology: "React",
        year: 6
    },
};

// Generic multiple and optional type in  generic interface 
interface developerType2<T, U = null> {
    name: string;
    expertness: T;
    company?: U;
};

const developer4: developerType2<boolean> = {
    name: "Raj Mojumder",
    expertness: false,
    // company: "P-Hero"
};

