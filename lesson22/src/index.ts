//Lista Encadeada
type ListNode<T> = {
  value: T;
  next?: ListNode<T>;
};

const list: ListNode<number> = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
    },
  },
};
///////////////////////////////////////////////////////////////////////
//Arvore
type Tree<T> = {
  value: T;
  children?: Array<Tree<T>>;
};

const tree: Tree<number> = {
  value: 1,
  children: [
    { value: 2, children: [{ value: 4 }, { value: 5 }] },
    { value: 3, children: [{ value: 6 }, { value: 7 }] },
  ],
};
///////////////////////////////////////////////////////////////////////
// Arvore de diretorio
type FileNode = { type: "file"; name: string; size: number };
type DirNode = { type: "dir"; name: string; children: FsNode[] };
type FsNode = FileNode | DirNode;

function getTotalSize(node: FsNode): number {
  return node.type === "file" ? node.size : node.children.reduce((sum, child) => sum + getTotalSize(child), 0);
}

const project: FsNode = {
  type: "dir",
  name: "src",
  children: [
    { type: "file", name: "index.ts", size: 1000 },
    { type: "dir", name: "components", children: [{ type: "file", name: "Button.tsx", size: 2000 }] },
  ],
};
///////////////////////////////////////////////////////////////////////
// JSON Recursive Type
type JSONPrimitive = string | number | boolean | null;

interface JSONObject {
  [k: string]: JSONValue;
}

type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSONValue(v: unknown): v is JSONValue {
  if (v === null) return true;

  const t = typeof v;

  if (t === "string" || t === "number" || t === "boolean") return true;

  if (Array.isArray(v)) return v.every(isJSONValue);

  if (t === "object") {
    return Object.values(v as JSONObject).every(isJSONValue);
  }
  return false;
}
///////////////////////////////////////////////////////////////////////

type DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

type DeepReadonly<T> = T extends Function
  ? T
  : T extends Array<infer U>
  ? ReadonlyArray<DeepReadonly<U>>
  : T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T;
type DeepNonNullable<T> = T extends null | undefined
  ? never
  : T extends Array<infer U>
  ? Array<DeepNonNullable<U>>
  : T extends object
  ? { [K in keyof T]-?: DeepNonNullable<T[K]> }
  : T;

type Example = {
  a: number;
  b: {
    c: string;
    d: string;
  };
  e: Array<{ f: null | undefined | { g: number } }>;
};

type PartialExemple = DeepPartial<Example>;
type ReadonlyExample = DeepReadonly<Example>;
type NonNullableExample = DeepNonNullable<Example>;
///////////////////////////////////////////////////////////////////////

type BiNode<T> = {
  value: T;
  parent?: BiNode<T>;
  children: BiNode<T>[];
};
///////////////////////////////////////////////////////////////////////

type Prev = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

type DepthSafePartial<T, D extends number = 5> = D extends 0
  ? T
  : T extends Function
  ? T
  : T extends Array<infer U>
  ? Array<DepthSafePartial<U, Prev[D]>>
  : T extends object
  ? { [K in keyof T]?: DepthSafePartial<T[K], Prev[D]> }
  : T;

type Lazy<T> = () => T;

type LazyTree<T> = {
  value: T;
  children: Lazy<Array<Lazy<T>>>;
};
