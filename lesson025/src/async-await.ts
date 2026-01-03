async function getNumber(): Promise<number> {
  return 10;
}

async function sumWithTwenty(): Promise<number> {
  const value = await getNumber();

  return value + 20;
}
async function erroExemple(): Promise<void> {
  try {
    const result = await sumWithTwenty();
    console.log(`Resultado: ${result}`);
  } catch (error) {
    console.error(error);
  }
}
