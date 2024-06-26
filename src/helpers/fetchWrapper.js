const methods = {
    post: "POST",
    patch: "PATCH",
    delete: "DELETE",
  };
  
  const headers = {
    "Content-Type": "application/json",
    "Scope-Key": "8TSKR76EQVOX45",
  };
  
  const handleFetch = async (url, options = {}) => {
    const res = await fetch(`/api/${url}`, {
      credentials: "include",
      headers,
      ...options,
    });
  
    if (!res.ok) {
      if (res.status >= 500) throw { error: ["Something going wrong"] };
      throw await res.json();
    }
    if (res.ok) return await res.json();
  };
  
  export const get = (url) => {
    console.log(`GET: ${url}`);
    return handleFetch(url);
  };
  
  export const post = (url, body) => {
    console.log(`POST: ${url}`);
    return handleFetch(url, {
      method: methods.post,
      body: JSON.stringify(body),
    });
  };
  
  export const patch = (url, body) => {
    console.log(`PATCH: ${url}`);
    return handleFetch(url, {
      method: methods.patch,
      body: JSON.stringify(body),
    });
  };
  
  export const _delete = (url) => {
    console.log(`DELETE: ${url}`);
    return handleFetch(url, {
      method: methods.delete,
    });
  };
  