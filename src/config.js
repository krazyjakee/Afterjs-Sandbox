export const runtimeConfig =
  typeof window !== 'undefined'
    ? {}
    : {
        // server
        RAZZLE_SECRET: process.env.RAZZLE_SECRET,
      };