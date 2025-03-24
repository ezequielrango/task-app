import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function testDB() {
    try {
        await prisma.$connect();
        console.log("✅ Conectado a PostgreSQL");
    } catch (error) {
        console.error("❌ Error al conectar con la base de datos:", error);
    }
}

testDB();

export default prisma;
