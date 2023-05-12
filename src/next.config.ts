module.exports = {
    async rewrites() {
      return [
        {
          source: '/graphql',
          destination: 'https://practicaopcional.deno.dev/graphql',
        },
      ];
    },
  };
  