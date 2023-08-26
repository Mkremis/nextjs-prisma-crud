import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(newTask);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
