interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '123123194u198eujifj8ds9afj8w4ur8fh48qrrh84r84',
        user: {
          name: 'Lucas',
          email: 'lucas@xpto.com',
        },
      });
    }, 20000);
  });
}
