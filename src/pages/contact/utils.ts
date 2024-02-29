import ky from 'ky';

const ENDPOINT = 'https://public.herotofu.com/v1/54ad0b50-5c06-11ee-9198-bfee6681f065';

export function sendMailQuery(firstname: string, lastname: string, email: string, message: string) {
  return ky.post(ENDPOINT, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstname, lastname, email, message })
  });
}
