import { extendType, inputObjectType, objectType } from "nexus";
import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

export const DemoDataList = objectType({
  name: "DemoDataList",
  definition(t) {
    t.int("id");
    t.string("name");
    t.int("age");
    t.string("occupation");
  },
});
export const DemoDataResponse = objectType({
  name: "DemoDataResponse",
  definition(t) {
    t.list.field("items", { type: DemoDataList });
    t.int("totalCount");
  },
});

export const DemoDataInput = inputObjectType({
  name: "DemoDataInput",
  definition(t) {
    t.nullable.int("take");
    t.nullable.int("skip");
    t.nullable.int("id");
  },
});

export const DemoDataQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("DemoDataQuery", {
      type: DemoDataResponse,
      args: { data: DemoDataInput! },
      async resolve(_root, args, _ctx) {
        try {
          const items = await prisma.demoData.findMany({
            take: args.data?.take ?? undefined,
            skip: args.data?.skip ?? undefined,
            // where: {
            //   id: Number(args?.data?.id)
            // },
          });
          const totalCount = await prisma.demoData.count();
          return { items, totalCount };
        } catch (error) {
          console.log(error);
        }
      },
    });
  },
});
