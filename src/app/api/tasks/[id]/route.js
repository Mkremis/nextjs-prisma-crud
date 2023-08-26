import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const updatedData = await request.json();
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(params.id),
      },
      data: updatedData,
    });
    return NextResponse.json({
      message: `Se ha actualizado la tarea: ${updatedTask.title}`,
      data: updatedTask,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const deletedTask = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json({
      message: `Se ha eliminado la tarea: ${deletedTask.title}`,
    });
  } catch (error) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
