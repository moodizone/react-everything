// null as initialize value
export type ResponseType = { message: string } | { data: number[] } | null;
export type Mode = "resolve" | "reject" | "throw error";

export function fakeAPI(mode: Mode = "reject"): Promise<ResponseType> {
  const delay = 400;
  return new Promise<ResponseType>((resolve, reject) => {
    if (mode === "resolve")
      return setTimeout(() => resolve({ data: [1, 2, 3] }), delay);
    else if (mode === "reject") {
      return setTimeout(
        () => reject("Your Request Rejected due to network error"),
        delay
      );
    }
    return setTimeout(() => {
      throw new Error("Your Request Rejected due to network error");
    }, delay);
  });
}
