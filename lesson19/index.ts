type Unpecked<T> = T extends Promise<infer U> ? U : T;

//Promise<number> => number
//Promise<string> => string

type ReturnOf<F> = F extends (...args: any[]) => infer R ? R : any;

type Form<T> = { [K in keyof T]: string };

const user = {
  id: 1,
  name: "Wallace",
  email: "l2H2a@example.com",
};

// Form<user> => {
// id:number,
// nome:string,
// email:string
//}

type Mutable<T> = { -readonly [K in keyof T]-?: T[K] };

// Mutable<user> => {
// readonly id?:number,
// readonly no?me:string,
// readonly em?ail:string
//}

type Getter<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
// Getter<user> => {
// getid:() => number,
// getname:() => string,
// getemail:() => string
//}
