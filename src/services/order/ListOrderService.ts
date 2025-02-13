import prismaClient from "../../prisma";

class ListOrderService {
  async execute() {
    const order = await prismaClient.order.findMany({
      where: {
        status: false,
        draft: false,
      },
      orderBy: {
        create_at: "desc",
      },

      select: {
        id: true,
        table: true,
        name: true,
        draft: true,
      },
    });

    return order;
  }
}

export { ListOrderService };
