type Species = 'rabbit' | 'bear' | 'fox' | 'dog';

interface Resident {
    name: string;
    age: number;
    species: Species;
}

const isCanine = (resident: Resident): boolean =>
    ['dog', 'fox'].includes(resident.species);

// 変数宣言空間と型宣言空間があり、名前の管理が別々になっている
export { Species, Resident, isCanine };
