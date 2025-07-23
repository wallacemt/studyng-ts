async function showSum(a: number, b: number): Promise<void> {
  const somar = await import("./math");
  console.log(`A soma de ${a} e ${b} é: ${somar.default(a, b)}`);
}

const input = "10";
