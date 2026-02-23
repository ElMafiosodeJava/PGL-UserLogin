import * as bcrypt from 'bcrypt';

async function hashPassword(pwd: string): Promise<string> {
  return await bcrypt.hash(pwd, 10);
}

async function isSamePassword(pwd: string, hash: string): Promise<boolean> {
  return bcrypt.compare(pwd, hash);
}

export const hashTools = {
  hashPassword,
  isSamePassword
};
