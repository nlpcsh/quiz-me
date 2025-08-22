export default async function runClient({ req, method, url }) {
  if (typeof window === 'undefined') {
    // We are on the server
    return await fetch(
      `http://ingress-nginx-controller.ingress-nginx.svc.cluster.local${url}`,
      {
        method: method,
        headers: req.headers
      }
    );
  } else {
    // We must be on the browser
    return await fetch(`${url}`, {
      method: method
    });
  }
}
