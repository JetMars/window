const postData = async function (url, formData) {
  const res = await fetch(url, {
    method: "POST",
    body: formData
  });

  if (!res.ok) {
    throw new Error(`Not found ${url}, status: ${res.status}`);
  }

  return await res.text();
};

export default postData;
