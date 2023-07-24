import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../lib/prisma";

export async function transactionRoutes(app: FastifyInstance) {
  app.addHook("preHandler", async (request) => {
    await request.jwtVerify();
  });

  app.post("/transactions", async (request, reply) => {
    const bodySchema = z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      value: z.number().min(1),
      date: z.string().nonempty(),
      type: z.enum(["INCOME", "EXPENSE"]),
    });

    try {
      const { title, description, value, date, type } = bodySchema.parse(
        request.body
      );

      await prisma.transaction.create({
        data: {
          title,
          description,
          value,
          date,
          type,
          idOwner: request.user.sub,
        },
      });

      return reply.send({ message: "transação criada" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return reply.code(400).send({ message: err.issues[0].message });
      }

      console.log(err);
    }
  });
}
