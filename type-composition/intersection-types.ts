type A2 = { foo: number };
type B2 = { bar: string };
type C2 = {
    foo?: number;
    baz: boolean;
};

type AnB = A2 & B2;
type AnC = A2 & C2;
type CnAorB = C2 & (A2 | B2);
