export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      
      const url = /^http(s)?:\/\//i.test(request.url) ? new URL(request.url) : new URL(`https://${request.url}`);
      const queryString = decodeURIComponent(url.search.substring(1));
      return fetch(queryString);
      
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="btdig.com";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
