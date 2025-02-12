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
    t.nullable.list.field("DemoDataQuery", {
      type: DemoDataList,
      args: { data: DemoDataInput },
      async resolve(_root, args, _ctx) {
        try {
          const result = await prisma.demoData.findMany({
            take: args.data?.take,
            skip: args.data?.skip,
            // where: {
            //   id: Number(args?.data?.id)
            // },
          });
          return result;
        } catch (error) {
          console.log(error);
        }
      },
    });
  },
});
