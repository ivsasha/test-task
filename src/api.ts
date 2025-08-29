function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getUsers(page = 1, count = 5) {
  const res = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`,
  );

  if (!res.ok) {
    throw new Error(`Status: ${res.status}`);
  }

  const data = await res.json();

  await wait(500);

  return data;
}

export async function getPosition() {
  const res = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/positions`,
  );

  if (!res.ok) {
    throw new Error(`Status: ${res.status}`);
  }

  const data = await res.json();

  return data;
}

export async function getToken(): Promise<string> {
  const res = await fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/token',
  );

  if (!res.ok) {
    throw new Error(`Token error: ${res.status}`);
  }

  const data = await res.json();

  return data.token;
}

export async function createUser(formData: FormData) {
  const token = await getToken();

  const res = await fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/users',
    {
      method: 'POST',
      headers: {
        Token: token, // токен
      },
      body: formData, // важливо: FormData, без JSON.stringify
    },
  );

  const data = await res.json();

  if (!res.ok) {
    throw data;
  }

  return data;
}
