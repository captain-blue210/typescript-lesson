// interfaceでは以下のように、型を随時追拡張できてしまい、バグに繋がりやすい
interface User {
    name: string;
}
interface User {
    age: number;
}
interface User {
    species: 'rabbit' | 'bear' | 'fox' | 'dog';
}
const rolley: User = {
    name: 'Rolley Cocker', age: 8,
    species: 'dog',
};
