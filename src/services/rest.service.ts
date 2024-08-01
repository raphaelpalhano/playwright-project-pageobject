export async function postForm(endpoint: string, payload: any, headers?: { [key: string]: string; }) {
  let body: any;
  let status: number | any;

  if (!globalThis.requestService) {
    throw new Error('requestService não foi inicializado corretamente.');
  }

  try {

    const request =  await requestService.post(endpoint, {
      form: payload,
      headers: headers
    });

    status =  request.status();
    body = await request.json();
   
  } catch(e) {
    return {
      'body': e,
      'status': status 
    };
  }
  
  return {
    'body': body,
    'status': status
  };

}

export async function postRaw(endpoint: string, payload: any, headers?: { [key: string]: string; }) {
  let body: any;
  let status: number | any;

  if (!globalThis.requestService) {
    throw new Error('requestService not started.');
  }

  try {

    const request =  await requestService.post(endpoint, {
      data: payload,
      headers: headers
    });
    
    status = request.status();
    body = await request.json();
   
  } catch(e) {
    return {
      'body': e,
      'status': status
    };
  }
  
  return {
    'body': body,
    'status': status
  };
 

}

export async function putForm(endpoint: string, payload: any, headers?: { [key: string]: string; }) {
  let body: any;
  let status: number | any;

  if (!globalThis.requestService) {
    throw new Error('requestService not started.');
  }

  try {

    const request =  await requestService.put(endpoint, {
      form: payload,
      headers: headers
    });

    status = await request.status();
    body = request.json();

   
  } catch(e) {
    return {
      'body': e,
      'status': status
    };
  }
  
  return {
    'body': body,
    'status': status
  };

}

export async function get(endpoint: string, headers?: { [key: string]: string; }) {
  let body: any;
  let status: number | any;
  if (!globalThis.requestService) {
    throw new Error('requestService not started.');
  }
  try {

    const request =  await requestService.get(endpoint, {
      headers: headers
    });
  
    status = request.status();
    body = await request.json();
   
  } catch(e) {
    return {
      'body': e,
      'status': status
    };
  }
  
  return {
    'body': body,
    'status': status
  };
}

export async function getQuery(endpoint: string, queryParam: string, headers?: { [key: string]: string; }) {
  let body: any;
  let status: number | any;
  if (!globalThis.requestService) {
    throw new Error('requestService not started.');
  }
  try {

    const request =  await requestService.get(`${endpoint}?${queryParam}`, {
      headers: headers
    });
  
    status = request.status();
    body = await request.json();
   
  } catch(e) {
    return {
      'body': e,
      'status': status
    };
  }
  
  return {
    'body': body,
    'status': status
  };
}