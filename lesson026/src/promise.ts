const promiseNumber: Promise<number> = Promise.resolve(42);

promiseNumber
  .then((v) => {
    console.log(`Valor: ${v}`);
  })
  .catch((e) => {
    console.error(`Error retornado: ${e}`);
  })
  .finally(() => console.log("Finalizado!"));

const promisse: Promise<number>[] = [Promise.resolve(2), Promise.resolve(5)];

const allPromises: Promise<number[]> = Promise.all(promisse);
