import fastify from 'fastify';
import Routes from './Routes/routes'
import config from './Config/index.config';
import { initializeModels } from '../models';



const app = fastify();

app.register(Routes,{prefix:"api/users"})


async function main()
{
    try{
        await initializeModels();
        console.log('Database connected and models synchronized.');
        await app.listen({ port: config.PORT, host: '0.0.0.0' });
        console.log(`Server is running on porttt ${config.PORT}`);
    }catch(e)
    { 
        console.error(e);
        process.exit(1);
    }

}
main();

