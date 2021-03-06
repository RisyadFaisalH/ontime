// Import needed libraries and dependencies

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Define prisma client

// Function to handle event input or showing the events
export default async function (req, res) {
  switch (req.method) {
    // There will be POST and GET method
    case "POST": {
      // Get data from request body
      const data = req.body;
      // Try to create inputted event data from request body using prisma.create()
      // (https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#create)
      try {
        const event = await prisma.event.create({
          data: { ...data },
        });
        // Send successful response
        res.send({ success: true, code: 200, data: event });
      } catch (error) {
        console.log(error);
      }
      break;
    }
    case "GET": {
      if (req.query.userId) {
        const userId = req.query.userId;
        const events = await prisma.event.findMany({
          where: { userId: userId },
        });
        res.send({ success: true, code: 200, data: events });
      } else if (req.query.id) {
        const id = req.query.id;
        const event = await prisma.event.findUnique({
          where: {
            id: id,
          },
        });
        res.send({ success: true, code: 200, data: event });
      }
      break;
    }
    case "DELETE": {
      const id = req.query.id;

      await prisma.event.delete({
        where: {
          id: id,
        },
      });

      res.status(204).end();
      break;
    }
    case "PUT": {
      const id = req.query.id;
      const data = req.body;

      try {
        const event = await prisma.event.update({
          where: {
            id: id,
          },
          data: {
            ...data,
          },
        });
        res.send({ success: true, code: 200, data: event });
      } catch (error) {
        console.log(error.response);
      }
      break;
    }
    default:
      // If the method is not "POST" or "GET", send exception "Method Not Allowed"
      res.status(404).send({ message: "Method Not Allowed" });
      break;
  }
}
