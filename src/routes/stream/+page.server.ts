import type { PageServerLoad } from "./$types";

const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))

const fetchData = async (): Promise<string>  => {
  return new Promise<string>(async(resolve) => {
    await sleep(2000)
    resolve("Data Load")
  })
}

const fetchStreamData= async (): Promise<string>  => {
  return new Promise<string>(async(resolve) => {
    await sleep(4000)
    resolve("Data Stream")
  })
}

export const load: PageServerLoad = () => {
  return {
      data: fetchData(),
      streamed: {
        data: fetchStreamData()
      },
  };
};
