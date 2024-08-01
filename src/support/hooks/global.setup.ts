import { type FullConfig, Page } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';


async function globalSetup(config: FullConfig) {
  console.log('iniciando testes...');    
  dotenv.config({
    path: `${path.join(process.cwd(), `./envs/.env.${process.env.environment || 'dev'}`)}`,
    override: true
  });
}
 
 


export default globalSetup;

