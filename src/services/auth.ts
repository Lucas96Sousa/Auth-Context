export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: '123123194u198eujifj8ds9afj8w4ur8fh48qrrh84r84',
        user: {
          name: 'Lucas',
          email: 'lucas@xpto.com',
        },
      });
    }, 200);
  });
}
