//Sintaxe

type Saudation = `Hello ${"World"}`;

//Unions

type Alinhamento = `${"top" | "bottom"}-${"left" | "right"}`;

type InOrOut<T> = T extends `fade${infer R}` ? R : never;

type Entry = InOrOut<"fadeIn" | "fadeOut">; //In | Out


const data: Alinhamento = "bottom-right";

const ent: Entry = "In";
